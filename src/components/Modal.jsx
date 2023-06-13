export const Modal = ({ children, isShowModal }) => {

    return (

        <dialog className={`modal ${
            isShowModal && "modal--active" || ""
        }`}>

            { children }

        </dialog>

    );

};