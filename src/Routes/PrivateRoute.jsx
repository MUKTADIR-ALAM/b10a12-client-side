import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';
import useAuth from '../Hooks/useAuth';

export default function PrivateRoute({children}) {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <LoadingSpinner/>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to={'/login'} state={{from:location}} replace></Navigate>
  )
}
