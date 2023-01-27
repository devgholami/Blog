import { useEffect, useRef, useState } from "react";

export default function useHeadsObserver(loaded) {
  const observer = useRef();
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleObsever = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }
  
    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "0% 0% -50% 0px"}
    )
  
    const elements = document.querySelectorAll("h1,h2,h3,h4,h5,h6")
    elements.forEach((elem) => observer.current.observe(elem))
    return () => observer.current?.disconnect()
  }, [loaded])

  return {activeId}
}