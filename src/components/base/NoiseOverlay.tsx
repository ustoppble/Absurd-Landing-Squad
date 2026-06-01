interface NoiseOverlayProps {
  className?: string
}

/* Reusable noise texture overlay for dark sections. */
export function NoiseOverlay({ className = '' }: NoiseOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
      style={{
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }}
    />
  )
}
