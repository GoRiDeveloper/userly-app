export const DeleteModal = ({ isShowModal, userToDelete, setUserToDelete, changeModal, deleteUser }) => {

    const handleCancel = () => {

        setUserToDelete(null);
        changeModal();

    };
    const handleDeleteUser = () => deleteUser(userToDelete.id);

    return (

        <section className={`deleteModal ${
            isShowModal && "deleteModal--active" || ""
        }`}>

            <h2 className="deleteModal__heading"> Eliminar Usuario </h2>
            <p className="deleteModal__text"> El Usuario : <span className="deleteModal__text--name">"{ userToDelete.name }"</span> se eliminará. ¿Estás Seguro? </p>
            <div className="deleteModal__buttons">
                <button 
                    className="deleteModal__button"
                    onClick={handleCancel}
                >
                    Cancelar
                </button>
                <button
                    className="deleteModal__button deleteModal__button--delete"
                    onClick={handleDeleteUser}
                >
                    Eliminar
                </button>
            </div>

        </section>

    );

};