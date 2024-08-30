import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Grid = () => {
  const [colors, setColors] = useState(Array(9).fill('#ffffff'));
  const [clickedOrder, setClickedOrder] = useState([]);
  
  useEffect(() => {
    if (clickedOrder.length > 0) {
      const timer = setTimeout(() => {
        const indexToReset = clickedOrder[0];
        const newColors = [...colors];
        newColors[indexToReset] = '#ffffff';
        setColors(newColors);
        setClickedOrder(clickedOrder.slice(1));
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [clickedOrder, colors]);

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);

    setClickedOrder([...clickedOrder, index]);

    if (clickedOrder.length === 0) {
      setTimeout(() => {
        setClickedOrder([...clickedOrder]);
      }, 5000);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="col-4 p-3 border text-center"
            style={{ backgroundColor: colors[i], cursor: 'pointer' }}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
