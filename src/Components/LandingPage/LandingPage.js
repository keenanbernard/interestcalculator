import React from 'react';
import './LandingPage.css';

const Card = () => {
    return (
        <div className="Card-Body">
            <h1>Interest Calculator</h1>
          <div className="Card-Amount-Field">
            <p>Principal Amount ($):</p>
            <input type="number" placeholder="Enter Principal Amount"/>
          </div>
          <div className="Card-Input">
            <div className="Card-Input-Field1">
              <p>Interest Rate (%):</p>
              <input type="number" placeholder="Enter Interest Rate"/>
            </div>
            <div className="Card-Input-Field2">
              <p>Interest Duration:</p>
              <input type="number" placeholder="Enter Duration"/>
            </div>
          </div>
        </div>
    )
}

export default Card;