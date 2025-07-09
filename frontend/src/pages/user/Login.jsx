import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Success from '../../components/Toast/Success'
import { useNavigate } from 'react-router-dom'
import Failed from '../../components/Toast/Failed'
import isValidEmail from '../../components/Email_valid/EmailValid'
import userNameValid from '../../components/UserName_valid/usernameValid';
/// for development purpose ,..


function UserForm() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        text: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!formData.text || !formData.password) {
            Failed("All fields are required");
            return;
        }

        if (formData.text != Number)
        // This number value will change we want to try to login with number
        {

            if (isValidEmail(formData.text) || userNameValid(formData.text)) {
                try {
                    const response = await axios.post("http://127.0.0.1:8000/api/user/login/", formData , {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    // Success(response.data.message);
                    // console.log(response);
                    if (response.status === 200) {
                        Success("Login successful");
                        localStorage.setItem("accessToken", response.data.access);
                        localStorage.setItem("refreshToken", response.data.refresh);
                        navigate("/account");
                        return;
                    }
                    console.log(response);
                } catch (error) {
                    Failed("Login failed");
                    return;
                }
            } else {
                Failed("Invalid email or username");
                return;
            }
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div>
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" name="text" id="email" className='border border-gray-400 focus:outline-gray-500 rounded w-60 h-10 pl-3' placeholder='Email or username' onChange={handleChange} />
                </div>
                <div className='relative w-60'>
                    {/* <label htmlFor="password">Password</label> */}

                    <input type={showPassword ? "text" : "password"} name="password" id="password" className='rounded border border-gray-400 focus:outline-gray-500 h-10 w-60 pl-3' placeholder='Password' onChange={handleChange} />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 cursor-pointer text-gray-500 hover:text-gray-800"
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            // Eye on icon
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            // Eye off icon by default it shows the eye off icon
                        )}
                    </span>
                </div>
                <div>
                    {/* <Link to="/Feeds"> */}
                    {/* Here the link tag is added for just testing */}
                    <button type="submit" onClick={handleSubmit} className='border w-60 h-10 text-md font-normal place-content-center hover:bg-blue-600 hover:text-white hover:cursor-pointer rounded bg-blue-500 text-white'>Sign in</button>
                    {/* </Link> */}
                </div>

                <div>
                    <p>Don't have an account? <Link to="/register" className='text-blue-600 '>Sign up</Link></p>
                </div>


                <div className='text-center'>
                    <p><a href="" className='text-blue-600'>Forgot password?</a></p>
                </div>
            </form>
            <div className='flex flex-col gap-3 p-10 w-80'>
                <hr className='border-gray-400' />
                <p className='text-center'>Or sign in with</p>
                <div className='flex justify-center items-center gap-3'>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" className='w-10 h-10' />
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" className='w-10 h-10' />
                </div>
            </div>
        </>
    )
}


function Login() {
    /**a
     * Main function of the Login component.
     * 
     * In this code the login form is created.
     * 
     * @returns JSX
     * 
     * Ok through this function it calls another function UserForm.
     * as a components to create the login form..
     */
    return (
        <>
            {/* <Otp_UI /> */}
            <div className='flex justify-center items-center h-screen'>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <div className='mb-3 style-font'>
                        <span className='text-5xl font-extrabold '>Chi</span>
                        <span className='text-5xl font-extrabold '>Chat</span>
                    </div>
                    <UserForm />
                </div>
            </div>
        </>
    )
}

export default Login