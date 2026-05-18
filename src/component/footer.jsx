import React from 'react'

function Footer() {
  return (
    <div>
    <div className='w-full h-20 bg-[#0a192f] text-center flex items-center justify-center text-[#f5f5f5]'>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer;
