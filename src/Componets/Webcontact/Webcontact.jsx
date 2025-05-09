import React from 'react'
import { Link } from 'react-router-dom'

function Webcontact() {
  return (
    <div className='py-12 bg-white '>
      <div className='max-w-6xl bg-black mx-auto border rounded-2xl h-[450px] md:h-[300px]'>
      <div>
      
      <div className='text-center text-white py-8'>
          <h1 className='text-5xl font-bold'> Need  Help With Your Website? </h1>
          <p className='py-5 text-xl font-medium'>Speak to our website specialist today .</p>
          <div className='py-12'>
        <Link
            to="/contact"
            className="hover:decoration-orange-600 border bg-amber-600 px-8 py-2 transition-all duration-300 text-white border-none rounded-[8px] "
          >
            Contact
          </Link>
        </div>
       </div>
      </div>
        

      </div>
    </div>
  )
}

export default Webcontact
