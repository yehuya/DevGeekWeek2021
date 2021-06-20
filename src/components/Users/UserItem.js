

const UserItem = (props) => {
    const {email, phone} = props;

    const handleClick = (e) => {
        console.log(e);
    }

    return (
        <div className="user-item">
            <strong onClick={handleClick}>Email:</strong> {email} {phone}
        </div>
    )
}

export default UserItem;