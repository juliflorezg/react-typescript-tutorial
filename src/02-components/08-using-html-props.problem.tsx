import React, { ButtonHTMLAttributes, ComponentProps } from 'react'

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string
// }

// export const Button = ({ className, ...rest }: ButtonProps) => {
export const Button = ({ className, ...rest }: ComponentProps<'button'>) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  )
}

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>
}
