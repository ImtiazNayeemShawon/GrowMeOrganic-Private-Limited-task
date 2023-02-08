import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./UseAuth";

export default function PrivateOutlet() {
  const Auth = useAuth();
  return Auth ? <Outlet /> : <Navigate to="/" />;
}