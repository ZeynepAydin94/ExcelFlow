import { useModalContext } from "../components/modal/ModalProvider";
export const useModal = () => {
    const { showModal, hideModal } = useModalContext();

    return { showModal, hideModal };
};