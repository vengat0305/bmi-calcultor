import "./App.css";
import { useState } from "react";
function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  function bmiCalculate() {
    const isHeight = /^\d+$/.test(height);
    const isWight = /^\d+$/.test(weight);
    if (isHeight && isWight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setStatus("Under Weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Over Weight");
      } else {
        setStatus("Obese");
      }
      setError("");
    } else {
      setBmi(null);
      setStatus("");
      setError("Please enter a numeric value..");
    }
  }
  function clearAll() {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus("");
    setError("");
  }
  return (
    <div className="App">
      <div className="bmiCalculator">
        <div className="data">
          <h1 style={{ color: "gray" }}>Bmi Calculator!</h1>
          <p style={{ color: "red", fontSize: "18px" }}>{error}</p>
          <div className="inputContainer">
            <label htmlFor="height">Height(cm):</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="weight">Weight(kg):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="bmiBtn">
            <button onClick={bmiCalculate}>Calculate Bmi</button>
            <button onClick={clearAll}>Clear</button>
            {bmi !== null && (
              <div className="result">
                <p>Your BMI is score : {bmi}</p>
                <p>Status :{status}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
