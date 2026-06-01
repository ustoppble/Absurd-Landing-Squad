import type { BadgeVariant } from '../../types'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
  pulseDot?: boolean
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  accent: 'text-accent border-accent',
  live: 'text-accent border-accent',
  default: 'text-white border-[#41413B]',
  match: 'text-accent border-accent',
  team: 'text-white border-[#41413B]',
  media: 'text-[#888888] border-[#41413B]',
}

export function Badge({ variant = 'default', children, className = '', pulseDot = false }: BadgeProps) {
  const variantClass = VARIANT_CLASSES[variant]

  return (
    <span
      className={`inline-flex items-center gap-[6px] px-[10px] py-[4px] border border-dashed ${variantClass} font-ui text-[12px] font-medium tracking-[1px] uppercase bg-transparent rounded-none ${className}`}
    >
      {(pulseDot || variant === 'live') && (
        <span
          className="block w-[6px] h-[6px] rounded-full bg-accent animate-badge-pulse flex-shrink-0"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

interface RoleBadgeProps {
  role: string
  color: string
  className?: string
}

export function RoleBadge({ role, color, className = '' }: RoleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-ui text-[11px] font-semibold tracking-[2px] uppercase ${className}`}
      style={{ color }}
    >
      {role}
    </span>
  )
}
