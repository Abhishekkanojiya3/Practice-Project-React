import React, { useState } from 'react';
import UserDetails from './Components/UserDetails';
import UsersList from './Components/UsersList';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [details, setDetails] = useState([]);

    const onAddHandler = (uName, uAge) => {
        setDetails((prevDetails) => {
            return [...prevDetails, { name: uName, age: uAge, id: uuidv4() }];
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