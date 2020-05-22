import { useRef, useState, useCallback, useEffect } from 'react'
// Scroll inside the sheet

export const useScrollTracker = (ref, outRef) => {
    const [scrollData, setScrollData] = useState({})
    const r = useRef()

    const handleScroll = useCallback((e) => {
        // console.log("scrolling")
        e.preventDefault()
        e.stopPropagation()
        if (e.target.scrollTop !== 0) {
            outRef.current = true
            // setScrollData({ top: e.target.scrollTop })
        }
        // console.log(scrollable.scrollHeight)
        // console.log(scrollable.clientHeight)
    }, [setScrollData])

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("scroll", handleScroll)
            r.current = ref.current
        }
        return () => {
            r.current.removeEventListener("scroll", handleScroll)
        }
    }, [])
}

