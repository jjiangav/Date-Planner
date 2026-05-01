import React, { useState } from 'react';
import './App.css';
import maximusImg from './Maximus.JPG';

function App() {
  const [number, setNumber] = useState(0);
  const [showPhishPopup, setShowPhishPopup] = useState(false); // New state for popup visibility
  const [showThreat, setShowThreat] = useState(false); // State for the second phase of the "attack"
  const [showChicken, setShowChicken] = useState(false); // State for the third phase
  const [isOkDisabled, setIsOkDisabled] = useState(true); // State for the OK button

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(newNumber);
    setShowPhishPopup(true); // Show the popup after generating a number
    setIsOkDisabled(true);

    // Enable the OK button after 3 seconds
    setTimeout(() => setIsOkDisabled(false), 3000);
    
    // Show Maximus and the threat message after 1 second
    setTimeout(() => setShowThreat(true), 1000);

    // Show chicken message after 2 seconds
    setTimeout(() => setShowChicken(true), 2000);
  };

  const closePhishPopup = () => {
    setShowPhishPopup(false); // Function to close the popup
    setShowThreat(false); // Reset the threat state
    setShowChicken(false); // Reset chicken state
    setIsOkDisabled(true); // Reset button state
  };

  return (
    <div className="container">
      <h1>Random Number</h1>
      <div className="number-display">{number}</div>
      <div className="button-with-arrows">
        <span className="arrow-text left-arrow">Click Me &#x2192;</span>
        <button onClick={generateNumber}>Generate New Number</button>
        <span className="arrow-text right-arrow">&#x2190; Click Me</span>
      </div>

      {showPhishPopup && ( // Conditionally render the popup if showPhishPopup is true
        <div className="phish-popup-overlay">
          <div className="phish-popup-content">
            <h2>You have been phished!</h2>
            <p>Next time do not click strange links.</p>
            {showThreat && (
              <div className="threat-container">
                <img src={maximusImg} alt="Maximus the cat" className="cat-image" />
                <div className="speech-bubble">
                  <p className="threat-message">Max says feed him treats or he'll leak your social security number on the dark web</p>
                </div>
              </div>
            )}
            {showChicken && <p className="chicken-message">Max likes chicken btw^</p>}
            <button 
              onClick={closePhishPopup} 
              className="phish-popup-button" 
              disabled={isOkDisabled}
            >
              {isOkDisabled ? 'Wait...' : 'OK'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;