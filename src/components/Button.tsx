/** @jsx h */
import { h } from 'hono/jsx'

interface ButtonProps {
  children: any
  variant?: 'primary' | 'secondary' | 'contrast' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  href?: string
  style?: any
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  href,
  style = {},
  className = ''
}: ButtonProps) {
  const baseStyles = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem',
    padding: size === 'sm' ? '0.5rem 1rem' : size === 'lg' ? '0.75rem 1.5rem' : '0.625rem 1.25rem',
    ...style
  }

  const buttonProps = {
    role: 'button',
    'aria-disabled': disabled,
    style: baseStyles,
    className: `${variant} ${className}`.trim(),
    onClick: disabled ? undefined : onClick
  }

  if (href && !disabled) {
    return <a href={href} {...buttonProps}>{children}</a>
  }

  return (
    <button type={type} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  )
}