import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";


function App() {
    const [userList, setUserList] =useState([]);

    const addUserHandler = (username, age) => {
        setUserList([...userList, {name: username, age: age, id: Math.random().toString()}]);
    }

    return (
        <div>
            <AddUser addUser={addUserHandler}/>
            <UserList users={userList}/>
        </div>
    );
}

export default App;
