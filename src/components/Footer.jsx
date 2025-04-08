import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center  sm:justify-start">
              <h3 className="text-xl font-medium subpixel-antialiased">Mirzapur <span className="text-amber-600">Developer</span></h3>
            </div>
              <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy; 2024. All rights reserved.
              </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer