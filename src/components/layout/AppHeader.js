import { useLogout } from "../../hooks/useLogout";
import Button from "../form/Button";
import { useModal } from "../../hooks/useModal";
const AppHeader = () => {
    const logout = useLogout(); // sadece iş yapar (token sil, redirect)
    const { showModal, hideModal } = useModal(); // UI sorumluluğu burada

    const handleLogout = () => {
        showModal({
            title: "Çıkış Yap",
            children: <p>Oturumu kapatmak istediğinize emin misiniz?</p>,
            footer: (
                <>
                    <Button variant="secondary" onClick={hideModal}>
                        Vazgeç
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            logout();
                            hideModal();
                        }}
                    >
                        Çıkış Yap
                    </Button>
                </>
            ),
        });
    };

    return (
        <header className="bg-dark text-white px-4 py-3 d-flex align-items-center justify-content-between shadow-sm">


            <Button
                onClick={handleLogout}
                variant="outline-light"
                className="ms-auto"
            >
                <i className="bi bi-box-arrow-right me-2"></i>
                Çıkış Yap
            </Button>
        </header>
    );
};

export default AppHeader;