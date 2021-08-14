import './App.css';
import Home from './Home';
import Article from './components/Article';
import Test from './components/Test';
import Quiz from './question/Quiz';
import Quizmain from './question/Quizmain';
import Quiztest from './question/Quiztest';
import ResultBox from './components/ResultBox';
import Categories from './components/Categories';
import { Router } from '@reach/router';



function App() {
  return (
    <div className="App">
      <Router>
            <Test path="/item/:id" />
            <Quizmain path="/questions"/>
            <Home path="/"/>
            <Categories path="/categories"/>
            <Article path="/article"/>
            <ResultBox path="/quizResult/:score"/>
        </Router>
    </div>
  );
}

export default App;
