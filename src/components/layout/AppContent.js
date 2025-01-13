import React from "react";
import { Outlet } from "react-router-dom"; // Sayfa yönlendirmeleri için

const AppContent = () => {
    return (
        <div className="app-content p-4">

            <Outlet /> {/* Burada yönlendirilmiş sayfa render edilecek */}
        </div>
    );
};

export default AppContent;