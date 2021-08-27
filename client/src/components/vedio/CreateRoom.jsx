import React,{useState,useRef,useEffect} from "react";
import { v1 as uuid } from "uuid";
import {navigate} from '@reach/router';
import * as io from 'socket.io-client'
import Button from '@material-ui/core/Button';
import AppAppBar from '../../views/AppAppBar';
import withRoot from '../../withRoot';

const CreateRoom = (props) => {


    const [rooms, setRooms] = useState([])
    const [loaded,setloaded]=useState(true)
    const socketRef = useRef();


        socketRef.current = io.connect("http://localhost:8000/");
        socketRef.current.on('roomsli', data => {
        setRooms([...rooms, data])

     } )
    useEffect(() => {

   console.log('it works mtfs')
    },[rooms,loaded])


    console.log(rooms)

    function create() {
        const id = uuid();
        setRooms([...rooms,id]);
        navigate(`/room/${id}`);
        socketRef.current = io.connect("http://localhost:8000/");
        socketRef.current.emit("rooms", id);
        console.log(id)
    }
    const show = () => {
        for(var x = 0;x<rooms.length;x++) {
            return (

                    <Button variant="contained" color="primary" style={{width: "100%", marginTop: "50px", fontSize: "18px"}} onClick={() => navigate(`/room/${rooms[x]}`)} > room  </Button>
                )
        }
    }




    return (
        
        <div style={{backgroundImage: 'URL(https://i.redd.it/qwd83nc4xxf41.jpg)', height:"700px"}}>
            <React.Fragment >
      <AppAppBar/>
    </React.Fragment> 
        {show()}
        <Button onClick={create} variant="contained" color="primary" style={{marginTop: "400px"}} >Create Room</Button>

        </div>
    );
}

export default withRoot(CreateRoom);