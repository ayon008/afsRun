import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const useNotify = (message) => toast.error(message, {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

export default useNotify;