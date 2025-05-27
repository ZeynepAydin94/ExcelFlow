import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/userActions";

export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutUser());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");

    };
    return logout;
};