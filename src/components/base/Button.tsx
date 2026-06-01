import type { ButtonVariant } from '../../types'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: [
    'inline-flex items-center gap-2',
    'px-8 py-[18px]',
    'bg-transparent border border-dashed border-[#41413B]',
    'text-accent font-ui text-[11px] font-medium tracking-[2px] uppercase',
    'rounded-none cursor-pointer',
    'transition-colors duration-300 ease-default',
    'hover:bg-[rgba(255,255,0,0.10)]',
    'focus-visible:outline-2 focus-visible:outline-[#87ADF5] focus-visible:outline-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ].join(' '),
  ghost: [
    'inline-flex items-center gap-2',
    'px-8 py-[18px]',
    'bg-transparent border border-dashed border-[#41413B]',
    'text-white font-ui text-[11px] font-medium tracking-[2px] uppercase',
    'rounded-none cursor-pointer',
    'transition-colors duration-300 ease-default',
    'hover:bg-[rgba(255,255,255,0.10)]',
    'focus-visible:outline-2 focus-visible:outline-[#87ADF5] focus-visible:outline-offset-2',
    'disabled:opacity-40 disabled:cursor-not-allowed',
  ].join(' '),
  'nav-cta': [
    'inline-flex items-center gap-2',
    'px-6 py-3',
    'bg-transparent border border-dashed border-[#41413B]',
    'text-[#000000] font-ui text-[11px] font-medium tracking-[2px] uppercase',
    'rounded-none cursor-pointer',
    'transition-colors duration-300 ease-default',
    'hover:bg-[rgba(0,0,0,0.06)]',
  ].join(' '),
}

export function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const classes = `${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
