import { useEffect, useState } from 'react'

export const useWindowScrollPositions = () => {

    const [scrollPosition, setPosition] = useState({ scrollY: 0, height: 0 })

    useEffect(() => {
        function updatePosition() {
            setPosition({ scrollY: window.scrollY, height: window.innerHeight })
        }

        window.addEventListener('scroll', updatePosition)
        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}