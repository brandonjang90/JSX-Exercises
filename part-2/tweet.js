const Tweet = ({ username, name, date, message }) => {
    return (
    <div className="tweet">
        <span className="name">Name: {name}</span>
        <span className="username">Username: {username}</span>
        <p>Message: {message}</p>
        <span className="date">Date: {date}</span>
    </div>
    );
};