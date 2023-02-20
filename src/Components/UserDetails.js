import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const UserDetails = (props) => {
        const [enteredUsername, setEnteredUsername] = useState('');
        const [enteredAge, setEnteredAge] = useState('');
        const [error, setError] = useState('');
        const formSubmitHandler = event => {
            event.preventDefault();
            if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
                setError({
                    title: 'An Error Occured',
                    message: 'please enter a valid input'
                });
                return;
            }
            props.onAddUser(enteredUsername, enteredAge)
            setEnteredUsername('');
            setEnteredAge('');

        };
        const updateUsername = (event) => {
            setEnteredUsername(event.target.value);
        }
        const updateAge = (event) => {
            setEnteredAge(event.target.value);
        }
        const errorHandler = () => {
            setError(null);
        };
        return ( <
            div > {
                error && < ErrorModal title = { error.title }
                message = { error.message }
                onConfirm = { errorHandler }
                />} <
                form onSubmit = { formSubmitHandler } >
                <
                label htmlFor = "username" > Username < /label>  <
                input id = "username"
                type = "text"
                value = { enteredUsername }
                onChange = { updateUsername }
                /> <
                label htmlFor = "age" > Age(years) < /label>  <
                input id = "age"
                type = "number"
                value = { enteredAge }
                onChange = { updateAge }
                /> <
                button type = "submit" > Add User < /button>  <
                /form> <
                /div>
            );
        };

        export default UserDetails;