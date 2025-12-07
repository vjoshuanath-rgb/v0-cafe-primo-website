import { PawIcon } from "./paw-icon"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="text-2xl md:text-3xl font-bold tracking-[0.3em] text-foreground">CAFÉ</span>
      <span className="flex items-center text-lg md:text-xl font-medium tracking-[0.5em] text-foreground">
        PRIM
        <PawIcon className="w-5 h-5 md:w-6 md:h-6 -ml-1" />
      </span>
    </div>
  )
}
