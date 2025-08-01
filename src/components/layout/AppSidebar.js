import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {


    return (
        <div className={`sidebar open bg-dark text-white`}>
            <div className="sidebar-header align-items-center p-3">
                <div className="fw-bold fs-4">
                    <i className="bi bi-box-arrow-in-down-right me-2"></i>ExcelFlow
                </div>

            </div>
            <nav className="sidebar-menu">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/dataimport" className="text-white p-2 d-block">
                            DataImport
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-white p-2 d-block">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-white p-2 d-block">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="text-white p-2 d-block">
                            Settings
                        </Link>
                    </li>
                    {/* Diğer menü öğeleri */}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;