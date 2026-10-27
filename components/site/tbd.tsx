import type { ReactNode } from "react"

/** A detail Sahil still needs to confirm, shown with a dashed underline. */
export function Tbd({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return <span className="tbd" style={style}>{children}</span>
}

export function Val({ value, placeholder }: { value: string; placeholder: string }) {
  return value ? <>{value}</> : <Tbd>{placeholder}</Tbd>
}
