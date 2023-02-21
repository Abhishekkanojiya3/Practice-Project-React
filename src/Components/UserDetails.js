import React, { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Wrapper";

const UserDetails = (props) => {
        const nameInputRef = useRef();
        const ageInputRef = useRef();
        const collegeInputRef = useRef();
        //  const [enteredUsername,setEnteredUsername] = useState('');
        //  const [enteredAge,setEnteredAge] = useState('');
        const [error, setError] = useState('');
        const formSubmitHandler = event => {
            event.preventDefault();
            const enteredName = nameInputRef.current.value;
            const enteredUserAge = ageInputRef.current.value;
            const enteredCollegeName = collegeInputRef.current.value;
            if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollegeName.trim().length === 0) {
                setError({
                    title: 'An Error Occured',
                    message: 'please enter a valid input'
                });
                return;
            }
            props.onAddUser(enteredName, enteredUserAge, enteredCollegeName)
                // setEnteredUsername('');
                // setEnteredAge('');
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
            collegeInputRef.current.value = '';

        };
        // const updateUsername = (event) =>{
        //     setEnteredUsername(event.target.value);
        // }
        // const updateAge = (event) =>{
        //     setEnteredAge(event.target.value);
        // }
        const errorHandler = () => {
            setError(null);
        };
        return ( <
            Wrapper > {
                error && < ErrorModal title = { error.title }
                message = { error.message }
                onConfirm = { errorHandler }
                />} <
                form onSubmit = { formSubmitHandler } >
                <
                label htmlFor = "username" > Username < /label>  <
                input id = "username"
                type = "text"
                ref = { nameInputRef }
                /> <
                label htmlFor = "collegename" > College Name < /label>  <
                input id = "collgename"
                type = "text"
                ref = { collegeInputRef }
                /> <
                label htmlFor = "age" > Age(years) < /label>  <
                input id = "age"
                type = "number"
                ref = { ageInputRef }
                /> <
                button type = "submit" > Add User < /button>  <
                /form> <
                /Wrapper>
            );
        };

        export default UserDetails;