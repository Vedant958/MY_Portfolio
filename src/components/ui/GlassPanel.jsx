import { forwardRef } from 'react'

const GlassPanel = forwardRef(function GlassPanel(
  { children, className = '', hud = false, style = {} },
  ref
) {
  return (
    <div
      ref={ref}
      className={`glass-panel ${hud ? 'hud-corners' : ''} p-8 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
})

export default GlassPanel
