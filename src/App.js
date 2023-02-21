import React, { useState } from 'react';
import UserDetails from './Components/UserDetails';
import UsersList from './Components/UsersList';

function App() {
    const [details, setDetails] = useState([]);

    const onAddHandler = (uName, uAge, uCollege) => {
        setDetails((prevDetails) => {
            return [...prevDetails, { name: uName, college: uCollege, age: uAge, id: Math.random().toString() }];
        });
    }
    return ( <
        div >
        <
        UserDetails onAddUser = { onAddHandler }
        /> <
        UsersList users = { details }
        /> <
        /div>
    );
};

export default App;