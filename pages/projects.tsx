import { useState, useEffect } from 'react'

export default function Projects() {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(true)
    }, [])

    const projects = [
        'Bell-Ripper Document Automation Fullstack App',
        'Template-to-Form Builder Fullstack App',
        'Bexar-Facts Data Dashboard, visualizing polling results in Bexar county',
        'Artificial Intelligence that learned how to play super mario',
        'Programming Robots via a Raspberry pi, using driver code to translate Python into Arduino microcontroller instructions'
    ]

    return (
        <>
            <h1 className="text-6xl text-red-500 m-4">Different Projects that I have worked on</h1>
            <ul className="text-red-500 text-3xl m-4 flex flex-col justify-center place-items-center">
                { projects.map((project, index) => <li className={`${active ? 'opacity-100': 'opacity-0'} transition duration-500 delay-${index * 1000} text-center bg-slate-300 rounded p-4 my-4`} key={index}>{project}</li>)}
            </ul>
        </>
    )
}