import type { UpcomingMatch, PastMatch } from '../../types'

interface UpcomingMatchCardProps {
  match: UpcomingMatch
  ocLogo: string
}

interface PastMatchCardProps {
  match: PastMatch
  ocLogo: string
}

export function UpcomingMatchCard({ match, ocLogo }: UpcomingMatchCardProps) {
  return (
    <article
      className="flex flex-col gap-3 p-4 rounded-none"
      style={{ background: '#FFFDFD', border: '1px solid #FEFF00' }}
    >
      {/* Event */}
      <div className="flex items-center gap-2">
        {match.eventLogo && (
          <img src={match.eventLogo} alt={match.eventName} className="h-5 object-contain" />
        )}
        <span className="font-ui text-[11px] font-medium text-[#888888] uppercase tracking-[1px] truncate">
          {match.eventName}
        </span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <img src={ocLogo} alt="Overclock" className="w-10 h-10 object-contain" />
          <span className="font-display text-black uppercase font-[800] text-[18px] tracking-[2px]">OC</span>
        </div>

        <span
          className="font-ui text-[11px] font-semibold text-[#888888] uppercase tracking-[1px]"
        >
          VS
        </span>

        <div className="flex items-center gap-2 flex-row-reverse">
          <img src={match.opponentLogo} alt={match.opponentName} className="w-10 h-10 object-contain" />
          <span className="font-display text-black uppercase font-[800] text-[18px] tracking-[2px] truncate max-w-[80px]">
            {match.opponentName.split(' ')[0].toUpperCase()}
          </span>
        </div>
      </div>

      {/* Date + Format */}
      <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px dashed #41413B' }}>
        <span className="font-display text-black font-[800] text-[14px] uppercase tracking-[1px]">
          {match.dateLabel}
        </span>
        <span className="font-ui text-[11px] text-[#888888] uppercase">{match.format}</span>
      </div>

      {/* Microcopy */}
      <p className="font-ui text-[12px] text-[#888888]">{match.microcopy}</p>
    </article>
  )
}

export function PastMatchCard({ match, ocLogo }: PastMatchCardProps) {
  return (
    <article
      className="flex flex-col gap-3 p-4 rounded-none"
      style={{ background: '#F9FAFB', border: '1px solid #FEFF00' }}
    >
      {/* Event */}
      <div className="flex items-center gap-2">
        <span className="font-ui text-[11px] font-medium text-[#888888] uppercase tracking-[1px] truncate">
          {match.eventName}
        </span>
        <span className="font-ui text-[11px] text-[#888888] ml-auto">{match.dateLabel}</span>
      </div>

      {/* Teams + Score */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img src={ocLogo} alt="Overclock" className="w-10 h-10 object-contain" />
          <span className="font-display uppercase font-[800] text-[18px] tracking-[2px] text-black">OC</span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2">
          <span
            className="font-display font-[800] text-[28px] leading-none"
            style={{ color: match.isWin ? '#FFFF00' : '#888888' }}
          >
            {match.scoreOC}
          </span>
          <span className="font-ui text-[16px] text-[#888888]">—</span>
          <span
            className="font-display font-[800] text-[28px] leading-none"
            style={{ color: !match.isWin ? '#FFFF00' : '#888888' }}
          >
            {match.scoreOpp}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-row-reverse">
          <img src={match.opponentLogo} alt={match.opponentName} className="w-10 h-10 object-contain" />
          <span className="font-display uppercase font-[800] text-[18px] tracking-[2px] text-black truncate max-w-[80px]">
            {match.opponentName.split(' ')[0].toUpperCase()}
          </span>
        </div>
      </div>

      {/* Maps */}
      {match.maps.length > 0 && (
        <div className="flex gap-2 flex-wrap pt-2" style={{ borderTop: '1px dashed #41413B' }}>
          {match.maps.map((map) => (
            <div key={map.name} className="flex items-center gap-1">
              {map.thumb && (
                <img src={map.thumb} alt={map.name} className="w-8 h-5 object-cover rounded-none" />
              )}
              <span className="font-ui text-[11px] text-[#888888] uppercase">{map.name}</span>
              <span className="font-ui text-[11px] text-black font-semibold">
                {map.scoreOC}–{map.scoreOpp}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Microcopy */}
      <p className="font-ui text-[12px] text-[#888888]">{match.microcopy}</p>
    </article>
  )
}
