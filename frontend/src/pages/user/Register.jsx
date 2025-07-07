import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Failed from '../../components/Toast/Failed';
import Success from '../../components/Toast/Success';
import isValidEmail from '../../components/Email_valid/EmailValid';
import userNameValid from '../../components/UserName_valid/usernameValid';

function Register() {
    const navigate = useNavigate();
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

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // ****** For all validations **************************************
        if (!formData.first_name || !formData.last_name || !formData.username || !formData.email || !formData.password || !formData.confirm_password) {
            Failed('All fields are required');
            return;
        }
        // *****************************************************************
        // ********** UserName Validations *********************************
        if (formData.username.length < 3) {
            Failed('Username must be at least 3 characters long');
            return;
        }

        if (formData.username.includes(' ')) {
            Failed('Username cannot contain spaces');
            return;
        }

        if (!userNameValid(formData.username)) {
            Failed('Invalid username');
            return;
        }
        // *****************************************************************
        // *********** Password Validations ********************************
        if (formData.password.length < 8) {
            Failed('Password must be at least 8 characters long');
            return;
        }

        if (formData.password !== formData.confirm_password) {
            Failed('Passwords do not match');
            return;
        }
        // *****************************************************************
        // *********** Email Validations ***********************************
        if (!formData.email.trim()) {
            Failed('Email is required');
            return;
        }

        if (formData.email.includes(' ')) {
            Failed('Email cannot contain spaces');
            return;
        }

        if (!isValidEmail(formData.email)) {
            Failed('Invalid email address');
            return;
        }
        // *****************************************************************

        console.log(formData);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('✅ Hello world');
            Success(response.data.message);  // custom toast or alert
            // Success('Username : ' + response.data.username)
            // Success('Email : ' + response.data.email)
            if (response.status === 201) {
                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);
                navigate('/feeds');
            }
        } catch (err) {
            // 👇 Extract the custom error from backend
            const errorData = err.response?.data?.error;

            // 👇 Loop through all error fields and show them
            if (errorData && typeof errorData === 'object') {
                for (let field in errorData) {
                    const messages = errorData[field];
                    if (Array.isArray(messages)) {
                        messages.forEach(msg => {
                            Failed(`${field}: ${msg}`);  // You can use toast here instead of alert
                        });
                    }
                }
            } else {
                alert("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <>
            {/* User registration form to create the account of the user. */}
            <div className='flex justify-center flex-col items-center h-[auto]  w-full'>
                <div className='flex justify-center items-center '>
                    <img src="https://img.icons8.com/color/48/000000/chat.png" alt="chat-icon" className='w-20 m-0 h-20' />
                </div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex justify-center flex-col items-center'>
                        <p>Sign up to your <span className='font-bold'>ChiChat</span> <span className='font-bold text-blue-500'>account</span> </p>
                        <p>to chat with your friends</p>
                    </div>
                    <div>
                        <input type="text" name="first_name" onChange={handleChange} id="firstName" className='rounded border pl-3 border-gray-400 focus:outline-gray-500 h-10 w-60' placeholder='First name' />
                    </div>
                    <div>
                        <input type="text" name="last_name" onChange={handleChange} id="lastName" className='rounded border  border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Last name' />
                    </div>
                    <div className='flex flex-col'>
                        <input type="text" name="username" onChange={handleChange} id="username" className='rounded border  border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Username' />
                    </div>
                    <div>
                        <input type="email" name="email" onChange={handleChange} id="email" className='border  border-gray-400 focus:outline-gray-500 rounded w-60 h-10 pl-3' placeholder='Email address' />
                    </div>
                    {/* Here code used for showing and hiding the password. In the main-container 
                        div the relative class is added first to show the eye icon inside the input field. Also the onClick function is used to show and hide the password. Added hooks are used to show and hide the password.*/}
                    <div className='relative w-60'>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="password"
                            onChange={handleChange}
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                // eye-off icon by default it shows the eye off icon
                            )}
                        </span>
                    </div>
                    <div className='relative w-60'>
                        <input type={showPassword ? "text" : "password"} name="confirm_password" onChange={handleChange} id="confirmPassword" className='rounded border  border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Confirm Password' />
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
                        <button type="submit" className='bg-blue-500 text-white rounded h-10 w-60 hover:bg-blue-600'>Sign up</button>
                    </div>
                    <div>
                        <p className='text-center'>Already have an account? <Link to="/" className='text-blue-500 font-extrabold'>Login</Link></p>
                    </div>
                </form>

                <div className='md:relative flex flex-col p-10 gap-3'>
                    <hr className='border-gray-400' />
                    <p className='text-center'>Or sign up with</p>
                    <div className='flex justify-center items-center gap-3'>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" className='w-10 h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:coursor-pointer' />
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" className='w-10 h-10 hover:scale-110 hover: transition ease-in-out delay-150 hover:-translate-y-1  duration-300 hover:coursor-pointer' />
                    </div>
                    <p className='text-center'>By signing up, you agree to our <Link to="/terms" className='text-blue-500 font-extrabold'>Terms of Service</Link> and <Link to="/privacy" className='text-blue-500 font-extrabold'>Privacy Policy</Link>.</p>
                </div>
            </div>
        </>
    )
}

export default Register