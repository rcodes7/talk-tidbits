import React from 'react'
import { useForm } from 'react-hook-form'

type FormProps = {
  children: React.ReactElement[]
  defaultValues?: any
  onSubmit: (data: any) => void
}

export default function Form({ defaultValues, onSubmit, children }: FormProps) {
  const { handleSubmit, register } = useForm({ defaultValues })

  const registerChildren = (child: React.ReactNode): React.ReactNode => {
    if (!React.isValidElement(child)) return child

    return child.props.name
      ? React.cloneElement(child, {
          ...{
            ...child.props,
            register,
            key: child.props.name,
            children: React.Children.map(
              child.props.children,
              registerChildren
            ),
          },
        })
      : child.props.children
      ? React.cloneElement(child, {
          ...child.props,
          children: React.Children.map(child.props.children, registerChildren),
        })
      : child
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, registerChildren)}
    </form>
  )
}
