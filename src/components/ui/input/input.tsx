import {
  ChangeEvent,
  ComponentProps,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from 'react'

import { CloseSvg, EyeOffSvg, EyeSvg, SearchSvg } from '@/assets'

import s from './input.module.scss'

export type InputProps = {
  error?: boolean
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  search?: boolean
  variant?: 'password' | 'search' | 'text'
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>

export const Input = (props: InputProps) => {
  const {
    className,
    error,
    errorMessage,
    label,
    onChange,
    onValueChange,
    placeholder,
    search,
    type,
    value,
    variant,
    ...rest
  } = props

  const [showPass, setShowPass] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const finalType = getType(type, showPass)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
    onChange?.(e)
    onValueChange?.(e.currentTarget.value)
  }
  function handleClearInput() {
    setSearchValue('')
  }

  return (
    <div className={s.container}>
      {label && <label className={s.inputLabel}>{label}</label>}
      <div className={s.fieldContainer}>
        {search && <SearchSvg className={s.inputSearch} />}
        <input
          className={`${s.input} ${error ? s.error : ''} ${search ? s.search : ''}`}
          {...rest}
          onChange={handleChange}
          placeholder={placeholder}
          type={finalType}
          value={searchValue}
        />
        {variant === 'password' && (
          <button
            className={s.showPassword}
            onClick={() => setShowPass(prev => !prev)}
            type={'button'}
          >
            {showPass ? <EyeOffSvg /> : <EyeSvg />}
          </button>
        )}
        {searchValue && search && (
          <button className={s.inputClose} onClick={handleClearInput}>
            <CloseSvg />
          </button>
        )}
      </div>
      {error && <div className={s.error}>{errorMessage}</div>}
    </div>
  )
}

function getType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
