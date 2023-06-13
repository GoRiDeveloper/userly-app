export const Header = ({ changeModal }) => {

    const handleShowModal = () => changeModal();

    return (

        <header className="header">
            <h1 className="header__heading"> Userly </h1>
            <button
                className="header__addBtn"
                onClick={handleShowModal}
            >
                <svg className="header__plusIcon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24">
                    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                </svg>
                <span className="header__addText"> Crea un nuevo usuario </span>
            </button>
        </header>

    );

};