import React,{useState , useEffect} from 'react'
import axios from 'axios'
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
import Button from '@material-ui/core/Button';
import '../App.css';

const Test = ({id}) => {
    const [items,setItems] = useState([]);
    const [rerender, setRerender] = useState(false);
    console.log(id);

    useEffect(() => {
    axios.get("http://localhost:8000/words/" + id )
    .then(res=>{setItems(res.data)
        console.log(res)
    })
    
    .then(res => setRerender(true))
    .catch(err=>console.log(err))
    },[id])

    return (
        <div style={{backgroundImage: 'url(https://i.redd.it/qwd83nc4xxf41.jpg)'}}>
            <React.Fragment >
      <AppAppBar/>
    </React.Fragment> 
            {rerender && items.map((text, index) => (
            <img className="image" src={text.picture} alt="Logo" />
            ))}

        </div>
    )
}

export default withRoot(Test);
