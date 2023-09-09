import React from 'react'
import { FaCaretDown, FaFacebookF, FaInstagram, FaLinkedinIn, FaShoppingCart, FaTwitter } from 'react-icons/fa'

const UpperHeader = ({darkMode}) => {
  return (
    <div className={darkMode ? 'w-full h-[5vh] flex items-center justify-between bg-dark text-light lg:px-[7%] px-[5%]' : 'w-full h-[5vh] flex items-center justify-between bg-light text-dark lg:px-[7%] px-[5%]'}>


        <span className='flex items-center justify-center gap-5'>
            <h3 className='uppercase text-[14px] font-semibold mr-3'>breaking <span className='text-[16px] font-bold text-red-600'>news</span></h3>
            <p className='sm:flex hidden text-[14px] font-extralight'>Three Question NBA Finals Preview</p>
        </span>


        <span className='flex items-center justify-center gap-7'>


            <div className='md:flex hidden items-center justify-center gap-3 text-[13px]'>
                <FaFacebookF/>
                <FaInstagram/>
                <FaLinkedinIn/>
                <FaTwitter/>
            </div>


            <div className='sm:flex hidden cursor-pointer items-center justify-center gap-2'>
                <p className='text-[14px]'>ENG</p>
                <FaCaretDown/>
            </div>


            <div className='flex cursor-pointer items-center justify-center gap-2'>
                <FaShoppingCart/>
                <p className='text-[14px]'>Cart</p>
                <p className='w-[20px] h-[20px] bg-red-600 flex items-center justify-center rounded-full text-light'>0</p>
            </div>
        </span>
    </div>
  )
}

export default UpperHeader