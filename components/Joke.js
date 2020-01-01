import React from "react"

import Question from "./Question"
import Punchline from "./Punchline"

function Joke(props) {
    return (
        <div>
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}

export default Joke