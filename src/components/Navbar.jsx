import React, { useState } from 'react'
import logo from '../assets/Vector.png'
import menu from '../assets/mobile-menu-icon-png-18.jpg'


function Navbar() {
  const [open,setOpen] = useState()

  const Links = [
    {title : "الرئيسية",url : "/"},
    {title : "التسيير",url : "/"},
    {title : "من نحن",url : "/"},
    {title : "اتصل بنا",url : "/"},
  ]
  return (
    <>
      <div className="relative md:w-[100%] lg:w-[80%] mx-auto md:px-4 md:py-7 py-4 z-10 flex md:justify-between items-center bg-white">
        <section className='flex items-center px-4 md:px-0'>
        <img src={logo} className='pl-2 mt-2' alt="logo" />
        <h1 className='text-3xl font-bold'>نوفيــــلانــد</h1>
        </section>


        <ul className={`z-[1] absolute md:static md:w-fit w-full text-center flex flex-col md:flex-row transition-all ease-in duration-500 md:opacity-100 bg-white ${open? "top-16 opacity-100" : "top-[-360px] opacity-0 z-[-1]"} `}>
          {
            Links.map((link , id)=>{
              return (
                <li key={id} className='text-md md:mx-5 py-4 md:py-0 focus:font-semibold active:font-semibold cursor-pointer text-black font-semibold md:bg-none '><a href={link.url}>{link.title}</a></li>
                )
              })
            }
        </ul>

            <span className='md:hidden absolute left-6 mt-3'>
              <button onClick={()=>setOpen(!open)} className=' cursor-pointer'><img className='w-8' src={menu} alt="" /></button>
            </span>
        <section className='hidden md:flex flex-row'>
          <button className='px-5 py-3 md:w-36  bg-black duration-200 text-white text-md rounded-3xl focus:ring '>احجز الآن</button>
        </section>
        </div>
    </>
  )
}

export default Navbar