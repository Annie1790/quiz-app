//Hooks
import { useState } from 'react';

//Objects
import questions from './Questions';

//Style
import '../style/App.css';

const FormTemplate = () => {
  const [index, setIndex] = useState(0);

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

  let question = questions[index]

  let inputFields = question.answers.map((item) => {
    return (
      <>
      <input name='answer' type="radio" value={item.answer}></input>
        <label>{item.answer}</label>
      </>
    )
  })





  return (
    <div>
      <form onSubmit={handleSubmit} onChange={getAnswerFromUser}>
        <div>
          <h1>{index+1}/{questions.length}</h1><h1>{question.question}</h1>
        </div>

        {inputFields}

        <button type='submit' onClick={setNewQuestion}>Next</button>
      </form>
    </div>
  )
}

export default FormTemplate;