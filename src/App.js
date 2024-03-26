import {useState} from "react";
import './App.css';
import Question from './components/Question';
import question from './constants/question.json';
import Result from "./components/Result";

function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [userAnswer,setUserAnswer] = useState([]);

  // logic for nnxt question

  const handleNextQuestion=(isCorrect)=>{
    setCurrentQuestion(currentQuestion+1);
    setUserAnswer([...userAnswer,isCorrect]);
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };


  return (
    <div className="App">
     <h1>World Quiz</h1>

     {/* Question component */}
     {
      currentQuestion<question.length && (
      <Question question={question[currentQuestion]}
       onAnswerClick={handleNextQuestion}
       />
      )
      }

     {/* AnswerOption Component */}
     {currentQuestion === question.length && (
        <Result
          userAnswers={userAnswer}
          questions={question}
          resetQuiz={resetQuiz}
        />
      )}

    </div>
  );
}

export default App;
