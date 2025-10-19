/** @jsx h */
import { h } from 'hono/jsx'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: any
  size?: 'sm' | 'md' | 'lg'
  showCloseButton?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true
}: ModalProps) {
  if (!isOpen) return null

  const modalWidth = size === 'sm' ? '400px' : size === 'lg' ? '800px' : '600px'

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--background-color)',
          borderRadius: 'var(--border-radius)',
          padding: '2rem',
          width: '90%',
          maxWidth: modalWidth,
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--muted-color)'
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        )}

        {title && (
          <h2 style={{ margin: '0 0 1rem 0', paddingRight: '2rem' }}>
            {title}
          </h2>
        )}

        <div>
          {children}
        </div>
      </div>
    </div>
  )
}