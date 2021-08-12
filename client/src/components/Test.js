import React,{useState , useEffect} from 'react'
import axios from 'axios'
const Test = () => {
    const [items,setItems] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8000/items")
    .then(res=>setItems(res.data))
    .catch(err=>console.log(err))
    })

    return (
        <div>
            {items.map((text, index) => (
            <img src={text.picture} alt="Logo" />
            ))}

        </div>
    )
}

export default Test
