type Props = {
  caption: string
  /** `tall` for the vendor detail hero, `thumb` for list rows. */
  variant?: 'tall' | 'thumb'
}

/** Diagonal-stripe stand-in for a photograph, captioned in monospace. */
export function Placeholder({ caption, variant = 'tall' }: Props) {
  return (
    <div className={`placeholder placeholder--${variant}`} role="img" aria-label={caption}>
      <span className="placeholder__caption" aria-hidden="true">
        {caption}
      </span>
    </div>
  )
}
