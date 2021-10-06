import React from 'react';

import './error-indicator.scss';
import icon from './space-station.png';

const ErrorIndicator = () => {
  return (

    <div className="error-indicator">
      <img src={icon} alt="error logo" />
      <span className="error-indicator__boom">boom!</span>
      <span>something has gone terribly werong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  )
}

export default ErrorIndicator;