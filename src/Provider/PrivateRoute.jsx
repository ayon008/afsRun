import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { loader, user } = useAuth()
    if (loader) {
        return (
            <div>
                loading
            </div>
        )
    }
    if (user) {
        return (
            children
        )
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;