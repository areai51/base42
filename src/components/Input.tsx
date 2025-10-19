/** @jsx h */
import { h } from 'hono/jsx'

interface InputProps {
  label?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'
  placeholder?: string
  value?: string
  required?: boolean
  disabled?: boolean
  error?: string
  helper?: string
  onChange?: (value: string) => void
  style?: any
  className?: string
  name?: string
  id?: string
}

export function Input({
  label,
  type = 'text',
  placeholder,
  value,
  required = false,
  disabled = false,
  error,
  helper,
  onChange,
  style = {},
  className = '',
  name,
  id
}: InputProps) {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }} className={className}>
      {label && (
        <label htmlFor={inputId} style={{ display: 'block', marginBottom: '0.375rem', fontWeight: '500' }}>
          {label}
          {required && <span style={{ color: 'var(--del-color)', marginLeft: '0.25rem' }}>*</span>}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '0.625rem 0.875rem',
          border: error ? '1px solid var(--del-color)' : '1px solid var(--form-element-border-color)',
          borderRadius: 'var(--border-radius)',
          fontSize: '1rem',
          backgroundColor: disabled ? 'var(--form-element-disabled-background-color)' : 'var(--form-element-background-color)',
          ...style
        }}
      />

      {error && (
        <small style={{ color: 'var(--del-color)', display: 'block', marginTop: '0.25rem' }}>
          {error}
        </small>
      )}

      {helper && !error && (
        <small style={{ color: 'var(--muted-color)', display: 'block', marginTop: '0.25rem' }}>
          {helper}
        </small>
      )}
    </div>
  )
}