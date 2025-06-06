import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
    <header className=' shadow-md  '>
        <div className='flex  justify-between max-w-7xl  mx-auto px-4 sm:px-8 py-4 '>
            <Link to='/' className='flex items-center sm:max-w-12 '>
                <img className='h-14  ' src='./assets/azulDestino.png' alt="" />
                <h1 className='text-lg text-sky-600 font-bold lg:text-2xl'>AzulDestino</h1>
            </Link>
            <div className=' hidden lg:flex items-center border border-sky-600 rounded-3xl shadow-md shadow-sky-200 px-4 py-1'>
                <p className='pr-6  border-r-2 border-sky-600'>Qualquer lugar</p>
                <p className='pr-8 m-2 border-r-2 border-sky-600'>Qualquer semana</p>
                <p className='pr-2 m-2'>Hospedes?</p>
                <div className='bg-sky-600 rounded-full p-2 text-white pointer'>
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
            </div>
            <div className='flex items-center border border-sky-600 rounded-3xl shadow-md shadow-sky-200 px-4 py-1 gap-2'>
                <div className='text-sky-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>

                </div>
                <div className='bg-sky-600 rounded-full p-2 text-white pointer sm:max-w-8'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"        className="size-4">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                  </svg>
                </div>
                <p className='sm:max-w-32 max-w-20 truncate font-semibold'>lucas oliveira</p>

            </div>
        </div>
    </header>
    </>
  )
}

export default Header