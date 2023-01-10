/** useFadeIn  */
import {useRef, useEffect} from 'react'
export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.opacity = 1
      current.style.transition = `opacity ease-in-out ${duration}s ${delay}s`
    }
  }, [])
  return ((typeof duration === 'number') && (typeof delay === 'number')) ? { ref: element, style: {opacity: 0}} : undefined
}
