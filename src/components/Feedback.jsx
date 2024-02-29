import React from 'react';

const Feedback = ({ feedbackTypes, updateFeedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li onClick={() => updateFeedback('good')}>
          good: {feedbackTypes.good}
        </li>
        <li onClick={() => updateFeedback('neutral')}>
          neutral: {feedbackTypes.neutral}
        </li>
        <li onClick={() => updateFeedback('bad')}>
          bad: {feedbackTypes.bad}
        </li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positivePercentage || 0}%</li>
      </ul>
    </div>
  );
};

export default Feedback;

