import { createContext, useContext, useState } from "react";
import BaseModal from "./BaseModal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalProps, setModalProps] = useState(null);

    const showModal = (props) => setModalProps({ show: true, ...props });
    const hideModal = () => setModalProps(null);

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modalProps && (
                <BaseModal {...modalProps} onHide={hideModal}>
                    {modalProps.children}
                </BaseModal>
            )}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => useContext(ModalContext);