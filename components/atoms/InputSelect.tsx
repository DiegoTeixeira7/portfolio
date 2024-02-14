import { SelectOptions } from '@/interfaces/input'
import '@/styles/components/atoms/SelectInput.scss'
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  error?: string
  label?: string
  options: SelectOptions[]
}

export default function InputSelect(props: SelectProps) {
  return (
    <div className="select-input">
      <div>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
      </div>
      <select {...props}>
        <option id="first-option" disabled hidden value="">
          Selecionar
        </option>
        {props.options.map((opt) => {
          return (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          )
        })}
      </select>
      {props.error && <span className="error">{props.error}</span>}
    </div>
  )
}
