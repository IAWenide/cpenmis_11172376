import React from 'react'


import Image from 'next/image';

const page = () => {
  return (
    <div>
      <section className="bg-white dark:bg-white">
      <header>
  <nav className="bg-indigo-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-indig0-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      
        
        <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          DASHBOARD
        </span>
      
      <div className="flex items-center lg:order-2">
        <a
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          href=""
        >
          Log out
        </a>
        
    
          
      
        <button
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="mobile-menu-2"
          type="button"
        >
          <span className="sr-only">
            Open main menu
          </span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fillRule="evenodd"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              aria-current="page"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="#"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="#"
            >
              Exercise
            </a>
          </li>
          <li>
            <a
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="#"
            >
              Library
            </a>
          </li>
          <li>
            <a
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="#"
            >
              Gradebook
            </a>
          </li>
          <li>
            <a
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="#"
            >Resources
              
            </a>
          </li>
          <li>
            <a
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="#"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-indigo-600">
        Welcome I. A. W.
      </h2>
      <p className="font-light text-indigo-500 lg:mb-16 sm:text-xl dark:text-indigo-500">
        DASHBOARD
      </p>
      
    </div>
    <div className="flex grid gap-8 ml-7  mb-6 lg:mb-16 md:grid-cols-2">
      <div className="items-center bg-gray-50 rounded-lg  sm:flex dark:bg-clyan-300 shadow-lg shadow-gray-600 dark:border-gray-700">
        <a href="#">
          <Image
            
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg size-36"
            src="/notebook-pen.png" alt='pen' width={490} height ={490}
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-indigo-500 dark:text-indigo-500">
            <a href="#">
              COURSES
            </a>
          </h3>
          <p className=" mt-3 mb-4 text-indigo-500 dark:text-indigo-400">
            Click here to see all your courses
          </p>
          </div>
      </div>
      <div className="items-center bg-gray-50 rounded-lg  sm:flex dark:bg-clyan-300 shadow-lg shadow-gray-600 dark:border-gray-700">
        <a href="#">
          <Image
            
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg size-36"
            src="/book-open.png" alt="book" width={490} height={490}
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight tex-indigo-500 dark:text-indigo-500">
            <a href="#">
              EXERCISE
            </a>
          </h3>
          
          <p className="mt-3 mb-4 text-indigo-500 dark:text-indigo-400">
            Click here to view all exercises
          </p>
         
        </div>
      </div>
      <div className="items-center bg-gray-50 rounded-lg  sm:flex dark:bg-clyan-300 shadow-lg shadow-gray-600 dark:border-gray-700">
        <a href="#">
          <Image
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg size-36"
            src="/notebook-text.png" alt="text" width={490} height={490}
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight tex-indigo-500 dark:text-indigo-500">
            <a href="#">
              LIBRARY
            </a>
          </h3>
          <p className="mt-3 mb-4 text-indigo-500 dark:text-indigo-400">
            Click here for all research purposes.
          </p>
         
        </div>
      </div>
      <div className="items-center bg-gray-50 rounded-lg  sm:flex dark:bg-clyan-300 shadow-lg shadow-gray-600 hover-gray 200 dark:border-gray-700">
        <a href="#">
          <Image
            
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg size-36"
            src="/swatch-book.png" alt="book" width={490} height={490}
          />
        </a>
        <div className="p-5">
          <h3 className="text-xl font-bold tracking-tight tex-indigo-500 dark:text-indigo-500">
            <a href="#">
              GRADEBOOK
            </a>
          </h3>
          <p className=" mt-3 mb-4 text-indigo-500 dark:text-indigo-400">
            Click here to view your grades.
          </p>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </div>
  );
}

export default page
