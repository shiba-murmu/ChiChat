import {  toast } from 'react-toastify';

function Failed( stringPass ) {
    toast.error(stringPass, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

export default Failed