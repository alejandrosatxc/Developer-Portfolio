import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import Link from "next/link"


export default function Navbar() {

    const [menuToggle, setMenuToggle] = useState(false)

    const menuItems = [
        { title: "Home", path: "/" },
        { title: "Contact", path: "/contact" },
        { title: "Projects", path: "/projects" },
        { title: "Resume", path: "/resume" }
    ]
    return (
        <header>
            <nav className="bg-black h-24 w-full p-4">
                <div className="flex flex-row justify-between place-items-center w-full h-full">
                    <h1 className="text-red-500 text-3xl">AZ</h1>
                    <ul className="hidden md:flex flex-row justify-between">
                        {
                            menuItems.map(item => {
                                return (
                                    <li key={item.title} className="text-red-500 mx-8">
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
                <ul className={`${menuToggle ? 'visible' : 'hidden'} absolute right-0 top-24 rounded-md bg-white h-auto w-36`}>
                    {
                        menuItems.map(item => {
                            return (
                                <li key={item.title} className="text-black-500 ml-4 text-2xl my-4">
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