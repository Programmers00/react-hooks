import { useState, useEffect } from "react";
export const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine)
  const handleChange = (property) => {
    if (typeof onChange === "function") {
      onChange(navigator)
    }
    setStatus(navigator.onLine)
  }
  useEffect(() => {
    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)
    return () => {
      window.removeEventListener("online", handleChange)
      window.removeEventListener("offline", handleChange)
    }
  }, [])
  return status
}
