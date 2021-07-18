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
        <div className="join__outer">
            <div className="join__inner">
                <h1 className="heading">
                    join

                </h1>
                <div><input placeholder="Name" className="joinInput1" type="text" onchange={nameHandler} /> </div>
                <div><input placeholder="Room" className="joinInput2" type="text" onchange={roomHandler} /> </div>
                <Link onclick={(event)=> (!name || !room)? event.preventDefault : null} to ={`/chat?name=${name}&room=${room}`}>
                <div className="button">
                    <button type="submit" className="button">SignIN</button>
                </div>
                </Link>

            </div>
        </div>

    )
}

export default Join;