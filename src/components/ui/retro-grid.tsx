import React from 'react'
import { cn } from '@/lib/utils'

interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cellClassName?: string
}

export const RetroGrid: React.FC<RetroGridProps> = ({
  className,
  cellClassName,
  ...props
}) => {
  return (
    <div
      className={cn('grid grid-cols-12 grid-rows-6', className)}
      {...props}
    >
      {[...Array(72)].map((_, i) => (
        <div
          key={i}
          className={cn('border-[0.5px] border-opacity-50', cellClassName)}
        />
      ))}
    </div>
  )
}