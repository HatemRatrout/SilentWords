import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ResultBox from '../components/ResultBox';
import AppAppBarQuiz from '../views/AppAppBarQuiz';
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
import { navigate } from '@reach/router'
import Button from '@material-ui/core/Button';
import { Router } from '@reach/router';
import { Link } from '@reach/router';
import '../App.css';
//import '../quizzz.css';

const Quizmain = () => {
    const [allQuestions, setAllQuestions] = useState([]);
    const [state, setState] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [disable, setDisable] = useState(false);

    const [responses, setResponses] = useState(0);
    const [flag, setFlag] = React.useState(true);
    
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
        }
        if (responses >= 5)
        {
            setState(state)
            // navigate('/questions')
        }
    };

    console.log("Thia ia "+state)

    return (

        <div>
            
            <React.Fragment >
      <AppAppBar/>
    </React.Fragment>
    <div class="login-div">
    <React.Fragment >
      <AppAppBarQuiz/>
    </React.Fragment>
    {allQuestions.map((question, index) => (
            <div key={index}>
            
            
            <div>
            <img src={question.question} alt="question" style={{width:'400px', height:'230px'}}/>
            </div>
            
            <br></br>
            {
                question.answers.map((answer,i) =>
                <>
                
                <input type="radio" variant="contained" color="primary" style={{margin:"20px 5px 60px 0", marginBottom:'100px', backgroundColor: '#28282a'}} onClick={()=> {
                    setFlag(!flag);
                    computeAnswer(answer,question.correct)
                    
                }}/> <label style={{marginRight:'30px'}}>{answer}</label>
                </>
                
                )
                
            }
            </div>
            ))}
        
        <Button variant="contained" color="secondary" onClick={()=> {
                navigate('/quizResult/'+state)
            }}>Submit</Button>

            {/* make it apper in another page the text under*/}
            {
            

        //         responses === 5 
        //   ? (<ResultBox score={state}
        //     playAgain={playAgain} />) 
        //   : null
      }
</div>
 

    
        </div>
      
    )
}

export default withRoot(Quizmain);