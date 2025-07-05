import React, { useState } from 'react';

function MessageHeader() {
    return (
        <div className="flex sticky top-0 z-10 bg-gray-200 items-center gap-2 p-2 border-b border-gray-300">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
                    alt="Profile"
                    className="rounded-full shadow-lg object-cover w-10 h-10"
                />
            </div>
            <div className="flex flex-col text-sm">
                <div className="font-bold">Shiba Murmu</div>
                <div className="text-gray-500 text-xs">@shibamurmu</div>
            </div>
        </div>
    );
}

function Messages() {
    const [isInput, setIsInput] = useState(false);

    const trigger = () => {
        setIsInput(!isInput);
    };

    return (
        <div className="flex flex-col">
            {/* Header */}
            <MessageHeader />

            {/* Message area */}
            <div className="flex-1  overflow-y-scroll px-2 py-2 space-y-2 bg-gray-100">
                {/* Dummy message bubbles */}
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">Hello</div>
                <div className="bg-blue-100 p-2 rounded-lg shadow w-fit self-end">Hi there!</div>
                <div className="bg-white p-2 rounded-lg shadow w-fit">How are you?</div>
                {/* Add more messages or map from state */}
            </div>

            {/* Input box */}
            <div className="sticky bottom-0 bg-white border-t border-gray-300 p-2 flex gap-2">
                <input
                    type="text"
                    placeholder={isInput ? "Type a message..." : "Type a message or..."}
                    onFocus={trigger}
                    className="border border-gray-300 rounded-full px-4 py-2 text-sm outline-none flex-1"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Send</button>
            </div>
        </div>
    );
}

export default Messages;













// // This below code is little fixed version

// import React, { useState, useRef, useEffect } from 'react';
// // import ReactDOM from 'react';

// function Messages() {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const inputRef = useRef(null);
//     const messagesEndRef = useRef(null);

//     // Handle sending a message
//     const handleSend = () => {
//         if (input.trim() === '') return;

//         setMessages(prev => [...prev, { id: Date.now(), text: input }]);
//         setInput('');
//     };

//     // Auto-focus input after message is sent
//     useEffect(() => {
//         inputRef.current?.focus();
//     }, [messages]);

//     // Auto-scroll to bottom on new message
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     return (
//         <>
//             <div className="sticky top-0 z-100 w-full bg-white border-b p-2">
//                 <h2 className="text-lg font-semibold">Chat with Shiva</h2>
//             </div>
//             <div className=" inset-0 flex overflow-scroll flex-col bg-white max-w-md mx-auto">
//                 {/* Header */}

//                 {/* Messages list */}
//                 <div className="flex-1 overflow-y-auto p-3">
//                     {messages.map(msg => (
//                         <div key={msg.id} className="mb-2 text-left">
//                             <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm max-w-[80%]">
//                                 {msg.text}
//                             </div>
//                         </div>
//                     ))}
//                     <div ref={messagesEndRef} />
//                 </div>

//                 {/* Input box */}
//                 <div className="sticky bottom-0 z-10 bg-white border-t p-2 flex gap-2">
//                     <input
//                         ref={inputRef}
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//                         className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
//                         placeholder="Type a message..."
//                     />
//                     <button
//                         onClick={handleSend}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
//                     >
//                         Send
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Messages;











// import React, { useState, useRef, useEffect } from 'react';

// function Messages() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const inputRef = useRef(null);
//   const messagesEndRef = useRef(null);

//   const handleSend = () => {
//     if (input.trim() !== '') {
//       setMessages(prev => [...prev, { id: Date.now(), text: input }]);
//       setInput('');

//       // Re-focus input after sending
//       setTimeout(() => {
//         inputRef.current?.focus();
//       }, 100); // Delay ensures layout is updated before focusing
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-screen max-w-md mx-auto">
//       <div className="sticky top-0 z-10 bg-white border-b p-2">
//         <h2 className="text-lg font-semibold">Chat</h2>
//       </div>

//       <div className="flex-1 overflow-y-auto p-2">
//         {messages.map(msg => (
//           <div key={msg.id} className="my-2 text-left">
//             <div className="inline-block bg-gray-200 px-3 py-2 rounded-lg text-sm">
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="sticky bottom-0 z-10 bg-white border-t p-2 flex gap-2">
//         <input
//           ref={inputRef}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           className="flex-1 border rounded-full px-3 py-2 text-sm"
//           placeholder="Type a message"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-500 text-white rounded-full px-4 text-sm"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Messages;








// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import TripleDot from '../../components/triple/TripleDot';
// import LeftBack from '../../components/back/LeftBack';

// function MessagesHeader() {
//     return (
//         <div className='flex justify-between items-center border-b border-gray-300 px-2 py-1 bg-white sticky top-0 z-10'>
//             <div>
//                 <Link to='/chat'>
//                     <div className='flex items-center p-1 cursor-pointer'>
//                         <LeftBack />
//                     </div>
//                 </Link>
//             </div>
//             <div className='flex items-center gap-4'>
//                 <img
//                     src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
//                     alt="profile dp"
//                     className='rounded-full border shadow-md object-cover w-9 h-9'
//                     loading='lazy'
//                 />
//                 <div>
//                     <span className='font-normal text-base'>Shiba Murmu</span>
//                     <p className='text-gray-500 text-xs w-48 truncate'>@shibamurmu</p>
//                 </div>
//             </div>
//             <div className='ml-auto'>
//                 <button className='text-gray-500 p-1 hover:text-gray-800'>
//                     <TripleDot />
//                 </button>
//             </div>
//         </div>
//     );
// }

// function Messages() {
//     const [messages, setMessages] = useState([
//         { id: 1, text: "Hey, how are you?" },
//         { id: 2, text: "I'm fine, you?" },
//         { id: 3, text: "Doing great!" },
//         { id: 4, text: "Let's meet soon!" },
//         { id: 5, text: "Sure!" },
//     ]);
//     const [input, setInput] = useState('');
//     const messagesEndRef = useRef(null);

//     const handleSend = () => {
//         if (input.trim() !== '') {
//             setMessages(prev => [...prev, { id: Date.now(), text: input }]);
//             setInput('');
//         }
//     };

//     // Scroll to bottom when message updates
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     return (
//         <div className='flex flex-col h-screen max-w-md mx-auto bg-gray-50'>
//             {/* Header */}
//             <MessagesHeader />

//             {/* Message area */}
//             <div className='flex-1 overflow-y-auto px-3 py-2'>
//                 {messages.map(msg => (
//                     <div key={msg.id} className='my-2 flex justify-start'>
//                         <div className='bg-white px-4 py-2 rounded-lg shadow text-sm'>{msg.text}</div>
//                     </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className='bg-white px-2 py-2 border-t sticky bottom-0 flex gap-2'>
//                 <input
//                     type="text"
//                     className='flex-1 border p-2 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
//                     placeholder='Type a message'
//                     value={input}
//                     onChange={e => setInput(e.target.value)}
//                     onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//                 />
//                 <button
//                     onClick={handleSend}
//                     className='bg-blue-500 text-white px-4 rounded-full text-sm hover:bg-blue-600'
//                 >
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Messages;














// import React from 'react'
// import { Link } from 'react-router-dom'
// import TripleDot from '../../components/triple/TripleDot'

// import LeftBack from '../../components/back/LeftBack'


// function MessagesHeader() {
//     return (
//         <>
//             <div className='flex justify-between sticky top-0 items-center border-b gap-3 border-gray-300 px-2 py-1'>
//                 <div>
//                     <Link to={'/chat'}>
//                         <div className='flex items-center p-1 cursor-pointer'>
//                             <LeftBack />
//                         </div>
//                     </Link>
//                 </div>

//                 <div className='flex items-center'>
//                     <Link to='/messages' className='flex items-center gap-4 w-full'>
//                         <div>
//                             <img
//                                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
//                                 alt="profile dp"
//                                 className='rounded-full border-1 shadow-md object-cover w-9 h-9'
//                                 loading='lazy'
//                             />
//                         </div>
//                         <div>
//                             <span className='font-normal text-base'>Shiba Murmu</span>
//                             <p className='text-gray-500 text-xs w-48 truncate'>
//                                 @shibamurmu
//                             </p>
//                         </div>
//                     </Link>
//                 </div>

//                 <div className='ml-auto flex items-center gap-2'>
//                     <button className='text-gray-500 p-1 hover:text-gray-800'>
//                         <TripleDot />
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }


// function Messages() {
//     // Main function for Messages page
//     // This is where you can implement the logic for displaying messages, fetching data, etc.



//     return (
//         <>
//             <div className=' w-full max-w-md mx-auto stretch'>
//                 <MessagesHeader />
//                 <div className='h-[calc(100vh-5.5rem)] overflow-y-scroll'>

//                 </div>
//                 <div className='bg-gray-100 flex justify-center items-center position-sticky buttom-0'>
//                     <input type="text" className='border p-3 rounded-2xl h-10 w-50 placeholder:text-gray-400' placeholder='Type a message' />
//                     <button type='submit' className='bg-blue-500 text-white p-3 rounded-2xl w-20'>Send</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Messages