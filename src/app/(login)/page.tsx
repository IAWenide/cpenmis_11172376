
export default function Example() {
  return (
    <>
  
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
        
        </div>
<div className="grid grid-cols-3 gap-4">
  
        <div className="ms-36 sm:w-full sm:max-w-sm shadow-lg shadow-gray-600 p-5 rounded ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
            LOGIN
          </h2>
          
            <div>
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
              Your ID
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="text"
                  autoComplete="on"
                  placeholder="Enter your id number"
                  required
              
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password" 
                  required
                  minLength={5}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-sm">
                <input type="checkbox"/>
                <label> Remember Me. </label>
                  <a href="#" className="font-semibold text-indigo-600 hover:underline ms-20">
                    Forgot password?
                  </a>
                
              </div>
                </div>

            <div>
              <p className="mt-10 text-center text-sm text-gray-500">
            <a 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               href="./dashboard"
               >
                Sign in
                 </a>
                 </p>
            </div>
          

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="\register" 
            className="font-semibold leading-6 text-indigo-600 hover:underline">
              Register here!
            </a>
          </p>
        </div>
        <div className="bg-indigo-600 mx-16 col-span-2 shadow-lg shadow-gray-600 p-5 rounded-lg ">
        <div className="bg-white mx-16 col-span-2 shadow-lg shadow-gray-600 p-5 rounded-lg self-center mt-32">
            <div className="mt-30 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600 "  > 
           COMPUTER ENGINEERING
          MANAGEMENT INFORMATION SYSTEM.
           </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

