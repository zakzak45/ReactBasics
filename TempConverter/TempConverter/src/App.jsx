import React, { useState } from "react";

export default function TempConverter() {
  const [celsius, setCelsius] = useState(0);

  const toFahrenheit = (c) => (c * 9) / 5 + 32;
  const toKelvin = (c) => c + 273.15;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Temperature Converter</h2>
      <label>
        Celsius (°C):
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(Number(e.target.value))}
        />
      </label>
      <div>Fahrenheit (°F): {toFahrenheit(celsius).toFixed(2)}</div>
      <div>Kelvin (K): {toKelvin(celsius).toFixed(2)}</div>
    </div>
  );
}
