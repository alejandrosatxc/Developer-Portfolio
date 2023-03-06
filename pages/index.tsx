import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import OnScrollElement from '../components/OnScrollElement'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
  const [currentProject, setCurrentProject] = useState("none")
  //triggers active variable on component load to trigger transition property
  useEffect(() => {
    setActive(true)
  }, [])

  const techLogos1 = [
    "html.svg",
    "css.svg",
    "javascript.svg",
  ]

  const techLogos2 = [
    "mysql.svg",
    "postgresql.svg",
    "mongodb.svg",
  ]

  const techLogos3 = [
    "react.svg",
    "python.svg",
    "next-js.svg",
  ]

  const techLogos4 = [
    "aws-2.svg",
    "heroku-4.svg",
    "google-cloud-1.svg",
  ]

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

  const handleScrollToBottom = (e: any) => {
    console.log('scroll event triggered')
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      console.log('bottom detected!')
    }
  }

  return (
    <div className="flex flex-col md:mx-12 mx-5">
      <section className="flex flex-col justify-center place-items-start md:p-12 p-1 mb-6 mt-32">
        <h2 className={`${active ? 'opacity-100 scale-100' : 'scale-[4] opacity-0'} mb-8 duration-1000 transition delay-2000 text-teal-300 text-4xl text-left font-mono`}>Full-Stack developer</h2>
        {/* <h1 className={`${active ? 'opacity-100 scale-100' : 'opacity-0 scale-[4]'} duration-1000 transition delay-1000 text-red-500 text-6xl my-4 text-center font-russo`}>Alejandro Zapien</h1> */}
        <div className="flex flex-row h-12 mb-4">
          {first_name.map((letter, index) => <span key={index} className={`relative text-6xl hover:text-teal-300 text-white hover:text-7xl cursor-default transition-all animate-fade-in-down ${delays[index]} opacity-0 font-russo`}>{letter}</span>)}
        </div>
        <div className="flex flex-row h-12">
          {last_name.map((letter, index) => <span key={index} className={`relative text-6xl hover:text-teal-300 text-white hover:text-7xl cursor-default transition-all animate-fade-in-down ${delays[index]} opacity-0 font-russo`}>{letter}</span>)}
        </div>
        <p className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 delay-3000 transition-all md:w-1/2 mt-10 w-auto text-slate-300 text-xl text-left font-nunito`}>I&apos;m a <span className='text-teal-300'>software engineer</span> that specializes in building apps, websites, front-ends and back-ends. I <span className='text-teal-300'>deploy and maintain</span> them too. </p>
      </section>
      <div className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 delay-4000 transition-all animate-bounce text-white text-center w-[20px] h-8 bottom-4 -ml-[10px] left-1/2 fixed`}>
        <FontAwesomeIcon className="text-teal-400" icon={faArrowDown} size={'2x'} />
      </div>
      <OnScrollElement animation='animate-fade-in-up' cssStyling='transition flex flex-row flex-wrap w-full h-auto my-4 md:my-4 md:p-12 p-2' hiddenStyling='opacity-0'>
        <div className=" sm:w-1/2">
          <h2 className="text-teal-300 text-center sm:text-left text-5xl sm:text-3xl my-4 font-bold">About Me</h2>
          <p className={`w-full text-slate-300 text-lg sm:text-xl text-left font-nunito`}>I live and work in San Antonio TX. Originally, I am from Irapuato, Guanajuato Mexico. I like to code and help people by creating software and apps that provide services, do something useful for others, share information, manage resources, or generate a profit</p>
        </div>
        <div className="flex flex-row place-items-center justify-center sm:w-1/2 w-full">
          <Image alt="San Antonio Texas" width={350} height={350} src="texasCool.svg" />
        </div>
      </OnScrollElement>

      <OnScrollElement animation='animate-slide-in-left' cssStyling='transition flex flex-row flex-wrap w-full h-auto my-4 md:my-4 md:p-12 p-2' hiddenStyling='opacity-0'>
        <div className="flex flex-col place-items-center justify-center sm:w-1/2 w-full">
          <div className="my-1 min-w-[320px] relative flex overflow-x-hidden">
            <ul className="animate-marquee flex whitespace-nowrap mx-1">{
              techLogos1.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
            <ul className=" absolute top-0 animate-marquee2 flex whitespace-nowrap">{
              techLogos1.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
          </div>
          <div className="my-1 min-w-[320px] relative flex overflow-x-hidden">
            <ul className="animate-marquee flex whitespace-nowrap mx-1">{
              techLogos2.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
            <ul className=" absolute top-0 animate-marquee2 flex whitespace-nowrap">{
              techLogos2.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
          </div>
          <div className="my-1 min-w-[320px] relative flex overflow-x-hidden">
            <ul className="animate-marquee flex whitespace-nowrap mx-1">{
              techLogos3.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
            <ul className=" absolute top-0 animate-marquee2 flex whitespace-nowrap">{
              techLogos3.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
          </div>
          <div className="my-1 min-w-[320px] relative flex overflow-x-hidden">
            <ul className="animate-marquee flex whitespace-nowrap mx-1">{
              techLogos4.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
            <ul className=" absolute top-0 animate-marquee2 flex whitespace-nowrap">{
              techLogos4.map((logo, index) => {
                return (
                  <li key={index} className='list-none flex-shrink-0 mx-4'>
                    <Image alt={logo} src={logo} height={80} width={80} />
                  </li>
                )
              })

            }</ul>
          </div>
        </div>
        <div className='sm:w-1/2'>
          <h2 className="text-teal-300 my-4 text-5xl sm:text-3xl text-center sm:text-right font-bold">Skills</h2>
          <p className={`w-auto text-slate-300 text-lg sm:text-xl sm:text-right float-right font-nunito`}>As a Full-stack developer, I create apps and software working with HTML, CSS, JavaScript and Linux. I have been leveraging the power of Next.js, React, and tailwind to create websites, front-ends and REST APIs. I can manage MongoDB, MySQL, and PostgresSQL Databases, and LAMP stack and Node.js deployments using Vercel, Heroku, Amazon Web Services, and Google Cloud platforms.</p>
        </div>
      </OnScrollElement>
      <OnScrollElement animation='animate-slide-in-right' cssStyling='flex flex-row flex-wrap transition w-full h-auto my-10 md:my-4 md:p-12 p-2' hiddenStyling='opacity-0'>
        <div className='flex flex-col sm:w-1/2'>
          <h2 className="text-teal-300 text-3xl text-center md:text-left font-bold">Some projects I am working on</h2>

          {
            (() => {
              switch (currentProject) {
                case "none":
                  return (
                    <p className={`w-auto text-slate-300 text-xl my-10 text-left font-nunito`}>
                      These are projects that I have created, deployed, and maintain on my own, some are still a work in progress
                    </p>
                  )
                case "1":
                  return (
                    <>
                      <h2 className="text-white text-2xl my-2">Bexar Facts Dashboard</h2>
                      <p className="text-white text-lg">An interactive dashboard that visualizes polling data in Bexar county by demographics. Build using React and Next.js. It uses a Google Sheet directly hosted on Google Drive as an impromptu database and uses Chart.js, an opensource library to render all of the charts.</p>
                      <Link href="https://bexar-dash-new.vercel.app/polls/7" className="bg-teal-400 rounded-lg flex place-items-center w-fit p-3 my-6">Check it out <FontAwesomeIcon className="ml-2 text-black" icon={faArrowRight} size={"lg"} /></Link>
                    </>

                  )
                case "2":
                  return (
                    <>
                      <h2 className="text-white text-2xl my-2">Conversation Flow Form</h2>
                      <p className="text-white text-lg">An interactive approach to a web-form that emulates a text messaging app. Each response is recorded to a backend when ever the user submits a message. The intent is to create a UI that does not feel like a user is filling out a form and instead going for the natural feel of a conversation</p>
                      <Link href="https://my-tutoring-app.vercel.app/intake" className="bg-teal-400 rounded-lg flex place-items-center w-fit p-3 my-6">Check it out <FontAwesomeIcon className="ml-2 text-black" icon={faArrowRight} size={"lg"} /></Link>
                    </>

                  )
                case "3":
                  return (
                    <>
                      <h2 className="text-white text-2xl my-2">Draftee, Template-to-Form builder</h2>
                      <p className="text-white text-lg">A Drag and Drop formbuilder that leverages the power of Google Docs! Turn an existing Google Doc template into an interactive form that can then be used to automate document creation. This one is still a work in progress, check out this early preview</p>
                      <Link href="https://draftee-git-dev-satx-consultants.vercel.app" className="bg-teal-400 rounded-lg flex place-items-center w-fit p-3 my-6">Check it out <FontAwesomeIcon className="ml-2 text-black" icon={faArrowRight} size={"lg"} /></Link>
                    </>

                  )
              }
            })()
          }
        </div>
        <div className='flex flex-col h-auto sm:w-1/2 w-full'>
          <div onClick={() => { setCurrentProject("1") }} onMouseOver={() => { setCurrentProject("1") }} className="flex place-items-center justify-center text-xl font-bold w-full h-14 my-2 bg-white rounded">Bexar Facts Data Dashboard</div>
          <div onClick={() => { setCurrentProject("2") }} onMouseOver={() => { setCurrentProject("2") }} className="flex place-items-center justify-center text-xl font-bold w-full h-14 my-2 bg-white rounded">Conversation-Flow Dynamic Forms</div>
          <div onClick={() => { setCurrentProject("3") }} onMouseOver={() => { setCurrentProject("3") }} className="flex place-items-center justify-center text-xl font-bold w-full h-14 my-2 bg-white rounded">Draftee, Template-to-Form Document Automation</div>

        </div>
      </OnScrollElement>
      <OnScrollElement animation='animate-fade-in-up' cssStyling='transition h-auto my-10 md:my-4 w-full md:p-12 p-2 ' hiddenStyling='opacity-0'>
        <h2 className="text-teal-300 text-3xl text-center md:text-left font-bold">Whats Next?</h2>
        <Link className="bg-teal-400 rounded-lg flex place-items-center w-fit p-3 my-6" href="mailto:alejandrozapien09@gmail.com">Contact me <FontAwesomeIcon className="ml-2 text-black" icon={faArrowRight} size={"lg"} /></Link>
        <Link className="bg-teal-400 rounded-lg flex place-items-center w-fit p-3 my-6" href="https://github.com/alejandrosatxc">Check out my Github <FontAwesomeIcon className="ml-2 text-black" icon={faGithub} size={"lg"} /></Link>

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