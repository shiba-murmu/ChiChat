import React from 'react'



function AccountMenu() {
    /**
     * Account menu component.
     * @returns {JSX.Element} JSX element representing the account menu icon.
     */
    return (
        <>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </>
    )
}

function UserIcon() {
    /**
     * User icon component.
     * 
     * @returns {JSX.Element} JSX element representing the user icon.
     */
    return (
        <>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>

        </>
    )
}
function UserName() {
    /**
     * User name component.
     * 
     * @returns {JSX.Element} JSX element representing the user name.
     */
    return (
        <>
            <div className='flex flex-col justify-center items-start pl-2'>
                {/* User name and username */}
                <span className='font-bold text-md'>John Doe</span>
            </div>
        </>
    )
}
function Account() {
    /**
     * Main function of the Account component.
     * This function renders the user account page, displaying the user's profile information, including their profile picture, name, username, and 
     * statistics such as posts, followers, and following.
     * It also includes an account menu and user icon.
     * 
     * @returns {JSX.Element} JSX element representing the user account page.
     * * The component is structured with a main div that contains the user profile section, account menu, and user details.
     */
    return (
        <>
            <div>
                {/* Main div */}
                <div className='flex justify-between items-center p-2'>
                    <div className='flex justify-start items-center'>
                        {/* User profile icon */}
                        < UserIcon />
                        < UserName />
                    </div>
                    < AccountMenu />
                    {/* Account menu icon */}
                </div>
                <div className='flex justify-center items-center gap-5 h-auto p-3'>
                    {/* User profile section */}
                    <div className='w-[30%] flex justify-center items-center '>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt=""
                            className='rounded-full border-2 border-white shadow-lg object-cover w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56'
                            loading='lazy'
                        />
                        {/* image container may shrink in future if the user name is too long */}
                    </div>

                    <div className='w-[70%] '>
                        <div className='flex flex-col justify-center items-start mb-2'>
                            {/* User name and username */}
                            <span className='font-bold text-md'>John Doe</span>
                        </div>
                        <div className='flex  items-start gap-5'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm'>20</span>
                                <span className='text-center text-sm'>Posts</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm'>100</span>
                                <span className='text-center text-sm'>Followers</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm'>30</span>
                                <span className='text-center text-sm'>Following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5 p-4'>
                    for user details
                </div>
                <div className='bg-amber-200 p-4'>
                    for user contents
                </div>
                <div>
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                </div>
            </div>
        </>
    )
}

export default Account