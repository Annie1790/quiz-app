import wineGlass from "../assets/glass.svg";

import "../style/Result.scss"

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
        <div id="resultDiv">
            <p>Congratulations!</p>
            <CountScorePercentage />
            <img src={wineGlass} alt="congratulations!" />
            <div>
                <button>Start Again</button>
                <button onClick={copyResults}>Copy results</button>
            </div>
        </div>
    )
};

export default Result;