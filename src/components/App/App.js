import { useEffect, useState } from 'react';
import Users from '../Users/Users';
import UsersService from '../../services/users';
import UsersContext from '../../contexts/users';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       (async () => {
            const res = await UsersService.getAllUsers();
            const {results} = await res.json();
            setUsers(results);
       })();
    }, [])

    return (
        <UsersContext.Provider value={users}>
            <div className="main-app">
                <Users/>
            </div>
        </UsersContext.Provider>
    )
}

export default App;