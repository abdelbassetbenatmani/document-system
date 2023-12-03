import Footer from "./_componenets/Footer"
import Navbar from "./_componenets/Navbar"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full'>
        <Navbar />
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default layout