import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

export default function AdminRoute({children}) {
  const {user,loading} = useAuth();
  const [isAdmin,isAdminLoading] = useAdmin();
  const location = useLocation();
  if(loading || isAdminLoading){
    return <LoadingSpinner/>
  }
  if(user && isAdmin){
    return children;
  }
  return <Navigate to={'/'} state={{from:location}} replace></Navigate>
}
