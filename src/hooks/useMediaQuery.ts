import { useEffect, useState } from 'react'

export function useMediaQuery<T>(
  query: string,
  whenTrue: T,
  whenFalse: T
): T {
  const mediaQuery = window.matchMedia(query)

  const [result, setResult] = useState(whenFalse)
  const [match, setMatch] = useState(!!mediaQuery.matches)

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches)

    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      setResult(whenFalse)
    } else {
      setResult(match ? whenTrue : whenFalse)
    }
  }, [match, whenFalse, whenTrue])

  return result
}
