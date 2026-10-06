import { useEffect, useState } from 'react'

type Base64ImageProps = {
  parts: string[]
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
}

export function Base64Image({
  parts,
  alt,
  className,
  loading = 'eager',
}: Base64ImageProps) {
  const [src, setSrc] = useState<string>()

  useEffect(() => {
    let active = true

    Promise.all(
      parts.map(async (path) => {
        const response = await fetch(path)
        if (!response.ok) {
          throw new Error(`Falha ao carregar imagem: ${path}`)
        }
        return response.text()
      }),
    )
      .then((chunks) => {
        if (active) {
          const base64 = chunks.join('').replace(/\s/g, '')
          setSrc(`data:image/webp;base64,${base64}`)
        }
      })
      .catch(() => {
        if (active) setSrc(undefined)
      })

    return () => {
      active = false
    }
  }, [parts.join('|')])

  if (!src) {
    return <span className={`image-loading ${className ?? ''}`.trim()} aria-hidden="true" />
  }

  return <img src={src} alt={alt} className={className} loading={loading} />
}
