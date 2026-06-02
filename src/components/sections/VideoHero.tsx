import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { NoiseOverlay } from '../base/NoiseOverlay'
import { VIDEO_HERO } from '../../data/content'

export function VideoHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [parallaxY, setParallaxY] = useState(0)
  const [entered, setEntered] = useState(false)

  // Trigger entrance animation
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Parallax on scroll
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          setParallaxY(y * 0.35)
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
      style={{ height: '100vh', minHeight: '600px', background: '#000' }}
      aria-label="Hero de vídeo Overclock"
    >
      {/* Parallax image */}
      <div
        className="absolute inset-x-0"
        style={{
          top: '-10%',
          bottom: '-10%',
          transform: `translateY(${parallaxY}px)`,
          willChange: 'transform',
        }}
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

      {/* Gradient overlay — bottom heavy */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.85) 100%)' }}
        aria-hidden="true"
      />

      {/* Radial glow right */}
      <div
        className="absolute right-0 top-0 w-1/2 z-[2] pointer-events-none glow-pulse"
        style={{
          height: '200%',
          background: 'radial-gradient(ellipse at center, rgba(120,140,20,0.49) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      {/* Noise */}
      <NoiseOverlay className="z-[3]" />

      {/* Content — staggered entrance */}
      <div className="relative z-[10] h-full flex flex-col items-center justify-center gap-6 text-center px-5">
        {/* Tagline — clip reveal */}
        <h1
          className="font-display text-white uppercase leading-[0.95] tracking-[3px] max-w-4xl"
          style={{
            fontSize: 'clamp(40px, 8vw, 100px)',
            fontWeight: 800,
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {VIDEO_HERO.tagline.map((line, i) => (
            <span
              key={i}
              className="block overflow-hidden"
            >
              <span
                style={{
                  display: 'block',
                  opacity: entered ? 1 : 0,
                  transform: entered ? 'translateY(0)' : 'translateY(100%)',
                  transition: `opacity 0.7s ease ${0.25 + i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.25 + i * 0.12}s`,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: entered ? 1 : 0,
            transition: 'opacity 0.6s ease 0.9s',
          }}
        >
          <span className="font-ui text-[11px] text-white/60 uppercase tracking-[2px]">
            {VIDEO_HERO.scrollLabel}
          </span>
          <ChevronDown
            size={20}
            strokeWidth={1.5}
            className="text-accent animate-scroll-down"
          />
        </div>
      </div>
    </section>
  )
}
