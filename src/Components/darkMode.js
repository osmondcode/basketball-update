import React from 'react'
import { FaSun } from 'react-icons/fa'

const darkMode = ({DarkModeToggle}) => {
  return (
    <div className='fixed right-0 top-[30vh] bg-red-600 text-white flex items-center justify-center w-[40px] rounded-tl-md rounded-bl-md h-[40px]' onClick={DarkModeToggle}>
        <button className='w-full h-full text-[20px] flex items-center justify-center'>
            <FaSun/>
        </button>
    </div>
  )
}

export default darkMode