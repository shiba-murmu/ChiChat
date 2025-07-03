import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Taskbar from '../../components/taskbar/Taskbar'

function FeedsCard() {
    return (
        <>

            {/* Main container for feeds that is used to scroll the page. */}
            <div>
                <div className='flex justify-start gap-2 items-center p-2'>
                    <div className='flex items-center'>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000" alt="profile dp" className='rounded-full border-2 shadow-lg object-cover w-10 h-10' loading='lazy' />
                    </div>
                    <div className='flex flex-col'>
                        {/* User name and username */}
                        <span className='font-bold text-sm'>Shiba Murmu</span>
                        <span className='text-xs'>@shibamurmu</span>
                    </div>
                </div>
                <div>
                    {/* Placeholder for post images */}
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000" alt="post" className='w-full h-auto rounded-0 shadow-md' loading='lazy' />
                    <div className='mt-2'>
                        <span className='text-sm'>This is a caption for the post.</span>
                    </div>
                    <div className='mt-2'>
                        <span className='text-xs text-gray-500'>Posted on: {new Date().toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
function Feeds() {
    return (
        <>  
            {/* Navbar for the Feeds page */}
            <Navbar />
            <div className='p-2'>
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                <FeedsCard />
                {/* Add a button to load more feeds */}
            </div>
        </>
    )
}

export default Feeds