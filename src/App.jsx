import { useState } from "react";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { InfoModal } from "./components/InfoModal";
import { FormModal } from "./components/FormModal";
import { DeleteModal } from "./components/DeleteModal";
import { UsersContainer } from "./components/UsersContainer";
import axios from "axios";

const BASE_URL = "https://users-crud.academlo.tech";
const ENDPOINT = "/users";
const FORM_DEFAULT_VALUES = {

    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    image_url: ""

};

export const App = () => {

    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);
    const [deleted, setDeleted] = useState(null);
    const [isUserToUpdate, setIsUserToUpdate] = useState(null);
    const [isShowModal, setIsShowModal] = useState(false);

    const changeModal = (userToDelete) => {

        setIsShowModal(!isShowModal);
        
        if (userToDelete)
            setUserToDelete(userToDelete);

    };

    const getAllUsers = async () => {

        const url = `${BASE_URL}${ENDPOINT}/`;

        try {

            const res = await axios.get(url);
            const { data } = res;

            setUsers(data);

        } catch (e) {

            setError(e);

        };

    };
    const createUser = async (postData, reset) => {

        const url = `${BASE_URL}${ENDPOINT}/`;

        try {

            const res = await axios.post(url, postData);
            const { data } = res;
            
            getAllUsers();
            resetFormModal(reset);

        } catch (e) {

            setError(e);

        };

    };
    const updateUser = async (putData, reset) => {

        const patchEndpoint = `${ENDPOINT}/${isUserToUpdate.id}`;
        const url = `${BASE_URL}${patchEndpoint}`;

        try {

            const res = await axios.patch(url, putData);
            const { data } = res;

            resetFormModal(reset);
            getAllUsers();
            
        } catch (e) {

            setError(e);
            
        };

    };
    const deleteUser = async (id) => {

        const delEndpoint = `${ENDPOINT}/${id}`;
        const url = `${BASE_URL}${delEndpoint}`;

        try {

            const res = await axios.delete(url);
            const { data } = res;
            const message = {
                message: "Usuario Eliminado"
            };

            getAllUsers();
            setUserToDelete(null);
            setDeleted(message);
            
        } catch (e) {

            setError(e);

        };

    };
    const resetFormModal = (reset) => {

        setIsShowModal(!isShowModal);
        reset(FORM_DEFAULT_VALUES);
        setIsUserToUpdate(null);

    };

    if (typeof window !== "undefined" && !users) 
        getAllUsers();

    return (

        <main className="app">

            <Header changeModal={changeModal} />

            <Modal isShowModal={isShowModal}>

                {
                    (!error && userToDelete) && (
                        <DeleteModal
                            isShowModal={isShowModal}
                            userToDelete={userToDelete}
                            setUserToDelete={setUserToDelete}
                            changeModal={changeModal}
                            deleteUser={deleteUser}
                        />
                    )        
                }
                {
                    (!error && !userToDelete && !deleted) && (
                        <FormModal
                            isUserToUpdate={isUserToUpdate}
                            isShowModal={isShowModal}
                            resetFormModal={resetFormModal}
                            createUser={createUser}
                            updateUser={updateUser}
                        />
                    )
                }
                {
                    deleted && (
                        <InfoModal
                            isShowModal={isShowModal}
                            deleted={deleted}
                            info={deleted}
                            changeModal={changeModal}
                            setDeleted={setDeleted}
                        />
                    )
                }
                {
                    error && (
                        <InfoModal 
                            isShowModal={isShowModal}
                            error={error}
                            info={error}
                            setError={setError}
                        />
                    )
                }

            </Modal>

            <UsersContainer
                users={users}
                changeModal={changeModal}
                setIsUserToUpdate={setIsUserToUpdate}
                deleteUser={deleteUser}
            />
        
        </main>

    );

};