import { useEffect, useState } from "react";

export function useStoragedState<T>(key: string, initialState?: T) {
  const [state, setState] = useState(() => {
    const storagedData = localStorage.getItem(key)

    if (storagedData) {
      return JSON.parse(storagedData) as T
    }

    return initialState
  })

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>]
}
