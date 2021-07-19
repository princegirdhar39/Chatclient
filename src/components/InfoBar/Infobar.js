// import React from 'react';
// import './Infobar.css';
// import closeIcon from '../../Icons/closeIcon (1).png';
// import onlineIcon from '../../Icons/onlineIcon.png';

// const Infobar = ({room}) => (
//     <div className ="infoBar">
//         <div className="leftInnerContainer">
//             <img className="onlineIcon" src={onlineIcon} alt="onlineIcon" />
//            <h3>{room}</h3>
//         </div>
//         <div className="rightInnerContainer">
//             <a href="/" img src ={closeIcon} ></a>
//         </div>


//     </div>

// )
// export default Infobar;
import React from 'react';

import closeIcon from '../../Icons/closeIcon (1).png';
import onlineIcon from '../../Icons/onlineIcon.png';

import './Infobar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;