import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (!user) {
      toast('You need to log in');
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default PrivateRoutes;
