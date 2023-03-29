//Hooks
import { useState, useEffect } from 'react';

//Components
import LoadingScreen from './Loading_screen';
import Result from './Result';
//Objects
import questions from './Questions';

//Style
import '../style/App.scss';

//Animation
import { motion } from 'framer-motion';

const FormTemplate = ({ group }) => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState(false);

  //better with for (... of ...)
  // let checkAnswer = () => {
  //   questions.forEach((item) => {
  //     item.answers.forEach((item) => {
  //       if (answer === item.answer) {
  //         if (item.correct === true) {
  //           setScore( score + 1)
  //         }
  //       }
  //     })
  //   })
  // }

  let newQuestions = [];
  for (let oneItem of questions) {
    if (oneItem.type === group) {
      newQuestions.push(oneItem);
    };
  };

  let checkAnswer = () => {
    for (let item of newQuestions) {
      for (let itemAnswer of item.answers) {
        if (answer === itemAnswer.answer) {
          if (itemAnswer.correct === true) {
            setScore(score + 1);
          }
        }
      }
    }
  }

  const getAnswerFromUser = event => {
    setAnswer(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
  }

  const setNewQuestion = () => {
    checkAnswer();
    setIndex(index + 1);
    if (index + 1 === newQuestions.length) {
      setIsSubmitted(true);
    }
  }

  useEffect(() => {
    if (isSubmitted === true) {
      const time = setTimeout(() => {
        setResult(true);
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(time);
    }

  }, [isSubmitted]);

  const uncheckRadioButton = () => {
    let radioButtons = document.querySelectorAll(".inputButtons");

    if (setNewQuestion) {
      radioButtons.forEach((item) => {
        item.checked = false;
      })
    }
  }


  //main return
  if (isSubmitted === true && result === false) {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LoadingScreen />
      </motion.div>
    );

  } else if (result === true) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Result score={score} index={index} />
      </motion.div>
    );
  }
  else {

    let inputFields = newQuestions[index].answers.map((item) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <input name='answer' type="radio" value={item.answer} className="inputButtons"></input>
          <label>{item.answer}</label>
        </motion.div>
      )
    });
    return (
      <motion.div id="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <form onSubmit={handleSubmit} onChange={getAnswerFromUser}>
          <div>
            <p>{index + 1}/{newQuestions.length}</p>
            <h1>{newQuestions[index].question}</h1>
          </div>
          {inputFields}
          <button type='submit' onClick={() => {setNewQuestion(); uncheckRadioButton()}}>{index + 1 === newQuestions.length ? "Submit" : "Next"}</button>

        </form>
      </motion.div>
    )
  };
};

export default FormTemplate;