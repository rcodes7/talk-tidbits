import { PropsWithChildren } from 'react'
import { UseFormRegister } from 'react-hook-form'

type RadioGroupProps = {
  register?: UseFormRegister<any>
  name: string
  options: {
    label: string
    value: string
  }[]
}

export default function RadioGroup({
  register,
  name,
  options,
  ...rest
}: PropsWithChildren<RadioGroupProps>) {
  return (
    <>
      {options.map((option) => {
        return (
          <label className="label cursor-pointer" key={option.label}>
            <span className="label-text">{option.label}</span>
            <input
              type="radio"
              className="radio checked:bg-red-500"
              value={option.value}
              {...(register && { ...register(name) })}
            />
          </label>
        )
      })}
    </>
  )
}
