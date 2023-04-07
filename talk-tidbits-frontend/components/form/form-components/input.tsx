import { PropsWithChildren } from 'react'
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
  register?: UseFormRegister<any>
  inputLabel?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({
  register,
  name,
  ...rest
}: PropsWithChildren<InputProps>) {
  return <input {...(register && name && { ...register(name) })} {...rest} />
}
