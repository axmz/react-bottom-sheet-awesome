import { useEffect } from 'react'

export const useOutsideEvent = (ref, callback) => {

    useEffect(() => {
        const handleOutsideEvent = e => {
            console.log('outside event')
            if (ref.current && !ref.current.contains(e.target)) {
                callback();
            }
            //     if (menuRef.current && !menuRef.current.contains(e.target)) {
            //       clearAllBodyScrollLocks(); // repeated in close()
            //       close();
            //     } else {
            //       disableBodyScroll(menuRef.current, { reserveScrollBarGap: true });
            //     }
        };
        document.addEventListener("touchstart", handleOutsideEvent);
        document.addEventListener("mousedown", handleOutsideEvent);
        document.addEventListener("scroll", handleOutsideEvent);
        return () => {
            document.removeEventListener("touchstart", handleOutsideEvent);
            document.removeEventListener("mousedown", handleOutsideEvent);
            document.removeEventListener("scroll", handleOutsideEvent);
        };
    }, [callback, ref]);
};
