import { useEffect } from "react";
import { useForm } from "react-hook-form";

const VALIDATION_OPTIONS = {

    first_name: {
        maxLength: 25, 
        minLength: 2,
        pattern: /^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/ 
    },
    last_name: {
        maxLength: 25, 
        minLength: 2,
        pattern: /^[a-zA-ZÁÉÍÓÚáéíóú\s]+$/ 
    },
    email: {
        maxLength: 50,
        minLength: 2,
        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-zÁÉÍÓÚáéíóú]{2,}$/
    },
    password: {
        maxLength: 30,
        minLength: 1,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
    },
    image_url: {
        required: false,
        maxLength: 285,
        minLength: 11,
        pattern: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}([\/?#]\S*)?$/
    }

};

export const FormModal = ({ isUserToUpdate, isShowModal, resetFormModal, createUser, updateUser }) => {

    const { formState, register, handleSubmit, reset } = useForm();

    const submit = (data) => {

        if (!data.birthday)
            delete data.birthday;
        if (!data.image_url)
            delete data.image_url;

        isUserToUpdate

            ? updateUser(data, reset)
            : createUser(data, reset);

    };
    const handleErrors = ({ type, ref }) => {

        let message;

        switch (type) {

            case "minLength":
                message = `El campo debe ser de mínimo ${VALIDATION_OPTIONS[ref.id][type]} carácteres.`;
            break;
                  
            case "maxLength":
                message = `El campo debe de ser de máximo ${VALIDATION_OPTIONS[ref.id][type]} carácteres.`;
            break;

            case "pattern":
                message = "El campo contiene carácteres invalidos.";
                if (ref.id === "password") 
                    message +=  " La contraseña debe ser de mínimo 8 carácteres e incluir al menos una mayúscula, una minúscula, números y carácteres especiales para mayor seguridad.";
            break;

        };

        return message;

    };

    const handleCloseModal = () => resetFormModal(reset);

    useEffect(() => {

        if (isUserToUpdate) 
            reset(isUserToUpdate);

    }, [isUserToUpdate]);

    return (

        <form
            className={`form ${
                isShowModal && "form--active" || ""
            }`}
            onSubmit={handleSubmit(submit)}
        >

            <button
                className="form__exit"
                onClick={handleCloseModal}
                type="button"
            >
                <svg className="form__exitIcon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24">
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
            </button>
            <h2 className="form__heading"> { isUserToUpdate ? "Editar Usuario :" : "Nuevo Usuario :" } </h2>
            <fieldset className="form__fieldset">
                <label htmlFor="first_name" className="form__label"> Nombre : </label>
                {
                    formState.errors?.first_name && (<p className="form__text"> Error: { handleErrors(formState.errors.first_name) } </p>)
                }
                <input 
                    type="text"
                    className="form__input"
                    id="first_name"
                    placeholder="Ingresa tu Nombre :"
                    required
                    { ...register("first_name", VALIDATION_OPTIONS.first_name) }
                />
            </fieldset>
            <fieldset className="form__fieldset">
                <label htmlFor="last_name" className="form__label"> Apellidos : </label>
                {
                    formState.errors?.last_name && (<p className="form__text"> Error: { handleErrors(formState.errors.last_name) } </p>)
                }
                <input
                    type="text"
                    className="form__input"
                    id="last_name"
                    placeholder="Ingresa tus Apellidos :"
                    required
                    { ...register("last_name", VALIDATION_OPTIONS.last_name) }
                />
            </fieldset>
            <fieldset className="form__fieldset">
                <label htmlFor="email" className="form__label"> E-Mail : </label>
                {
                    formState.errors?.email && (<p className="form__text"> Error: { handleErrors(formState.errors.email) } </p>)
                }
                <input
                    type="email"
                    className="form__input"
                    id="email"
                    placeholder="Ingresa tu E-Mail :"
                    required
                    { ...register("email", VALIDATION_OPTIONS.email) }
                />
            </fieldset>
            <fieldset className="form__fieldset">
                <label htmlFor="password" className="form__label"> Contraseña : </label>
                {
                    formState.errors?.password && (<p className="form__text"> Error: { handleErrors(formState.errors.password) } </p>)
                }
                <input
                    type="password"
                    className="form__input"
                    id="password"
                    placeholder="Ingresa tu Contraseña :"
                    required
                    { ...register("password", VALIDATION_OPTIONS.pass) }
                />
            </fieldset>
            <fieldset className="form__fieldset">
                <label htmlFor="birthday" className="form__label"> Fecha de Nacimiento : </label>
                <input
                    type="date"
                    className="form__input"
                    id="birthday"
                    placeholder="Ingresa tu Fecha de Nacimiento :"
                    { ...register("birthday") }
                />
            </fieldset>
            <fieldset className="form__fieldset">
                <label htmlFor="image_url" className="form__label"> Foto de Usuario : </label>
                {
                    formState.errors?.image_url && (<p className="form__text"> Error: { handleErrors(formState.errors.image_url) } </p>)
                }
                <input
                    type="text"
                    className="form__input"
                    id="image_url"
                    placeholder="Ingresa una Imágen para tu Usuario :"
                    { ...register("image_url", VALIDATION_OPTIONS.image_url) }
                />
            </fieldset>
            <button className="form__submit"> { isUserToUpdate ? "Guardar Cambios" : "Crear Nuevo Usuario" } </button>
            
        </form>

    );

};