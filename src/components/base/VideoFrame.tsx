interface VideoFrameProps {
  src: string
  alt: string
  className?: string
  showPlay?: boolean
}

/* VideoFrame — still image + decorative play button + L-corner yellow accents
   No real video. The play button is purely decorative (DS spec).
   L-accents generated via inline divs (pseudo-elements unreliable in Tailwind). */
export function VideoFrame({ src, alt, className = '', showPlay = true }: VideoFrameProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        aspectRatio: '16 / 10',
        maxWidth: '600px',
        border: '1px dashed #41413B',
        borderRadius: '0px',
        background: '#0A0A0A',
        overflow: 'visible',
      }}
    >
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ borderRadius: '2px' }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* L-accents — top-left */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none z-10"
        style={{
          top: '-2px', left: '-2px',
          width: '20px', height: '20px',
          borderTop: '2px solid #FFFF00',
          borderLeft: '2px solid #FFFF00',
        }}
      />
      {/* L-accents — top-right */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none z-10"
        style={{
          top: '-2px', right: '-2px',
          width: '20px', height: '20px',
          borderTop: '2px solid #FFFF00',
          borderRight: '2px solid #FFFF00',
        }}
      />
      {/* L-accents — bottom-left */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none z-10"
        style={{
          bottom: '-2px', left: '-2px',
          width: '20px', height: '20px',
          borderBottom: '2px solid #FFFF00',
          borderLeft: '2px solid #FFFF00',
        }}
      />
      {/* L-accents — bottom-right */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none z-10"
        style={{
          bottom: '-2px', right: '-2px',
          width: '20px', height: '20px',
          borderBottom: '2px solid #FFFF00',
          borderRight: '2px solid #FFFF00',
        }}
      />

      {/* Play button — decorative */}
      {showPlay && (
        <div
          className="absolute top-1/2 left-1/2 z-20 cursor-pointer group"
          style={{ transform: 'translate(-50%, -50%)' }}
          aria-hidden="true"
        >
          <div
            className="transition-transform duration-300 ease-default group-hover:scale-110"
            style={{
              width: 0,
              height: 0,
              borderTop: '18px solid transparent',
              borderBottom: '18px solid transparent',
              borderLeft: '28px solid #FFFF00',
            }}
          />
        </div>
      )}
    </div>
  )
}
