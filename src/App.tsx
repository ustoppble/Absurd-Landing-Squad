import { useEffect, useState } from 'react'
import { Nav } from './components/sections/Nav'
import { VideoHero } from './components/sections/VideoHero'
import { HeroMain } from './components/sections/HeroMain'
import { Roster } from './components/sections/Roster'
import { Achievements } from './components/sections/Achievements'
import { Matches } from './components/sections/Matches'
import { News } from './components/sections/News'
import { Merch } from './components/sections/Merch'
import { Partners } from './components/sections/Partners'
import { Recruitment } from './components/sections/Recruitment'
import { Footer } from './components/sections/Footer'

function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop || document.body.scrollTop
      const total = doc.scrollHeight - doc.clientHeight
      setWidth(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  )
}

export function App() {
  return (
    <>
      <ScrollProgress />

      {/* 01 · NAV — sticky, transitions dark on scroll */}
      <Nav />

      <main>
        {/* 02 · VIDEO-HERO — fullscreen still + parallax */}
        <VideoHero />

        {/* 03 · HERO-MAIN — 2-col, olive gradient, L-corners */}
        <HeroMain />

        {/* 04 · ROSTER — 3-col grid, player cards */}
        <Roster />

        {/* 05 · ACHIEVEMENTS — stat + list + trophy photo */}
        <Achievements />

        {/* 06 · MATCHES — tabbed, HUD-style cards */}
        <Matches />

        {/* 07 · NEWS — 3×2 masonry grid */}
        <News />

        {/* 08 · MERCH — horizontal slider */}
        <Merch />

        {/* 09 · PARTNERS — logo strip animate */}
        <Partners />

        {/* 10 · RECRUITMENT — bg foto + 2 cards */}
        <Recruitment />
      </main>

      {/* 11 · FOOTER */}
      <Footer />
    </>
  )
}
