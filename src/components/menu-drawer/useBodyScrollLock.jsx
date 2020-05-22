import { useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export const useBodyScrollLock = (ref) => {
    const r = useRef()
    const handleMouseOver = e => {
        // console.log('mouse over')
        disableBodyScroll(e.target, { reserveScrollBarGap: true });
        e.stopPropagation();
    };

    const handleMouseOut = e => {
        // console.log('mouse out')
        clearAllBodyScrollLocks();
        e.stopPropagation();
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("mouseenter", handleMouseOver);
            ref.current.addEventListener("mouseleave", handleMouseOut);
            r.current = ref.current
        }
        return () => {
            r.current.removeEventListener("mouseenter", handleMouseOver);
            r.current.removeEventListener("mouseleave", handleMouseOut);
        }
    },[ref])

    // const setRef = useCallback((node) => {
    //     // cleanupt
    //     if (ref.current) {
    //         ref.current.removeEventListener("mouseenter", handleMouseOver);
    //         ref.current.removeEventListener("mouseleave", handleMouseOut);
    //     }

    //     if (node !== null) {
    //         node.addEventListener("mouseenter", handleMouseOver);
    //         node.addEventListener("mouseleave", handleMouseOut);
    //     }

    //     ref.current = node
    // }, [])

    // return [setRef]
};
