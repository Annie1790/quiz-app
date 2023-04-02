//React Hooks
import { useState, useEffect } from "react";
//Animation
import { motion } from 'framer-motion';

import "../style/Welcome_screen.scss"

const WelcomeScreen = ({ onClose }) => {
    let [playerName, setPlayerName] = useState("");

    const setUserName = () => {
        setPlayerName(document.getElementById("user_name").value);
    };

    const getUserName = () => {
        onClose(playerName);
    };

    return (
        <motion.div id="welcome_screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <p>Enter your name:</p>
            <input onChange={setUserName} id="user_name" type="text"></input>
            <button onClick={getUserName}>Start</button>
        </motion.div>
    )
};

export default WelcomeScreen;