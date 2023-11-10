import React from 'react'
import '../styles/App.css';
const App = () => {
  const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (e) => {
    setSelectedShape(e.target.value);
  };

  const addShape = () => {
    const newShape = {
      type: selectedShape,
      id: new Date().getTime(), // Unique identifier (timestamp)
    };
    setShapes([...shapes, newShape]);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div key={shape.id} className={shape.type.toLowerCase()}>
            {shape.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
