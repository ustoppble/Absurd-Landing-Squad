import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { NoiseOverlay } from '../base/NoiseOverlay'
import { VIDEO_HERO } from '../../data/content'

export function VideoHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [parallaxY, setParallaxY] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setParallaxY(window.scrollY * 0.3)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '640px', background: '#000' }}
      aria-label="Hero Overclock Esports"
    >
      {/* Parallax image */}
      <div
        className="absolute inset-x-0"
        style={{ top: '-10%', bottom: '-10%', transform: `translateY(${parallaxY}px)`, willChange: 'transform' }}
        aria-hidden="true"
      >
        <img
          ref={imgRef}
          src={VIDEO_HERO.fallbackImage.src}
          alt={VIDEO_HERO.fallbackImage.alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </div>

      {/* Gradient — heavy bottom + left diagonal for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.97) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2]"
        style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 40%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Yellow glow right */}
      <div
        className="absolute right-0 top-0 w-1/2 z-[2] pointer-events-none glow-pulse"
        style={{ height: '200%', background: 'radial-gradient(ellipse at center, rgba(120,140,20,0.42) 0%, transparent 55%)' }}
        aria-hidden="true"
      />

      {/* Noise */}
      <NoiseOverlay className="z-[3]" />

      {/* L-corner accent — top left */}
      <div
        className="absolute z-[8] pointer-events-none"
        style={{
          top: 32, left: 32,
          width: 36, height: 36,
          borderTop: '2px solid #FFFF00',
          borderLeft: '2px solid #FFFF00',
          opacity: entered ? 1 : 0,
          transition: 'opacity 0.6s ease 0.8s',
        }}
        aria-hidden="true"
      />

      {/* L-corner accent — bottom right */}
      <div
        className="absolute z-[8] pointer-events-none"
        style={{
          bottom: 88, right: 32,
          width: 36, height: 36,
          borderBottom: '2px solid #FFFF00',
          borderRight: '2px solid #FFFF00',
          opacity: entered ? 1 : 0,
          transition: 'opacity 0.6s ease 0.9s',
        }}
        aria-hidden="true"
      />

      {/* Main content — bottom-left editorial layout */}
      <div
        className="absolute z-[10] inset-x-0 bottom-0"
        style={{ paddingBottom: '100px', paddingLeft: 'max(32px, env(safe-area-inset-left))', paddingRight: '32px' }}
      >
        <div style={{ maxWidth: '900px' }}>

          {/* Eyebrow — yellow label */}
          <div
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease 0.1s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '28px', height: '2px',
                background: '#FFFF00',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#FFFF00',
              }}
            >
              CS2 · TIME PROFISSIONAL
            </span>
          </div>

          {/* Main headline — clip reveal line by line */}
          <h1
            style={{
              fontFamily: "'Bebas Neue', 'Arial Narrow', Arial, sans-serif",
              fontSize: 'clamp(72px, 13vw, 200px)',
              lineHeight: '0.92',
              letterSpacing: '2px',
              color: '#FFFFFF',
              margin: 0,
              marginBottom: '24px',
              WebkitFontSmoothing: 'antialiased',
              fontWeight: 400,
            }}
          >
            {VIDEO_HERO.tagline.map((line, i) => (
              <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
                <span
                  style={{
                    display: 'block',
                    opacity: entered ? 1 : 0,
                    transform: entered ? 'translateY(0)' : 'translateY(105%)',
                    transition: `opacity 0.6s ease ${0.2 + i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.12}s`,
                    color: i === 1 ? 'rgba(255,255,255,0.55)' : '#FFFFFF',
                  }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              flexWrap: 'wrap',
              opacity: entered ? 1 : 0,
              transform: entered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s ease 0.6s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s',
            }}
          >
            {[
              { num: '3', label: 'TÍTULOS NACIONAIS' },
              { num: 'TOP 10', label: 'RANKING BR' },
              { num: '1', label: 'QUALIFIER IEM' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '22px',
                    color: '#FFFF00',
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '1.5px',
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </span>
                {i < 2 && (
                  <span
                    style={{
                      width: '1px',
                      height: '20px',
                      background: 'rgba(255,255,255,0.15)',
                      marginLeft: '16px',
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[10]"
        style={{
          opacity: entered ? 1 : 0,
          transition: 'opacity 0.6s ease 1.1s',
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '10px',
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
          }}
        >
          {VIDEO_HERO.scrollLabel}
        </span>
        <ChevronDown size={18} strokeWidth={1.5} className="text-accent animate-scroll-down" />
      </div>
    </section>
  )
}
