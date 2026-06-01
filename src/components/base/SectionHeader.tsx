interface SectionHeaderProps {
  eyebrow?: string
  title: string | string[]
  subtitle?: string
  align?: 'left' | 'center'
  accentLine?: number
  className?: string
}

/* accentLine: which line of title[] to render in accent color (0-indexed) */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  accentLine,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const lines = Array.isArray(title) ? title : [title]

  return (
    <header className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="font-ui text-[11px] font-medium tracking-[2px] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}

      <h2
        className="font-display text-white uppercase leading-[0.95] tracking-[3px]"
        style={{ fontSize: 'var(--font-size-section-xl)', fontWeight: 800, WebkitFontSmoothing: 'antialiased' }}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className="block"
            style={accentLine !== undefined && i === accentLine ? { color: '#FFFF00' } : {}}
          >
            {line}
          </span>
        ))}
      </h2>

      {subtitle && (
        <p className="font-ui text-[#888888] mt-4" style={{ fontSize: 'var(--font-size-body)' }}>
          {subtitle}
        </p>
      )}
    </header>
  )
}
