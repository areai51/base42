/** @jsx h */
import { h } from 'hono/jsx'

interface CardProps {
  children: any
  title?: string
  subtitle?: string
  footer?: any
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'sm' | 'md' | 'lg'
  className?: string
  style?: any
}

export function Card({
  children,
  title,
  subtitle,
  footer,
  variant = 'default',
  padding = 'md',
  className = '',
  style = {}
}: CardProps) {
  const baseStyles = {
    border: '1px solid var(--muted-border-color)',
    borderRadius: 'var(--border-radius)',
    padding: padding === 'sm' ? '1rem' : padding === 'lg' ? '2rem' : '1.5rem',
    marginBottom: '1rem',
    backgroundColor: 'var(--background-color)',
    ...style
  }

  const elevatedStyles = variant === 'elevated' ? {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  } : {}

  const finalStyles = { ...baseStyles, ...elevatedStyles }

  return (
    <div class={`card ${className}`.trim()} style={finalStyles}>
      {title && (
        <header style={{ marginBottom: '1rem' }}>
          {title && <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>}
          {subtitle && <p style={{ margin: '0', color: 'var(--muted-color)' }}>{subtitle}</p>}
        </header>
      )}

      <div style={{ marginBottom: footer ? '1rem' : '0' }}>
        {children}
      </div>

      {footer && (
        <footer style={{ borderTop: '1px solid var(--muted-border-color)', paddingTop: '1rem' }}>
          {footer}
        </footer>
      )}
    </div>
  )
}