import React from "react";

const UsersList = (props) => {
    return ( <
        ul > {
            props.users.map((user) => {
                return <li key = { user.id } >

                    { user.name } { user.age } <
                    /li>

            })
        }

        <
        /ul>
    );
};

export default UsersList