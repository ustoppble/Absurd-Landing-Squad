import type { LogoVariant } from '../../types'

interface OverclockLogoProps {
  variant?: LogoVariant
  height?: number
  className?: string
}

/* Inline SVG — no font dependency, no network request.
   Symbol: angular octagon (sharp/tech aesthetic) in yellow.
   Wordmark: bold condensed uppercase text in currentColor.
   variant='dark' = text black (nav on white)
   variant='light' = text white (hero, footer on black)
   variant='icon-only' = symbol only (match cards, badges)
*/
export function OverclockLogo({ variant = 'light', height = 44, className = '' }: OverclockLogoProps) {
  const textColor = variant === 'dark' ? '#000000' : '#FFFFFF'
  const showWordmark = variant !== 'icon-only'
  const viewBox = showWordmark ? '0 0 300 44' : '0 0 44 44'
  const svgWidth = showWordmark ? (height * 300) / 44 : height

  return (
    <svg
      width={svgWidth}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Overclock Esports"
      role="img"
    >
      {/* Symbol: angular octagon (cut corners) in yellow */}
      <polygon
        points="10,0 34,0 44,10 44,34 34,44 10,44 0,34 0,10"
        fill="#FFFF00"
      />
      {/* Clock hands — stylized speed mark in black */}
      <line x1="22" y1="14" x2="22" y2="23" stroke="#000000" strokeWidth="3.5" strokeLinecap="square" />
      <line x1="22" y1="23" x2="29" y2="30" stroke="#000000" strokeWidth="2.5" strokeLinecap="square" />
      {/* Center dot */}
      <rect x="20" y="21" width="4" height="4" fill="#000000" />

      {/* Wordmark */}
      {showWordmark && (
        <text
          x="56"
          y="34"
          fontFamily="'Arial Narrow', 'Arial', sans-serif"
          fontWeight="800"
          fontSize="32"
          fill={textColor}
          letterSpacing="2"
          style={{ fontStretch: 'condensed' }}
        >
          OVERCLOCK
        </text>
      )}
    </svg>
  )
}
