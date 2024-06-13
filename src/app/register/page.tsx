import React from "react"

export default function Home(){
    return(
        <>
        <div className="flex min-h-full flex-1 flex-col justify-content-center ml-36  py-12 px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        </div>
     
        
<div className="ms-96 sm:w-full sm:max-w-sm w-30 shadow-lg shadow-gray-600 p-5 rounded bg-indigo-600 col-span mx-64">
  <div className=" ">    
     </div>
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"> 
        REGISTER YOUR ACCOUNT.
      </h2>
        
            
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            First name
            </label>
            <div className="mt-2">
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Enter your first name"
          required
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
          />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Last name
            </label>
            <div className="mt-2">
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Enter your last name"
          required
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
          />
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Other name
            </label>
            <div className="mt-2">
          <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Enter your other name"
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
          />
            </div>
        </div>
        <div>
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                Enter your ID
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="text"
                  placeholder="Enter your id number"
                  required
              
                  className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
                />
              </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
            </label>
            <div className="mt-2">
          <input 
          type="email" 
          name="email" 
          id="email"
          placeholder="Enter your email"
          required 
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" 
          />
          </div>
        </div>
        <div>
          <label htmlFor="date of birth" className="block text-sm font-medium leading-6 text-gray-900">
            Date of birth
            </label>
            <div className="mt-2">
          <input 
          type="date" 
          name="date of birth" 
          id="date of birth" 
          required
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
          />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            New Password
            </label>
            <div className="mt-2">
          <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="*****" 
          minLength={5}
          required
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4"
          />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Confirm Password
            </label>
            <div className="mt-2">
          <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="*****" 
          minLength={5}
          required 
          className="block w-full rounded-md border py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" 
          />
          </div>
        </div>
        <div>
          <p className="mt-10 text-center text-sm text-gray-500">
        <a 
         className="w-full text-indigo-600 bg-white hover:bg-clyan-300 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
         href="\dashboard">
        
            Register
            </a>
            </p>
            </div>
            
         
         
        <p className="mt-10 text-sm font-light text-gray-500 dark:text-gray-900">
            Already have an account? 
            <a href="/"
            className="font-medium text-indigo-600 hover:underline dark:text-white ms-2" >
                Login
                </a>
        </p>
    </div>
  </div>
    </div>
 </>
);
}