const App = () => {
    return (
        <div>
            <Person
                name="Brandon"
                age={34}
                hobbies={["Concerts", "Camping", "Gaming"]}
            />
            <Person
                name="Kaia"
                age={17}
                hobbies={["Playing Guitar", "Shopping"]}
            />
            <Person
                name="Lessandra"
                age={30}
                hobbies={["Cooking", "Hiking", "Writing"]}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
