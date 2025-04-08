import { NavbarDemo } from '@/components/Navbar'
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo'
import React from 'react'

const Blog = () => {
  return (
    <>
        <NavbarDemo/>
        <div className='mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8'>
            
            {/* <div className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <ThreeDCardDemo/>
            </div> */}
            <div className="flex flex-1 flex-col gap-4">
                <div className="grid auto-rows-min gap-2 md:grid-cols-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                    <ThreeDCardDemo key={i}/>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog