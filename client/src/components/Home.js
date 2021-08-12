import React,{useEffect , useState} from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Home = () => {
    const [quiz, setQuiz] = useState("");
  
        // useEffect(()=>{
        //     axios.get('http://localhost:8000/words')
        //         .then(res=>{setQuiz(res.data)});
        // })
  
    
    return (
        <>
        <div className="Logo">
        <div style={{width:'50%' , border:"solid 5px black", marginLeft:"450px"}} className="back" >
 
            <header>
                <br/>
                <br/>  
          <h2 style={{fontFamily:"Fantasy"}}>How to communicate with a Deaf person</h2>
          </header>
          <br/>
          <div style={{fontFamily:"Comic Sans MS, Comic Sans, cursive",color:"black"}}>
          <p>Fortunately, you don’t need to know ASL in order to know how to communicate with a Deaf person. According to a tip sheet developed by the Rochester Institute of Technology, one of the country’s premiere learning institutions for the Deaf, there are five guidelines to remember when communicating with the Deaf.</p>
          <br/>
          <br/>
          <ol>
              <li>Acknowledge the fact that your first attempts to communicate will feel awkward and uncomfortable. This will pass as your interaction progresses.</li>
              <br/>
              <li>It’s OK to use paper and pen. In fact, the Deaf person will appreciate your efforts even more if you use a combination of communication methods, such as hand gestures, facial expressions and the written word.</li>
              <br/>
              <li>Take the time to communicate and connect. Deaf people consider communication an investment of time and effort. Slow down, take your time and ask for clarification if you need it.</li>
              <br/>
              <li>Understand that Deaf people listen with their eyes. Vision is the most useful tool they have to communicate and receive information. For this reason, only speak when you have eye contact, even if they are using an interpreter. Maintaining eye contact is a sign of respect.</li>
              <br/>
              <li>Use the beginning and ending of a conversation as an opportunity to make physical and visual contact with the Deaf person, especially if they have been using an interpreter during your conversation. Smile, shake hands, touch their arm (if appropriate) and make eye contact. </li>
          </ol>
          </div>
            <Button variant="contained" color="primary" style={{margin:"20px 0 20px 0"}}>
                Go to the Home
            </Button>
        
        </div>
        </div>

        </>
    )
}

export default Home
