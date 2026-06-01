import { useRef } from 'react'
import { Button } from '../base/Button'
import { VideoFrame } from '../base/VideoFrame'
import { NoiseOverlay } from '../base/NoiseOverlay'
import { LogoStrip } from '../base/LogoStrip'
import { useInView } from '../../hooks/useInView'
import { HERO_MAIN, PARTNERS_DATA } from '../../data/content'

export function HeroMain() {
  const { badge } = HERO_MAIN
  const displayBadgeText = badge.isLive ? badge.liveText : badge.text

  const sectionRef = useRef<HTMLElement>(null)
  const { ref: contentRef, inView } = useInView(0.1)

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A1A0F 0%, #0D0D0A 50%, #141410 100%)' }}
    >
      {/* Glow right */}
      <div
        className="absolute right-0 top-0 w-1/2 h-[200%] pointer-events-none z-0 glow-pulse"
        style={{ background: 'radial-gradient(ellipse at center, rgba(120,140,20,0.49) 0%, transparent 55%)' }}
        aria-hidden="true"
      />
      {/* Glow left */}
      <div
        className="absolute left-0 bottom-0 w-2/5 h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(100,120,20,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Noise */}
      <NoiseOverlay className="z-[2]" />

      {/* Main content */}
      <div
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="oc-container relative z-[5] py-[100px] lg:py-[150px]"
      >
        <div
          className="grid gap-[60px] items-center"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {/* Left: copy */}
          <div className="flex flex-col gap-6 max-xl:col-span-2">
            {/* Badge */}
            <div
              className={`reveal-fade${inView ? ' in-view' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span
                className={`inline-flex items-center gap-2 font-ui text-[12px] font-medium tracking-[1px] uppercase text-accent`}
              >
                <span
                  className={`block w-[8px] h-[8px] rounded-full bg-accent flex-shrink-0 ${badge.isLive ? 'animate-badge-pulse' : ''}`}
                  aria-hidden="true"
                />
                {displayBadgeText}
              </span>
            </div>

            {/* Eyebrow */}
            <p
              className={`font-ui text-[11px] font-medium tracking-[2px] uppercase text-[rgba(255,255,255,0.5)] reveal-up${inView ? ' in-view delay-1' : ''}`}
            >
              {HERO_MAIN.eyebrow}
            </p>

            {/* Title — line by line clip reveal */}
            <h1
              className="font-display uppercase leading-[0.95] tracking-[3px]"
              style={{ fontWeight: 800, WebkitFontSmoothing: 'antialiased', fontSize: 'var(--font-size-hero-display)' }}
            >
              <span
                className={`block overflow-hidden`}
              >
                <span
                  className="block text-white"
                  style={{
                    transform: inView ? 'translateY(0)' : 'translateY(110%)',
                    opacity: inView ? 1 : 0,
                    transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s, opacity 0.5s ease 0.1s',
                  }}
                >
                  {HERO_MAIN.titleLine1}
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.5)',
                    transform: inView ? 'translateY(0)' : 'translateY(110%)',
                    opacity: inView ? 1 : 0,
                    transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.22s, opacity 0.5s ease 0.22s',
                  }}
                >
                  {HERO_MAIN.titleLine2}
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`font-ui text-[14px] font-medium tracking-[2px] uppercase text-[#888888] reveal-up${inView ? ' in-view delay-3' : ''}`}
            >
              {HERO_MAIN.subtitle}
            </p>

            {/* Description */}
            <div className="flex flex-col gap-3 max-w-[500px]">
              {HERO_MAIN.description.map((para, i) => (
                <p
                  key={i}
                  className={`font-ui text-[16px] text-[#888888] leading-[1.6] reveal-up${inView ? ` in-view delay-${i + 4}` : ''}`}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 reveal-up${inView ? ' in-view delay-5' : ''}`}
            >
              <Button variant="primary" href="#roster">
                {HERO_MAIN.ctaPrimary}
              </Button>
              <Button variant="ghost" href="#">
                {HERO_MAIN.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right: video frame */}
          <div
            className={`flex justify-center items-center max-xl:col-span-2 reveal-fade${inView ? ' in-view delay-2' : ''}`}
          >
            <VideoFrame
              src={HERO_MAIN.frameImage.src}
              alt={HERO_MAIN.frameImage.alt}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Partners strip immediately below hero */}
      <LogoStrip partners={PARTNERS_DATA} />
    </section>
  )
}
