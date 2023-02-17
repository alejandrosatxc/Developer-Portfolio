import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface OnScrollElementProps {
    children: any
    animation: string,
    cssStyling: string,
    hiddenStyling: string
}

export default function OnScrollElement({ children, animation, cssStyling, hiddenStyling }: OnScrollElementProps) {
    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView, entry } = useInView({
        threshold: 0.50,
    });

    useEffect(() => {
        if (!isVisible && inView) {
            setIsVisible(true)
        }
    }, [inView])

    return (
        <div ref={ref} className={`${isVisible ? animation : hiddenStyling} ${cssStyling}`}>
            {children}
        </div>
    )
}
