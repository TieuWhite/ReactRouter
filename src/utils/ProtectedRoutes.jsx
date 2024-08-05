const { Outlet, Navigate } = "react-router-dom";

const ProtectedRoutes = () => {
  const user = null;
  return user ? <Outlet /> : <Navigate to="/Home" />;
};

export default ProtectedRoutes;
