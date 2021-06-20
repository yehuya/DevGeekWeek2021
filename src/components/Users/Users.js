import { useContext, useState } from 'react';
import UsersContext from '../../contexts/users';
import UserItem from './UserItem';

const Users = (props) => {
    const users = useContext(UsersContext);
    const [search, setSearch] = useState('');

    const renderList = () => {
        return users
            .filter(item => item.email.includes(search))
            .map(user => <UserItem key={user.email} {...user}/>);
    }

    return (
        <>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="user-list">
                {renderList()}
            </div>
        </>
    )
}

export default Users;