//Assets
import wineGlass from "../assets/glass.svg";
//SCSS
import "../style/Result.scss";
//Animation
import { motion } from 'framer-motion';

const Result = ({ score, index }) => {
    let finalString = "";

    let result = 0;
    result = (score / index) * 100;
    result = Math.floor(result).toString();

    let CountScorePercentage = () => {
        return (
            <h1>{result}%</h1>
        )
    };

    let CongratzString = () => {
        function between(x, min, max) {
            return x >= min && x <= max;
          };

          if (between(result, 0, 20)) {
            finalString = "Might be beneficial to study more!"
          }
          else if (between(result, 21, 40)) {
            finalString = "You have a basic knowledge, which is good!"
          }
          else if (between(result, 41, 60)) {
            finalString = "Not a bad result!"
          }
          else if (between(result, 61, 80)) {
            finalString = "You really know your stuff!"
          }
          else if (between(result, 81, 100)) {
            finalString = "Amazing! Congratulations!"
          };

        return (
            <p>
                {finalString}
            </p>
        )
    };

    const backToMainMenu = () => {
      window.location.reload();
    };

    return (
        <motion.div id="resultDiv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CongratzString />
            <CountScorePercentage />
            <img src={wineGlass} alt="congratulations!" />
            <div>
                <button onClick={backToMainMenu}>Start Again</button>
                <button onClick={() => {navigator.clipboard.writeText(`My score in wine quiz is ${result}%`); alert("Result copied!")}}>Copy results</button>
            </div>
        </motion.div>
    )
};

export default Result;