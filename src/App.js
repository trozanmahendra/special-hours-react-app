import React, { useState } from "react";
import hoursData from "./data";
import './App.css';

function App() {
  const [specialHours, setSpecialHours] = useState(hoursData.specialHours);
  const [hours, setHours] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hours) {
      const newSpecialHour = {hours };
      setSpecialHours([...specialHours,newSpecialHour]);
      setHours("");
    }
  };
  return (
    <div className="container">
      <h1>Supply House Business Hours</h1>
      <section>
        <h2>Regular Hours</h2>
        <ul>
          {Object.entries(hoursData.regularHours).map(([day, hours]) => (
            <li key={day}>
              {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Special Hours</h2>
        <ul>
          {specialHours.length > 0 ? (
            specialHours.map((special, index) => (
              <li key={index} className="special-hours">
                {special.hours}
              </li>
            ))
          ) : (
            <li>No special hours configured.</li>
          )}
        </ul>
      </section>
      <section>
        <h2>Add Special Hours</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Hours:
              <input
                type="text"
                value={hours}
                placeholder="2:30 AM - 5:30 PM"
                onChange={(e) => setHours(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
}

export default App;
