import React from 'react'
import Correct_Icons from '../../components/correct_icon/Correct_Icons'
import { useState , useEffect} from 'react'
import './account.css';
function Otp_UI() {
    const [timer, setTimer] = useState(59);
    const [sentHeading, setSendHeading] = useState('OTP Sent')
    const [resendDescription , setResendDescription] = useState('An OTP has been sent to your registered email ID.')

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
    

    return (
        <>
            <div className='flex justify-center items-center h-screen absolute w-full z-10 background-dark'>
                <div className='flex flex-col gap-1 p-10 w-80 bg-blue-100 rounded-2xl'>
                    <form action="" className='flex flex-col gap-2'>
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

                            <input type="number" id="otp" className=' border border-gray-400 focus:outline-gray-500 rounded w-60 h-10 pl-3' />
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <button type='submit' className='border p-2 rounded bg-blue-500 text-white text-sm'>Confirm</button>
                            <button type='submit' className='border p-2 rounded bg-amber-500 text-white text-sm'>Resend</button>
                            <button type='submit' className='border p-2 rounded  bg-red-500 text-white text-sm'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Otp_UI