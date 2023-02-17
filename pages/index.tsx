import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import OnScrollElement from '../components/OnScrollElement'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro Zapien Full Stack-Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}

const Hero = () => {
  //For setting an active variable
  const [active, setActive] = useState(false)
  //triggers active variable on component load to trigger transition property
  useEffect(() => {
    setActive(true)
  }, [])

  const items = [
    'Build Apps from the ground up',
    'Create your business or personal website',
    'Automate workflows',
    'Solve business problems',
    'Create new business logic',
    'Fix existing software',
    'Contribute to larger projects'
  ]
  const first_name = ['A', 'l', 'e', 'j', 'a', 'n', 'd', 'r', 'o']
  const last_name = ['Z', 'a', 'p', 'i', 'e', 'n']
  const delays = [
    'animation-delay-[100ms]',
    'animation-delay-[200ms]',
    'animation-delay-[300ms]',
    'animation-delay-[400ms]',
    'animation-delay-[500ms]',
    'animation-delay-[600ms]',
    'animation-delay-[700ms]',
    'animation-delay-[800ms]',
    'animation-delay-[900ms]',
    'animation-delay-[1000ms]'
  ]

  return (
    <div className="flex flex-col md:mx-12 mx-5">
      <section className="flex flex-col justify-center place-items-start md:p-12 p-1 my-6">
        <h2 className={`${active ? 'opacity-100 scale-100' : 'scale-[4] opacity-0'} mb-8 duration-1000 transition delay-2000 text-teal-300 text-4xl text-left font-mono`}>Full-Stack developer</h2>
        {/* <h1 className={`${active ? 'opacity-100 scale-100' : 'opacity-0 scale-[4]'} duration-1000 transition delay-1000 text-red-500 text-6xl my-4 text-center font-russo`}>Alejandro Zapien</h1> */}
        <div className="flex flex-row h-12 mb-4">
          {first_name.map((letter, index) => <span key={index} className={`relative text-6xl hover:text-teal-300 text-white hover:text-7xl cursor-default transition-all animate-fade-in-down ${delays[index]} opacity-0 font-russo`}>{letter}</span>)}
        </div>
        <div className="flex flex-row h-12">
          {last_name.map((letter, index) => <span key={index} className={`relative text-6xl hover:text-teal-300 text-white hover:text-7xl cursor-default transition-all animate-fade-in-down ${delays[index]} opacity-0 font-russo`}>{letter}</span>)}
        </div>
        <p className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 delay-3000 transition-all md:w-1/2 mt-10 w-auto text-slate-300 text-xl text-left font-nunito`}>I'm a <span className='text-teal-300'>software engineer</span> that specializes in building apps, websites, front-ends and back-ends. I <span className='text-teal-300'>deploy and maintain</span> them too. </p>
      </section>
      <div className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 delay-4000 transition-all animate-bounce text-white text-center w-18 h-8 bottom-4 -ml-9 left-1/2 fixed`}>
        <FontAwesomeIcon className="text-teal-400" icon={faArrowDown} size={'2x'} />
      </div>
      <section className={`${active ? 'animate-fade-up' : 'opacity-0'} transition-all delay-4000 duration-1000 h-auto my-10 md:my-4 w-full md:p-12 p-2`}>
        <h2 className="text-teal-300 text-3xl">About Me</h2>
        <p className={`md:w-1/2 w-auto text-slate-300 text-xl my-10 text-left font-nunito`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus nulla totam aspernatur alias rem ipsum harum a inventore animi? Blanditiis, aspernatur! Debitis dolores voluptatem deleniti esse at optio. Doloremque.</p>
      </section>
      <OnScrollElement animation='animate-fade-in-up' cssStyling='transition duration-1000 h-auto my-10 md:my-4 w-full md:p-12 p-2' hiddenStyling='opacity-0'>
        <h2 className="text-teal-300 text-3xl text-right">About me</h2>
        <p className={`md:w-1/2 w-auto text-slate-300 text-xl my-10 text-right float-right font-nunito`}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ipsam voluptas officia in, vitae asperiores soluta. Culpa tempore at voluptatem esse, dolorem quo adipisci quia, consequatur aut consequuntur neque ex. </p>
      </OnScrollElement>
      <OnScrollElement animation='animate-fade-in-up' cssStyling='transition duration-1000 h-auto my-10 md:my-4 w-full md:p-12 p-2' hiddenStyling='opacity-0'>
        <h2 className="text-teal-300 text-3xl text-left">About me</h2>
        <p className={`md:w-1/2 w-auto text-slate-300 text-xl my-10 text-left font-nunito`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam aperiam voluptate neque vitae autem, nam non animi rem dolorum dolor accusantium quis ut possimus, deleniti magni quas tenetur reprehenderit. </p>
      </OnScrollElement>
      <OnScrollElement animation='animate-fade-in-up' cssStyling='transition duration-1000 h-auto my-10 md:my-4 w-full md:p-12 p-2 ' hiddenStyling='opacity-0'>
        <h2 className="text-teal-300 text-3xl text-right">About me</h2>
        <p className={`md:w-1/2 w-auto text-slate-300 text-xl my-10 text-right float-right font-nunito`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci magni ipsa saepe harum, animi, velit ex officiis cupiditate aliquam temporibus eveniet impedit molestiae quidem dolorem quasi iusto provident blanditiis! </p>
      </OnScrollElement>

      {/* <div className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 transition delay-4000 flex flex-col justify-center place-items-center`}>
        <h2 className="text-4xl text-red-500 text-center mx-2">What I can do for you:</h2>
        <ul className="text-3xl flex flex-col justify-center place-items-center text-red-500 mx-2">
          {items.map((item, index) => <li key={index} className="animate-fade-in-up text-center bg-slate-300 rounded p-4 my-4">{item}</li>)}
        </ul>
      </div> */}
    </div >
  )
}