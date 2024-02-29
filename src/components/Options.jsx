import React from 'react';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <ul>
        <li><button onClick={() => updateFeedback('good')}>Good</button></li>
        <li><button onClick={() => updateFeedback('neutral')}>Neutral</button></li>
        <li><button onClick={() => updateFeedback('bad')}>Bad</button></li>
      </ul>

      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;

