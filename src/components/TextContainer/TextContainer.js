import React from 'react';

import onlineIcon from '../../Icons/onlineIcon.png';


import './TextContainer.css';

const TextContainer = ({ users,room }) => (
  <div className="textContainer">
    <div>
      <h1>Stay connected <span role="img" aria-label="emoji">💬</span></h1>
    </div>
    {
      users
        ? (
          <div className="">
            <h4 className="h4">People online :</h4>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    
                    {name.toUpperCase()} in {room}
                    <img alt="Online Icon" src={onlineIcon}/>

                    
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;