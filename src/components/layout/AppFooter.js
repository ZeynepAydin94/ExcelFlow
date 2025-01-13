import React from "react";

const AppFooter = () => {
    return (
        <footer className="app-footer bg-dark text-white p-3 mt-5">
            <div className="container text-center">
                <p>&copy; 2024 MyApp. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className="text-white">
                        Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="/terms-of-service" className="text-white">
                        Terms of Service
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default AppFooter;