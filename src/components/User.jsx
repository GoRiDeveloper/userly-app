export const User = ({ user, changeModal, setIsUserToUpdate }) => {

    const { first_name, last_name, email, birthday, image_url } = user;
    const name = `${first_name} ${last_name}`;

    const handleDeleteUser = () => {

        const userToDelete = {

            id: user.id,
            name,

        };
        changeModal(userToDelete);

    };
    const handleEditUser = () => {

        changeModal();
        setIsUserToUpdate(user);

    };

    return (

        <article className="user">

            <h3 className="user__heading">{ name }</h3>
            <hr className="user__line" />
            <div className="user__info user__email">
                <h4 className="user__subtitle"> CORREO </h4>
                <p className="user__text">{ email }</p>
            </div>
            <div className="user__info user__birthday">
                <h4 className="user__subtitle"> CUMPLEAÑOS </h4>
                <div className="user__box">
                    <svg className="user__iconGift" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5 12H4v8a2 2 0 0 0 2 2h5V12H5zm13 0h-5v10h5a2 2 0 0 0 2-2v-8h-2zm.791-5A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H2v4h9V9h2v2h9V7h-3.209zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM15.5 4c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.477c.51-1.576 1.251-3 1.977-3z"></path>
                    </svg>
                    <p className="user__text"> { birthday || "No se agrego una fecha." } </p>
                </div>
            </div>
            <hr className="user__line" />
            <img className="user__image" src={image_url || "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg"} alt="imagen de usuario" />
            <div className="user__buttons">
                <button
                    className="user__button"
                    data-modal="deleteUser"
                    onClick={handleDeleteUser}
                >
                    <svg className="user__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                        <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                    </svg>
                </button>
                <button
                    className="user__button user__button--edit"
                    data-modal="editUser"
                    onClick={handleEditUser}
                >
                    <svg className="user__icon user__icon--edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
                    </svg>
                </button>
            </div>

        </article>

    );

};