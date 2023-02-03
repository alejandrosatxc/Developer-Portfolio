import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'

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

  return (
    <>
      <div className="flex flex-col justify-center place-items-center mx-4 my-8">
        <h2 className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 transition delay-2000 text-red-500 text-4xl my-2 text-center font-mono`}>Full-Stack developer</h2>
        <h1 className={`${active ? 'opacity-100 scale-100' : 'opacity-0 scale-[4]'} duration-1000 transition delay-1000 text-red-500 text-6xl my-4 text-center`}>Alejandro Zapien</h1>
        <p className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 transition delay-3000 text-red-500 text-2xl my-2 text-center font-mono`}>Creating software solutions in every part of any tech-stack</p>
      </div>
      <div className={`${active ? 'opacity-100' : 'opacity-0'} duration-1000 transition delay-4000 flex flex-col justify-center place-items-center`}>
        <h2 className="text-4xl text-red-500 text-center mx-2">What I can do for you:</h2>
        <ul className="text-3xl flex flex-col justify-center place-items-center text-red-500 mx-2">
          {items.map((item, index) => <li key={index} className="animate-fade-in-up text-center bg-slate-300 rounded p-4 my-4">{item}</li>)}
        </ul>
      </div>
    </>
  )
}
