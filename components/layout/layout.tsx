import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children} : any) {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
          <Navbar />
          <main className='flex-grow bg-slate-900 shadow-inner'>{children}</main>
          <Footer />
        </div>
      )

}