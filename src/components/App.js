//Hooks
import { useState } from 'react';

//Objects
import questions from './Questions';

//Style
import '../style/App.scss';



const FormTemplate = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const getAnswerFromUser = (event) => {
    let userAnswer = event.target.value;
    console.log(userAnswer);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitted")
  }

  const setNewQuestion = () => {
    if (index >= questions.length) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  let question = questions[index];

  let inputFields = question.answers.map((item) => {
    return (
      <div>
        <input name='answer' type="radio" value={item.answer}></input>
        <label>{item.answer}</label>
      </div>
    )
  })





  return (
    <div id="form">
      <form onSubmit={handleSubmit} onChange={getAnswerFromUser}>
        <div>
          <p>{index + 1}/{questions.length}</p>
          <h1>{question.question}</h1>
        </div>

        {inputFields}

        <button type='submit' onClick={setNewQuestion}>Next</button>
      </form>
    </div>
  )
}

export default FormTemplate;