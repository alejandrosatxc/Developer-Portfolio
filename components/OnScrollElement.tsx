import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function slideInElement({children} : any) {
    const [isVisible, setIsVisible] = useState(false)
    const { ref, inView, entry } = useInView({
      threshold: 0,
    });

    useEffect(() => {
        if(!isVisible && inView) {
            setIsVisible(true)
        }
    }, [inView])
  
    return (
      <section ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} transition duration-1000 h-72 my-4 w-full p-12`}>
        {children}
      </section>
    )
  }
  