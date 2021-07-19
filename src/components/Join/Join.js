import React,{ useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');

    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const roomHandler = (e) => {
        setRoom(e.target.value);
    }
    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">
                    Join

                </h1>
                <div>
                    <input placeholder="Name" className="joinInput" type="text" onChange={nameHandler} />
                     </div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={roomHandler} /> </div>
                <Link onClick={(event)=> (!name || !room)? event.preventDefault : null} to ={`/chat?name=${name}&room=${room}`}>
              
                    <button type="submit" className="button mt-20">SignIN</button>
             
                </Link>

            </div>
           
            
        </div>

    )
}

export default Join;
