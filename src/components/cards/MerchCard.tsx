import { useState } from 'react'
import type { MerchProduct } from '../../types'

interface MerchCardProps {
  product: MerchProduct
}

export function MerchCard({ product }: MerchCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="flex flex-col rounded-none overflow-hidden flex-shrink-0 cursor-default transition-all duration-300"
      style={{
        width: '280px',
        border: hovered ? '1px solid #FFFF00' : '1px dashed #41413B',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[400ms] ease-default"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2">
        {product.badge && (
          <span className="font-ui text-[10px] font-semibold tracking-[2px] uppercase text-accent">
            {product.badge}
          </span>
        )}
        <h3 className="font-ui text-[14px] font-bold uppercase text-white leading-tight">
          {product.name}
        </h3>
        <p className="font-ui text-[12px] text-[#888888] leading-snug line-clamp-2">
          {product.description}
        </p>
        <span className="font-display text-accent text-[20px] font-[800] mt-1">
          {product.price}
        </span>
      </div>
    </article>
  )
}
