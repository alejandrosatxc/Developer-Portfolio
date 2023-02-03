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
        { title: "Contact", path: "/contact" },
        { title: "Projects", path: "/projects" },
        { title: "Resume", path: "/resume" }
    ]
    return (
        <header>
            <nav className="bg-black h-24 w-full">
                <div className="flex flex-row justify-between place-items-center w-full h-full px-4">
                    <h1 className="text-red-500 text-3xl">AZ</h1>
                    <ul className="hidden md:flex h-full flex-row justify-between place-items-center">
                        {
                            menuItems.map(item => {
                                return (
                                    <li key={item.title} className={`${router.pathname === item.path ? 'text-red-500 border-b-2 border-red-500 shadow-neon' : 'text-red-900' } transition hover:shadow-neon duration-300 hover:border-b-2 hover:border-red-500 hover:text-red-500 flex justify-center place-items-center text-2xl h-full mx-8`}>
                                        <Link href={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Link href="https://github.com/alejandrosatxc"><FontAwesomeIcon className="text-red-500 text-4xl" icon={faGithub} /></Link>
                    <div className="md:hidden">
                        <FontAwesomeIcon onClick={() => { setMenuToggle(!menuToggle) }} className="text-red-500 text-3xl" icon={faBars} />
                    </div>
                </div>
                <ul className={`${menuToggle ? 'animate-fade-in-down' : 'hidden'} z-50 absolute right-0 top-24 m-4 rounded-md bg-slate-500 h-auto w-64`}>
                    {
                        menuItems.map(item => {
                            return (
                                <li key={item.title} onClick={() => { setMenuToggle(!menuToggle) }} className="text-black-500 ml-4 text-2xl my-4">
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