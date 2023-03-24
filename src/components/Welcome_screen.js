import { useState } from "react";

import "../style/Welcome_screen.scss"

const WelcomeScreen = ({onClose}) => {
    let [playerName, setPlayerName] = useState("");

    const setUserName = () => {
        setPlayerName(document.getElementById("user_name").value);
    };

    const getUserName = () => {
        onClose(playerName);
    };

    return (
        <div id="welcome_screen">
            <p>Enter your name:</p>
            <input onChange={setUserName} id="user_name" type="text"></input>
            <button onClick={getUserName}>Start</button>
        </div>
    )
};

export default WelcomeScreen;