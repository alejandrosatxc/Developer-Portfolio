import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Contact() {
    return (
        <>
            <h1 className="text-red-500 text-6xl m-4">Contact</h1>
            <div className="bg-white rounded mx-4 mt-4">
                <div className="flex flex-row place-items-center">
                    <div className="bg-green-300 rounded-full h-24 w-24 m-4"></div>
                    <h2 className="text-5xl">Alejandro Zapien</h2>

                </div>
                <div className="flex flex-col">
                    <a className="ml-4 my-4 text-3xl" href="tel:2107230440"><FontAwesomeIcon icon={faPhone} /> 210-723-0440</a>
                    <a className="ml-4 my-4 text-3xl" href="mailto: alejandrozapien09@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> AlejandroZapien09@gmail.com</a>
                </div>
            </div>
        </>
    )
}