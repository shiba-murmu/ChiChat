import React from 'react'

function FormHeading() {
    return (
        <div className='flex justify-center items-center'>
            <span className='text-5xl font-extrabold '>Chi</span>
            <span className='text-5xl font-extrabold '>Chat</span>
        </div>
    )
}


function Register() {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <div>
                        <form action="" className='flex flex-col gap-3 w-[5xl] p-5 border-2 border-gray-300 rounded-lg shadow-lg'>
                            <div className='flex justify-center items-center mb-5'>
                                <span className='text-5xl font-extrabold '>Sign up</span>
                            </div>

                            {/* <div>
                                <span className='text-5xl font-extrabold '>Chi</span>
                                <span className='text-5xl font-extrabold '>Chat</span>
                            </div> */}
                            {/* <FormHeading /> */}
                            
                            <div>

                                <input type="text" className='border-2 border-gray-300 rounded p-2' placeholder='First name' />
                            </div>

                            <div>

                                <input type="text" className='border-2 border-gray-300 rounded p-2' placeholder='Last name' />
                            </div>

                            <div>

                                <input type="email" className='border-2 border-gray-300 rounded p-2' placeholder='Email' />
                            </div>

                            <div>

                                <input type="text" className='border-2 border-gray-300 rounded p-2' placeholder='Username' />
                            </div>

                            {/* <div>

                                <input type="number" placeholder='Phone' />
                            </div> */}

                            <div>

                                <input type="password" className='border-2 border-gray-300 rounded p-2' placeholder='Password'  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register