
import React from "react";
import { AppContent, AppFooter, AppHeader, AppSidebar } from "../components/layout/index";
const MasterLayout = () => {


    return (

        <div className="d-flex">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main Content Area */}
            <div className="wrapper d-flex flex-column min-vh-100" style={{ flex: 1 }}>
                <AppHeader />
                <div className="body flex-grow-1">
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>

    );
};

export default MasterLayout;