import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const allFeedback = good + neutral + bad;

  const average = allFeedback > 0 ? good - bad / allFeedback : 0;

  const positivePercentage = allFeedback > 0 ? (good / allFeedback) * 100 : 0;

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(netural + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <>
      <Header text={"Give Feedback"} />
      <Button handleClick={handleGood} text={"Good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"Bad"} />
      <Header text={"Statistics"} />
      {allFeedback > 0 ? (
        <>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            allFeedback={allFeedback}
            average={average}
            positivePercentage={positivePercentage}
          />
        </>
      ) : (
        <p>No Feedback Given</p>
      )}
    </>
  );
};

export default App;
