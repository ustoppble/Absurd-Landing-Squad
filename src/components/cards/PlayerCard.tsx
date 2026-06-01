import { useState } from 'react'
import { RoleBadge } from '../base/Badge'
import type { PlayerData } from '../../types'

interface PlayerCardProps {
  player: PlayerData
}

export function PlayerCard({ player }: PlayerCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="flex flex-col bg-[#121212] rounded-none overflow-hidden cursor-default transition-all duration-300"
      style={{
        border: hovered ? '1px solid #FFFF00' : '1px dashed #41413B',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Portrait */}
      <div className="overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
        <img
          src={player.portrait}
          alt={`${player.fullName} — ${player.role}`}
          className="w-full h-full object-cover transition-transform duration-[400ms] ease-default"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Number + flag */}
        <div className="flex items-center justify-between">
          <span className="font-ui text-[11px] font-medium text-[#888888] tracking-[2px]">
            {player.isCoach ? 'COACH' : `#${player.number}`}
          </span>
          <span className="text-lg" aria-label={`Bandeira: ${player.nation}`}>
            {player.nationFlag}
          </span>
        </div>

        {/* Nick */}
        <h3
          className="font-display uppercase text-white leading-[0.95] tracking-[3px]"
          style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            color: hovered ? '#FFFF00' : '#FFFFFF',
            transition: 'color 0.25s ease',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {player.displayNick}
        </h3>

        {/* Role badge */}
        <RoleBadge role={player.role} color={player.roleColor} />

        {/* Full name */}
        <p className="font-ui text-[13px] text-[#888888]">{player.fullName}</p>

        {/* Stats */}
        {player.stats.length > 0 && (
          <div
            className="flex gap-4 pt-3 mt-1"
            style={{ borderTop: '1px dashed #41413B' }}
          >
            {player.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-accent text-[18px] font-[800] leading-tight">
                  {stat.value}
                </span>
                <span className="font-ui text-[10px] text-[#888888] uppercase tracking-[1px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
