import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"



export default function Navbar() {

    const [menuToggle, setMenuToggle] = useState(false)
    const router = useRouter()

    const menuItems = [
        { title: "Home", path: "/" },
        { title: "Contact", path: "mailto:alejandrozapien09@gmail.com" },
        { title: "Projects", path: "/projects" },
        { title: "Resume", path: "/resume" }
    ]
    const delays = [
        'animation-delay-[4000ms]',
        'animation-delay-[4100ms]',
        'animation-delay-[4200ms]',
        'animation-delay-[4300ms]'
    ]
    return (
        <header>
            <nav className="bg-black h-24 fixed z-50 w-full">
                <div className="flex flex-row justify-between place-items-center w-full h-full px-6">
                    <Link href="/"><h1 className="text-red-500 text-3xl animate-fade-in-down animation-delay-[3900ms] opacity-0">AZ</h1></Link>
                    <ul className="hidden md:flex h-full flex-row justify-between place-items-center">
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <li key={item.title} className={`${router.pathname === item.path ? 'text-red-500 border-b-2 border-red-500 shadow-neon' : 'text-red-900' } animate-fade-in-down ${delays[index]} opacity-0 transition hover:shadow-neon duration-300 hover:border-b-2 hover:border-red-500 hover:text-red-500 flex justify-center place-items-center text-2xl font-nunito h-full mx-8`}>
                                        <Link className={`h-full flex place-items-center`} href={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link href="https://github.com/alejandrosatxc"><FontAwesomeIcon className="text-red-500 text-4xl animate-fade-in-down opacity-0 animation-delay-[4400ms]" icon={faGithub} /></Link>
                    <div className="md:hidden">
                        <FontAwesomeIcon onClick={() => { setMenuToggle(!menuToggle) }} className="animate-fade-in-down animation-delay-[4500ms] opacity-0 text-red-500 text-3xl" icon={faBars} />
                    </div>
                </div>
                <ul className={`${menuToggle ? 'animate-slide-in-left' : 'hidden'} z-50 fixed right-0 top-24 backdrop-blur-md bg-white/30 h-screen w-64`}>
                    {
                        menuItems.map(item => {
                            return (
                                <li key={item.title} onClick={() => { setMenuToggle(!menuToggle) }} className="text-slate-800 text-center text-4xl p-8 font-light">
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}