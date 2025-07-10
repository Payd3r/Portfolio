import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-accent text-white font-bold py-2 px-6 rounded-full hover:bg-accent-hover transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
