import React, {useState} from "react";


// Function to question inside our app
const QuestionBox = ({ question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  const [ disabled , setDisabled] = useState(false);
  
  
  
  return (
    <div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text, index) => (
            <button variant="primary" size="lg" disabled={disabled}
            id="msg"
            key={index}
            className="answerBtn"
            onClick={()=>{ 
                selected(text);
                setDisabled(true);
            }}> {text}
         </button>
        ))}
        
    </div>
  )
};
  
export default QuestionBox;