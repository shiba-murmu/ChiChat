import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Register() {
    // Hooks are used to show and hide the password and confirm password.
    // The useState hook is used to manage the state of the showPassword and showConfirmPassword variables.
    // The showPassword variable is used to show and hide the password input field.
    /**
     * 
     * This function is the main function of the Register component.
     * It renders a user registration form where users can create an account by providing their first name, last name, username, email, 
     * password, and confirm password.
     * It also includes functionality to show and hide the password and confirm password fields using hooks.
     */
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <>
            {/* User registration form to create the account of the user. */}
            <div className='flex justify-center flex-col items-center h-[auto] bg-gray-100 w-full'>
                <div className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/color/48/000000/chat.png" alt="chat-icon" className='w-20 m-0 h-20' />
                </div>
                <form action="" className='flex flex-col gap-5'>
                    <div className='flex justify-center flex-col items-center'>
                        <p>Sign up to your ChiChat <span className='font-bold text-blue-500'>account</span> </p>
                        <p>to chat with your friends</p>
                    </div>
                    <div>
                        <input type="text" name="firstName" id="firstName" className='rounded border pl-3 border-gray-400 focus:outline-gray-500 h-10 w-60' placeholder='First name' />
                    </div>
                    <div>
                        <input type="text" name="lastName" id="lastName" className='rounded border  border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Last name' />
                    </div>
                    <div>
                        <input type="text" name="username" id="username" className='rounded border  border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Username' />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" className='border  border-gray-400 focus:outline-gray-500 rounded w-60 h-10 pl-3' placeholder='Email address' />
                    </div>
                    {/* Here code used for showing and hiding the password. In the main-container 
                        div the relative class is added first to show the eye icon inside the input field. Also the onClick function is used to show and hide the password. Added hooks are used to show and hide the password.*/}
                    <div className='relative w-60'>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="rounded border border-gray-400 focus:outline-gray-500 h-10 w-full pl-3 pr-10"
                            placeholder="Password"
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-gray-800"
                        >
                            {showConfirmPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                // eye icon 
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                // eye-off icon by default it shows the eye off icon
                            )}
                        </span>
                    </div>
                    <div className='relative w-60'>
                        <input type={showPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" className='rounded border  border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Confirm Password' />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-gray-800"
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                // Eye-on icon
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                // Eye off icon by default it shows the eye off icon
                            )}
                        </span>
                    </div>
                    <div>
                        <button type="submit" className='bg-blue-500 text-white rounded h-10 w-60'>Sign up</button>
                    </div>
                    <div>
                        <p className='text-center'>Already have an account? <Link to="/" className='text-blue-500 font-extrabold'>Login</Link></p>
                    </div>
                </form>

                <div className='flex flex-col gap-3 p-10 w-80'>
                    <hr className='border-gray-400' />
                    <p className='text-center'>Or sign up with</p>
                    <div className='flex justify-center items-center gap-3'>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" className='w-10 h-10' />
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" className='w-10 h-10' />
                    </div>
                    <p className='text-center'>By signing up, you agree to our <Link to="/terms" className='text-blue-500 font-extrabold'>Terms of Service</Link> and <Link to="/privacy" className='text-blue-500 font-extrabold'>Privacy Policy</Link>.</p>
                </div>
            </div>
        </>
    )
}

export default Register