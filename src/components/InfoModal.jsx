export const InfoModal = ({

    isShowModal,
    error,
    deleted,
    info,
    changeModal,
    setError,
    setDeleted

}) => {

    const handleInfoModal = () => {

        if (error)
            setError(null);
        if (deleted) {

            changeModal();
            setDeleted(false); 

        };

    };

    return (

        <section className={`infoContainer ${
            isShowModal && "infoContainer--active" || ""}
        `}>
            {
                error && (
                    <svg className="infoContainer__icon infoContainer__icon--error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                        <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                    </svg>
                )
            }
            {
                deleted && (
                    <svg className="infoContainer__icon infoContainer__icon--check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                        <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
                    </svg>
                )
            }
            <h2 className={`infoContainer__heading ${
                error && "infoContainer__heading--error" || ""
            } ${
                deleted && "infoContainer__heading--check" || ""
            }`}> 
                { error && "Error :("}
                { deleted && "Eliminado Correctamente"}
            </h2>
            <h3 className="infoContainer__message"> { info.message } </h3>
            <button 
                className="infoContainer__btn"
                onClick={handleInfoModal}
            >
                OK
            </button>
        </section>

    );

};