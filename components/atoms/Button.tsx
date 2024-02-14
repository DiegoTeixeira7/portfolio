import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import '@/styles/components/atoms/Button.scss'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  disableButton?: boolean
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`button ${props.disableButton ? 'disabled' : ''}`}
      {...props}
    >
      {props.children}
    </button>
  )
}
