import React from 'react'

function UserForm() {
    return (
        <>
            <form action="" className='flex flex-col gap-6'>
                <div>
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="email" id="email" className='border rounded w-60 h-10 pl-3' placeholder='Email, phone or username' />
                </div>
                <div>
                    {/* <label htmlFor="password">Password</label> */}
                    <input type="password" name="password" id="password" className='rounded border h-10 w-60 pl-3' placeholder='Password'/>
                </div>
                <div>
                    <button type="submit" className='border w-60 h-10 text-xl font-semibold place-content-center hover:bg-blue-600 hover:text-white hover:cursor-pointer rounded bg-blue-400 text-white'>Login</button>
                </div>

                <div>
                    <p>Don't have an account?<a href="" className='text-blue-600'>Sign up</a></p>
                </div>


            </form>
        </>
    )
}


function Login() {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <div className='mb-5'>
                        <span className='text-5xl font-extrabold'>ChiChat</span>
                    </div>
                    <UserForm />
                </div>
            </div>
        </>
    )
}

export default Login