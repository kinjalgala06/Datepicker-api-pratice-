import React from 'react';
import './TotalWidget.css';
const TotalWidget=({total})=> {
  return(
    <div className="gradiantBackground text-dark">
        <p>The Total Spending</p>
        <h1>₹ {total} </h1>
    </div>
  )
}

export default TotalWidget