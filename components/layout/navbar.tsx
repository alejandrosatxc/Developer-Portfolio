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
        { title: "Resume", path: "https://drive.google.com/file/d/1dBDmSCmXUcqKFaFXZry2BN5-ktOInlrS/view?usp=sharing" },
    ]
    const delays = [
        'animation-delay-[4000ms]',
        'animation-delay-[4100ms]',
        'animation-delay-[4200ms]',
        'animation-delay-[4300ms]'
    ]
    return (
        <header>
            <nav className="bg-black md:h-24 h-[12vh] fixed z-50 w-full">
                <div className="flex flex-row justify-between place-items-center w-full h-full px-6">
                    <Link href="/"><h1 className="text-teal-300 text-3xl animate-fade-in-down animation-delay-[3900ms] opacity-0">AZ</h1></Link>
                    <ul className="hidden md:flex h-full flex-row justify-between place-items-center">
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <li key={item.title} className={`${router.pathname === item.path ? 'text-teal-300 border-b-2 border-teal-300 shadow-neon' : 'text-teal-900'} animate-fade-in-down ${delays[index]} opacity-0 transition hover:shadow-neon duration-300 hover:border-b-2 hover:border-red-500 hover:text-red-500 flex justify-center place-items-center text-2xl font-nunito h-full mx-8`}>
                                        <Link className={`h-full flex place-items-center`} href={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link href="https://github.com/alejandrosatxc"><FontAwesomeIcon className="text-teal-300 text-4xl animate-fade-in-down opacity-0 animation-delay-[4400ms]" icon={faGithub} /></Link>
                    <div className="md:hidden">
                        <FontAwesomeIcon onClick={() => { setMenuToggle(!menuToggle) }} className="animate-fade-in-down animation-delay-[4500ms] opacity-0 text-teal-300 text-3xl" icon={faBars} />
                    </div>
                </div>
                <div className={`${menuToggle ? 'animate-slide-in-left' : 'hidden'} z-50 fixed flex flex-col h-[88vh] right-0 backdrop-blur-md bg-white/30 w-64`}>
                    <ul className={`flex flex-col w-full my-auto`}>
                        {
                            menuItems.map(item => {
                                return (
                                    <li key={item.title} onClick={() => { setMenuToggle(!menuToggle) }} className="text-slate-800 text-center my-10 text-4xl font-light w-full">
                                        <Link className="w-full h-full" href={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </nav>
        </header>
    )
}