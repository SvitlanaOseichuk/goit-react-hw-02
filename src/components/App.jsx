// В компоненті App
import { useState, useEffect } from 'react';
import Feedback from './Feedback';
import Options from './Options';
import Notification from './notification';

function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialState);

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedbackTypes(savedFeedback);
    }
  }, []);

  const updateFeedback = (feedbackType) => {
    setFeedbackTypes((prevFeedbackTypes) => ({
      ...prevFeedbackTypes,
      [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes(initialState);
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = Math.round((feedbackTypes.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
          updateFeedback={updateFeedback}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </>
  );
}

export default App;
