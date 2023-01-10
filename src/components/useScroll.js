import {useState, useEffect} from 'react'
export const useScroll = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0
  })
  const onScroll = () => {
    console.log(window.scrollY >= 100 ? "Text color Blue" : "Text Color Red")
    setValues({x: window.scrollX, y: window.scrollY})
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })
  return {x: values.x, y: values.y}
}