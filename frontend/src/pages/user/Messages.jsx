import React from 'react'

import TripleDot from '../../components/triple/TripleDot'



function Messages() {
    // Main function for Messages page
    // This is where you can implement the logic for displaying messages, fetching data, etc.
    return (
        <>
            <div className=' w-full max-w-md mx-auto shadow-lg overflow-hidden'>
                
                <div className='flex justify-between items-center p-1  border-b border-gray-300'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center p-0.5'>
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
                                alt="profile dp"
                                className='rounded-full border-0 shadow-md object-cover w-9 h-9'
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <span className='font-semibold text-base'>Shiba Murmu</span>
                        </div>
                    </div>
                    <div className='flex items-center p-1'>
                        <TripleDot />
                    </div>
                </div>
                <div className='p-4 h-[calc(100vh-264px)] overflow-y-auto'>
                    <div className='flex flex-col gap-2'>
                        <div>
                            receiver
                        </div>
                        <div>
                            sender messages
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-2 border-t border-gray-300 bg-white'>
                    <div>
                        <input type="text" placeholder="Type a message..." className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages