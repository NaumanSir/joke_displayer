import React from "react"

import Joke from "./components/Joke"

function App() {
    return (
        <div>
            <Joke question = "" punchline = "I don't have any plans today. Guess I don't have 2020 vision after all." />
            <Joke question = "Why can't bikes stand up on their own?" punchline = "Because they're two tired." />
            <Joke question = "Why can't you trust atoms?" punchline = "Because they make up everything." />
            <Joke question = "" punchline = "Some people have difficulty sleeping, but I can do it with my eyes closed." />
            <Joke question = "" punchline = "I love puns - They're very rewording." />
        </div>
    )
}

export default App