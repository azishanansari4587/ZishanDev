import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 justify-center  sm:justify-start">
              <Image src="/favicon.ico" alt="Mirzapur Developer" width={35} height={35}/>
              <h3 className="text-xl font-medium subpixel-antialiased">Zishan <span className="text-amber-600">Dev</span></h3>
            </div>
              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2025. All rights reserved.
              </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer