import wineGlass from "../assets/glass.svg";

import "../style/Result.scss"

const Result = ({ score, index }) => {

    let CountScorePercentage = (score, index) => {
        let result = 0;

        result = (score/index) * 100;
        result = result.toString();
        return (
            <h1>{result}</h1>
        )
    }

    return (
        <div>
            <p>Congratulations!</p>
            <CountScorePercentage />
            <img src={wineGlass} alt="congratulations!" />
            <div>
                <button></button>
            </div>
            </div>
            )
};

            export default Result;