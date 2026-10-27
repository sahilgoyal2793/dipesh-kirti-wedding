import type { EventIcon as IconName } from "@/lib/wedding"

const PATHS: Record<IconName, React.ReactNode> = {
  diya: (
    <>
      <path d="M8 30c0 6 7 10 16 10s16-4 16-10H8z" fill="currentColor" />
      <path d="M24 26c-4-4-3-9 0-14 3 5 4 10 0 14z" fill="currentColor" opacity=".7" />
    </>
  ),
  drum: (
    <>
      <ellipse cx="24" cy="14" rx="14" ry="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 14v18c0 3 6 6 14 6s14-3 14-6V14" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 18l24 16M36 18L12 34" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  fire: (
    <>
      <path d="M24 6c6 8 12 12 12 22a12 12 0 01-24 0c0-6 4-9 6-14 2 4 3 6 6 7-2-5-2-10 0-15z" fill="currentColor" />
      <path d="M6 42h36" stroke="currentColor" strokeWidth="3" />
    </>
  ),
  rings: (
    <>
      <circle cx="18" cy="28" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="30" cy="28" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M27 10l3-4 3 4-3 4z" fill="currentColor" />
    </>
  ),
}

export function EventIcon({ name }: { name: IconName }) {
  return (
    <svg className="ico" viewBox="0 0 48 48" aria-hidden="true">
      {PATHS[name] ?? PATHS.diya}
    </svg>
  )
}
