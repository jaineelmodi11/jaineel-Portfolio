interface AmberDividerProps {
  className?: string
  short?: boolean
}

export function AmberDivider({ className = "", short = false }: AmberDividerProps) {
  if (short) {
    return <div className={`h-px bg-amber/50 w-16 ${className}`} />
  }
  return <div className={`h-px bg-[#1f1f1f] w-full ${className}`} />
}
