import { useEffect } from 'react'

export const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      console.log('Done!')
    }, timerMs)

    return () => {
      clearTimeout(timeoutID)
    }
  }, [timerMs])
}
