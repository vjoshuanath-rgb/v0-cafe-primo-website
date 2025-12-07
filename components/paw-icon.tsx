export function PawIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <ellipse cx="12" cy="17" rx="4" ry="3.5" />
      <ellipse cx="6" cy="11" rx="2.5" ry="3" />
      <ellipse cx="18" cy="11" rx="2.5" ry="3" />
      <ellipse cx="8.5" cy="6" rx="2" ry="2.5" />
      <ellipse cx="15.5" cy="6" rx="2" ry="2.5" />
    </svg>
  )
}
