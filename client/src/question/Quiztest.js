import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Quiztest = () => {
    const [category, setCategory] = useState([])
    
    
    useEffect(() => {
        axios.get("http://localhost:8000/words")
        .then(res=>setCategory(res.data))
        .catch(err=>console.log(err))
        })
    
    
    return (
        <div>
            {category.map((cate, index) => (
            <>
                <img src={cate.picture} alt="Logo" />
                <p>{cate.title}</p>
            </>
            ))}
        </div>
    )
}

export default Quiztest
