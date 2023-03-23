import { useState } from "react";

const WelcomeScreen = () => {
    let [playerName, setPlayerName] = useState("");

    const setUserName = () => {
        setPlayerName(document.getElementById("user_name").value);
    };

    const getUserName = () => {
        return playerName;
    }

    return (
        <div>
            <p>Enter your name:</p>
            <input id="user_name" type="text"></input>
            <button onClick={setPlayerName}>Start</button>
        </div>
    )
};

export default WelcomeScreen;