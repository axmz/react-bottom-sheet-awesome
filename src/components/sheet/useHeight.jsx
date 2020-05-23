import { useState, useEffect } from 'react'

export const useHeight = (ref) => {
    const [height, setHeight] = useState(5000);
    useEffect(() => {
        if (ref.current !== null) {
            setHeight(ref.current.clientHeight);
        }
    }, [ref])
    return height;
}
