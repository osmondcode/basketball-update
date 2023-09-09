import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const DesignedBy = ({darkMode}) => {
  return (
    <div className={darkMode ? 'w-full min-h-[10vh] flex items-center justify-between lg:px-[7%] px-[4%] bg-gray-300 flex-wrap gap-[10px] py-3 mt-2' : 'w-full min-h-[10vh] flex items-center justify-between lg:px-[7%] px-[4%] bg-[#111] flex-wrap gap-[10px] py-3 mt-2'}>
        <p>Copyright &copy; 2023 <span className='satisfy'>Basketball</span></p>

        <span className='flex items-center justify-center gap-3'>
            <h2 className='uppercase font-bold text-[16px]'>follow us:</h2>
            <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#e9e8e8] bg-red-600 hover:border-[1px] hover:border-red-500 hover:bg-transparent hover:text-red-600 duration-500 border-[1px] border-red-600'><FaFacebookF/></button>
            <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#e9e8e8] bg-red-600 hover:border-[1px] hover:border-red-500 hover:bg-transparent hover:text-red-600 duration-500 border-[1px] border-red-600'><FaInstagram/></button>
            <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#e9e8e8] bg-red-600 hover:border-[1px] hover:border-red-500 hover:bg-transparent hover:text-red-600 duration-500 border-[1px] border-red-600'><FaLinkedinIn/></button>
            <button className='w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#e9e8e8] bg-red-600 hover:border-[1px] hover:border-red-500 hover:bg-transparent hover:text-red-600 duration-500 border-[1px] border-red-600'><FaTwitter/></button>
        </span>

        <p>Designed by <span className='satisfy'>Osmond-Code</span></p>
    </div>
  )
}

export default DesignedBy