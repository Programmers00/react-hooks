import {useEffect, useRef} from 'react'

export const useClick = (onClick) => {
  const ref = useRef()
  useEffect(() => {
    const element = ref.current
    // componentDidMount, componentDidUpdate
    if (element) {
      console.log("##componentDidMount, componentDidUpdate")
      element.addEventListener("click", onClick)
    }
    // componentWillUnMount
    return () => {
      if (element) {
        console.log("##componentWillUnMount")
        element.removeEventListener("click", onClick)
      }
    }
  }, [onClick])
  return (typeof onClick === "function") ? ref : undefined
}