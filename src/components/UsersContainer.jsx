import { User } from "./User";

export const UsersContainer = ({ users, changeModal, setIsUserToUpdate, deleteUser }) => {

    return (

        <section className={`usersContainer ${
            (users && users.length > 0) && "usersContainer--active" || ""
        }`}>

            {
                users && users.length > 0
                    ? users.map(user => (
                        <User 
                            key={user.id} 
                            user={user}
                            setIsUserToUpdate={setIsUserToUpdate}
                            changeModal={changeModal}
                            deleteUser={deleteUser}
                        />
                    ))
                    : ( <h2 className="usersContainer__empty"> No hay usuarios, puedes empezar agregando un nuevo usuario. </h2> )
            }

        </section>

    );

};