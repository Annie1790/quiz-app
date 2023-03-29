//React hooks
import { useState } from 'react';
//Components
import '../style/AnimatedRoutes.scss';
import FormTemplate from './Form_template'
import Header from './Header';
import WelcomeScreen from './Welcome_screen';
import Menu_and_categories from './Menu_and_categories';
//Animation
import { AnimatePresence } from 'framer-motion';

let AnimatedRoutes = () => {
    //functionality
    const [playerName, setPlayerName] = useState("");
    const [category, setCategory] = useState("");

    const getUserName = (value) => {
        setPlayerName(value)
    };

    const onCategorySelected = (data) => {
        setCategory(data);
    };

    if (playerName !== "" && category !== "") {
        return (
            <>
                <AnimatePresence>
                    <Header playerName={playerName} />
                    <FormTemplate group={category} />
                </AnimatePresence>
            </>
        )
    }
    else if (playerName !== "") {
        return (<>
            <AnimatePresence>
                <Header playerName={playerName} />
                <Menu_and_categories clickOnGame={onCategorySelected} />
            </AnimatePresence>
        </>
        )
    }
    else {
        return (
            <>
                <AnimatePresence>
                    <Header playerName={playerName} />
                    <WelcomeScreen onClose={getUserName} />
                </AnimatePresence>
            </>
        )
    }
};

export default AnimatedRoutes;