import type { PartnerData } from '../../types'

interface LogoStripProps {
  partners: PartnerData[]
  className?: string
}

/* LogoStrip — infinite horizontal scroll of partner logos.
   Logos rendered 4× to support translateX(-25%) seamless loop.
   Each set = 8 logos × 4 = 32 items.
   All logos filtered to white via CSS filter.
*/
export function LogoStrip({ partners, className = '' }: LogoStripProps) {
  const repeated = [...partners, ...partners, ...partners, ...partners]

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ borderTop: '1px dashed #41413B', borderBottom: '1px dashed #41413B' }}
    >
      <div
        className="flex animate-logo-scroll"
        style={{ width: `${repeated.length * 180}px` }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused' }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running' }}
      >
        {repeated.map((partner, i) => (
          <div
            key={`${partner.id}-${i}`}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: '180px',
              height: '110px',
              borderRight: '1px dashed #41413B',
              marginRight: '-1px',
            }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-[80%] max-h-[60%] object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
