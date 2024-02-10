import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'
import reportButtonImage from '../report.png';
import leftBuildingImage from './building.png'; 
import rightBuildingImage from './building.png'; 

const Homepage = () => {
    const navigate = useNavigate();
  
    const handleReportClick = () => {
      navigate('/report');
    };
    return(
        <>
         <img src={leftBuildingImage} alt="Left Building" className="left-building" />
         <img src={rightBuildingImage} alt="Right Building" className="right-building" />

            <nav className="navbar">
                <img src={require('./byte-9.png')} alt="Logo" className="navbar-logo" />
                <h1> Porter+ </h1>
            </nav>

            <div className="welcomeBox">
    <h2 className="welcomeHeader">Welcome</h2>
    <div className="infoParagraph">
    <p>Report+ is used to relay an emergency or a threat regarding your safety.</p>
    <p>Your selection will help determine what category of a responder you will receive.</p>
    <p>This consists of: Police, EMS, Firefighters, and a Superhero.</p>
    <p>Providing a location and a brief description of your emergency will help aid your responder.</p>
    <p>If necessary, an image or video may be provided to your responder to further your aid.</p>
    </div>
</div>
<div className="reportButtonContainer">
        <button onClick={handleReportClick}>
          <img src={reportButtonImage} alt="Report Button" />
        </button>
      </div>
        </>
        
    );
}

export default Homepage;