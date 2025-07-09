import React from 'react'
import Correct_Icons from '../../components/correct_icon/Correct_Icons'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './account.css';
import { useNavigate } from 'react-router-dom'
import Success from '../../components/Toast/Success';
import Failed from '../../components/Toast/Failed';
function Otp_UI({ email, username, first_name, last_name, password, confirm_password , onCancel }) {
    const [timer, setTimer] = useState(59);
    const [sentHeading, setSendHeading] = useState('OTP Sent')
    const [resendDescription, setResendDescription] = useState('An OTP has been sent to your registered email ID.')
    const [loading, setLoading] = useState(false);  // for desable the confirm button in the OTP popup.
    // setLoading(false);
    const navigate = useNavigate();  // for navigation user

    const [formData, setFormData] = useState({
        email: email,
        otp: '',
        username: username,
        first_name: first_name,
        last_name: last_name,
        password: password,
        confirm_password: confirm_password
    });

    const [formData2, setFormData2] = useState({
        email: email,
        username: username,
        first_name: first_name,
        last_name: last_name,
        password: password,
        confirm_password: confirm_password
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    // console.log(email);
    // console.log(formData);
    // ?????????????????????????????????????????????????????????
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(interval);
                    setSendHeading('OTP Expired')
                    setResendDescription('You can request for a new OTP')
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
        // Cleanup function to clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // ????????????????????????????????????????????????????????
    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!formData.otp) {
        //     Failed('Please enter a OTP.');
        // }

        // setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/verify_otp/', formData, {
                // This sending otp to verify the user's otp
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            Success(response.data.message);  // Otp verify success messages...
            if (response.status === 200) {
                // console.log(response);
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData2, {
                        // this sending data to the database to register the user..
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    Success(response.data.message);  // custom toast or alert
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
            }
        } catch (err) {
            // 👇 Extract the custom error from backend
            const errorData = err.response?.data?.error;
            Failed(errorData);
        }
        // Perform form submission logic here
        setLoading(false);

    }


    return (
        <>
            <div className='flex justify-center items-center h-screen absolute w-full z-10 background-dark'>
                <div className='flex flex-col gap-1 p-10 w-80 bg-blue-100 rounded-xl'>
                    <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='flex justify-center items-center gap-2'>
                            <span className='text-2xl text-blue-700 font-bold'>{sentHeading}</span>
                            <Correct_Icons />
                        </div>
                        <div className='flex flex-col  rounded-md'>
                            <p className='text-sm text-center'>{resendDescription}</p>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <label className='mb-2 font-semibold ' htmlFor="otp">Enter OTP</label>
                                <label>0 : {timer}</label>
                            </div>
                            <input
                                type="number"
                                name="otp"
                                id="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                className='border border-gray-400 focus:outline-gray-500 rounded w-60 h-10 pl-3'
                            />
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <button type='submit' disabled={loading} className='border p-2 rounded hover:cursor-pointer  bg-blue-500 text-white text-sm' >
                                {loading ? 'Verfying...' : 'Confirm'}</button>
                            <button type='submit' disabled={true} className='border p-2 rounded hover:cursor-pointer  bg-blue-500 text-white text-sm' >
                                {loading ? 'Verfying...' : 'resend'}</button>

                            <button onClick={onCancel} type='button' className='border p-2 rounded hover:cursor-pointer  bg-red-500 text-white text-sm'>
                                Cancel
                            </button>
                            {/* <button type='submit' className='border p-2 hover:cursor-pointer rounded bg-amber-500 text-white text-sm'>Resend</button> */}
                            {/* <button type='submit' className='border hover:cursor-pointer  p-2 rounded  bg-red-500 text-white text-sm'>Cancel</button> */}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Otp_UI