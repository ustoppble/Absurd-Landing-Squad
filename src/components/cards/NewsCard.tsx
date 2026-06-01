import { useState } from 'react'
import type { NewsItem } from '../../types'

const CATEGORY_COLORS: Record<NewsItem['category'], string> = {
  MATCH: '#FFFF00',
  TEAM: '#FFFFFF',
  MEDIA: '#888888',
}

interface NewsCardProps {
  item: NewsItem
  staggerOffset?: boolean
}

export function NewsCard({ item, staggerOffset = false }: NewsCardProps) {
  const [hovered, setHovered] = useState(false)
  const catColor = CATEGORY_COLORS[item.category]

  return (
    <article
      className={`flex flex-col bg-transparent rounded-none overflow-hidden ${staggerOffset ? 'mt-[80px]' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          }}
        />
      </div>

      {/* Yellow accent line — grows on hover */}
      <span
        style={{
          display: 'block',
          height: '1px',
          background: '#FFFF00',
          width: hovered ? '100%' : '0',
          transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        aria-hidden="true"
      />

      {/* Body */}
      <div className="pt-4 flex flex-col gap-3">
        {/* Category + Date */}
        <div className="flex items-center justify-between gap-2">
          <span
            className="font-ui text-[11px] font-medium tracking-[1px] uppercase"
            style={{ color: catColor }}
          >
            {item.category}
          </span>
          <span className="font-ui text-[11px] text-[#888888]">{item.date}</span>
        </div>

        {/* Title */}
        <h3
          className="font-ui font-bold uppercase"
          style={{
            fontSize: 'var(--font-size-body)',
            lineHeight: 'var(--line-height-tight)',
            color: hovered ? '#FFFF00' : '#FFFFFF',
            transition: 'color 0.25s ease',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.title}
        </h3>

        {/* Excerpt */}
        <p
          className="font-ui text-[#888888]"
          style={{
            fontSize: 'var(--font-size-body-sm)',
            lineHeight: 'var(--line-height-body)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.excerpt}
        </p>

        {/* Read more link */}
        <a
          href={item.href}
          className="inline-flex items-center gap-1 font-ui text-[11px] font-semibold uppercase tracking-[1px] text-accent w-fit"
          style={{
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          LER MAIS →
        </a>
      </div>
    </article>
  )
}
