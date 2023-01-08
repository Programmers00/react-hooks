import {useEffect, useRef} from 'react'

export const useHover = (onHover) => {
  const ref = useRef()
  useEffect(() => {
    const element = ref.current
    // componentDidMount, componentDidUpdate
    if (element) {
      console.log("##componentDidMount, componentDidUpdate")
      element.addEventListener("mouseenter", onHover)
    }
    // componentWillUnMount
    return () => {
      if (element) {
        console.log("##componentWillUnMount")
        element.removeEventListener("mouseenter", onHover)
      }
    }
  }, [onHover])
  return (typeof onHover === "function") ? ref : undefined
}