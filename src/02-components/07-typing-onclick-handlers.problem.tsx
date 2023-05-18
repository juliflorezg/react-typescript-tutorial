import React from 'react'

interface ButtonProps {
  className: string
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

const Parent = () => {
  return (
    <div>
      <Button
        className="jeje"
        onClick={e => {
          console.log(e.currentTarget.value)
        }}
      >
        children
      </Button>
    </div>
  )
}
