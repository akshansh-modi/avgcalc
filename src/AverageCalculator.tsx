import React, { useState, useEffect } from "react";
import axios from "axios";

function AverageCalculator() {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    fetchNumbers();
  }, []); // Fetch numbers on initial render

  const fetchNumbers = async () => {
    try {
      const response = await axios.get("http://20.244.56.144/test");
      const data = response.data;
      const { windowPrevState, windowCurrState, numbers, avg } = data;
      setWindowPrevState(windowPrevState);
      setWindowCurrState(windowCurrState);
      setNumbers(numbers);
      setAvg(avg);
    } catch (error) {
      console.error("Error fetching numbers:", error);
    }
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get("http://20.244.56.144/test");
      const data = response.data;
      const { windowPrevState, windowCurrState, numbers, avg } = data;
      setWindowPrevState(windowPrevState);
      setWindowCurrState(windowCurrState);
      setNumbers(numbers);
      setAvg(avg);
    } catch (error) {
      console.error("Error fetching numbers:", error);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Fetch Numbers</button>
      <div>
        <h2>Window Previous State: {JSON.stringify(windowPrevState)}</h2>
        <h2>Window Current State: {JSON.stringify(windowCurrState)}</h2>
        <h2>Numbers: {JSON.stringify(numbers)}</h2>
        <h2>Average: {avg}</h2>
      </div>
    </div>
  );
}

export default AverageCalculator;
