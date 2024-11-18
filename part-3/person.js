const Person = ({name, age, hobbies}) => {
    const displayName = name.length > 8 ? name.slice(0,6) : name;

    return (
        <div className="person">
            <p>Learn some information about this person:</p>
            <h3>Name: {displayName}</h3>
            <h3>Age: {age}</h3>
            {age >= 18 ? (
                <h3 className="voting">Please go vote!</h3>
            ) : (
                <h3 className="voting">You must be 18.</h3>
            )}
            <p>Hobbies:</p>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};