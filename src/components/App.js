//Hooks
import { useState } from 'react';

//Objects
import questions from './Questions';

//Style
import '../style/App.scss';

const FormTemplate = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

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

  let checkAnswer = () => {
    for (let item of questions) {
      for (let itemAnswer of item.answers) {
        if (answer === itemAnswer.answer) {
          if (itemAnswer.correct === true) {
            setScore(score + 1)
          }
        }
      }
    }
  }

  const getAnswerFromUser = event => {
    setAnswer(event.target.value)
  }

  const handleSubmit = event => {
    checkAnswer()
    event.preventDefault()
    console.log(event.target.value)
  }

  const setNewQuestion = () => {
    if (index >= questions.length) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  //changes form button according to the questions array length
  let ChangeButton = () => {
    if (index + 1 === questions.length) {
      return (
        <button type='submit' onClick={setNewQuestion}>Submit</button>
      )
    } else {
      return (
        <button type='submit' onClick={setNewQuestion}>Next</button>
      )
    }
  }


  //main return
  if (index + 1 > questions.length) {
    return (
      <div id='loading'>
      <svg class="loading-spinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
      </div>
    )
  } else {
    let question = questions[index];

    let inputFields = question.answers.map((item) => {
      return (
        <div>
          <input name='answer' type="radio" value={item.answer}></input>
          <label>{item.answer}</label>
        </div>
      )
    });
    return (
      <div id="form">
        <form onSubmit={handleSubmit} onChange={getAnswerFromUser}>
          <div>
            <p>{index + 1}/{questions.length}</p>
            <h1>{question.question}</h1>
          </div>
          {inputFields}
          <ChangeButton />

        </form>
      </div>
    )
  }
}

export default FormTemplate;