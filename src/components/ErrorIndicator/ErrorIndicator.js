import React from "react";

import "./ErrorIndicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <h2>Boom!</h2>
      <span>Something has gone terrubly wrong</span> <br />
      <span className="but">(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
