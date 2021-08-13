import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ResultBox from '../components/ResultBox';

const Quizmain = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [state, setState] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [responses, setResponses] = useState(0);
    
    useEffect(() => {
        axios.get("http://localhost:8000/questions")
        // .then(res => {setAllQuestions(res.data)
            
        .then( res =>{
            let randomQuestion = (res.data.sort(() => 0.5 - Math.random()).slice(0, 5))
        setAllQuestions(randomQuestion)
        })
        .catch(err =>console.log(err))
    }, [])

    
    useEffect(() => {
        axios.get("http://localhost:8000/questions")
        .then(res => {
            console.log(res.data)
        for(var i=0 ; i<res.data.length ; i++){
            setAnswer(res.data[i].answers);

        }
        })
}, [])
    


const playAgain = () => {
    setState(0);
    // navigate("Quizmain")
};


const computeAnswer = (answer,correct) => {
        if (answer === correct) {    
            setState(state + 1 );
        }
        if (responses < 5){
            setResponses(responses + 1 )
            // navigate(`ResultBox`);
        };  
    };


    return (

        <div>
        {allQuestions.map((question, index) => (
            <>
            <div/>
            <img src={question.question} alt="Logo" />
            {
                question.answers.map((answer,i) =>
                <>
                <button onClick={()=> {
                    computeAnswer(answer,question.correct)
                }}>{answer}</button>
                </>
                )
            }
            
            </>
            ))}
            {/* make it apper in another page the text under*/}
            {
                responses === 5
          ? (<ResultBox score={state}
            playAgain={playAgain}/>)
          : null
      }
        </div>

    )
}

export default Quizmain
