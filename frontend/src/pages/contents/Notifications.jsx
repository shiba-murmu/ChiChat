import React from 'react'
import { Link } from 'react-router-dom'
import LeftBack from '../../components/back/LeftBack'
function NotificationsHeader() {
    return(
        <>
            <div>
                <div className='flex justify-between items-center p-2 border-b border-gray-300'>
                    <div className='flex items-center gap-4 p-1'>
                        <div>
                            <div className='flex items-center cursor-pointer'>
                                <Link to={'/feeds'}>
                                    <LeftBack />
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <span className='font-semibold text-lg'>Notifications</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function Notifications() {
  return (
   <>
        <div className='min-h-screen w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <NotificationsHeader />
            <div className='flex justify-center items-center h-full'>No Notifications !!</div>
        </div>
   </>
  )
}

export default Notifications