
// const AppHeader = () => {
//     return (
//         <header className="bg-dark text-white p-3 ">
//             {/* Logo */}
//             <div className="logo">
//             </div>

//         </header>
//     );
// };

// export default AppHeader;


import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/userActions'; // logoutUser action'ını import et

const AppHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        localStorage.removeItem("token"); // varsa token’ı sil
        navigate("/login");
    };

    return (
        <header className="bg-dark text-white px-4 py-3 d-flex justify-content-between align-items-center">
            {/* Logo veya Başlık */}
            <div className="fw-bold fs-4">
                ExcelFlow {/* buraya kendi logo ya da başlığını yaz */}
            </div>

            {/* Logout butonu */}
            <button className="btn btn-outline-light" onClick={handleLogout}>
                Çıkış Yap
            </button>
        </header>
    );
};

export default AppHeader;