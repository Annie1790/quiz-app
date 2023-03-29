//Assets
import wineGlass from "../assets/glass.svg";
//SCSS
import "../style/Result.scss";
//Animation
import { motion } from 'framer-motion';

const Result = ({ score, index }) => {

    let result = 0;
    result = (score / index) * 100;
    result = Math.floor(result).toString();

    let CountScorePercentage = () => {
        return (
            <h1>{result}%</h1>
        )
    }

    let copyResults = () => {
        alert("Copied!")
    }

    return (
        <motion.div id="resultDiv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <p>Congratulations!</p>
            <CountScorePercentage />
            <img src={wineGlass} alt="congratulations!" />
            <div>
                <button>Start Again</button>
                <button onClick={copyResults}>Copy results</button>
            </div>
        </motion.div>
    )
};

export default Result;