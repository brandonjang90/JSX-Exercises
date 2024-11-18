const App = () => (
    <div>
        <Tweet 
            username="branudon" 
            name="Brandon Jang" 
            date={new Date().toDateString()} 
            message="React is fun!" />
        
        <Tweet 
            username="goramsgo" 
            name="Matthew Stafford" 
            date={new Date().toDateString()} 
            message="I'm the best quarterback!" />
        
        <Tweet 
            username="betts50" 
            name="Mookie Betts" 
            date={new Date().toDateString()} 
            message="I'm the real MVP not Shohei Ohtani!" />
    </div>
    
    )
    
    ReactDOM.render(<App />, document.getElementById("root"))
    