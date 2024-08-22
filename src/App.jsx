import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div className="color-change-container" style={{ backgroundColor: bgColor }}>

      <div className="button-container">
        <h1 className='heading' style={{color:'black'}}>Background Color Changer</h1>
        <button className='btn btn-outline-danger' onClick={() => handleColorChange("red")}>Red</button>
        <button className='btn btn-outline-primary' onClick={() => handleColorChange("blue")}>Blue</button>
        <button className='btn btn-outline-success' onClick={() => handleColorChange("green")}>Green</button>
        <button className='btn btn-outline-warning' onClick={() => handleColorChange("yellow")}>Yellow</button>
      </div>
      </div>
    </>
  );
}

export default App;