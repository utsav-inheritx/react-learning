import React, { useState } from 'react';
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
  const [timerStarted, setTimerStarted] = useState(false);

  const handleClick = (index) => {
    if (!timerStarted) {
      setTimerStarted(true);
      setTimeout(() => {
        resetColorsStepByStep();
      }, 5000);  // 5 seconds delay before starting the reset
    }

    const newColors = [...colors];
    newColors[index] = getRandomColor();
    setColors(newColors);

    const newOrder = [...clickedOrder];
    newOrder.push(index);
    setClickedOrder(newOrder);
  };

  const resetColorsStepByStep = () => {
    if (clickedOrder.length === 0) return;

    const [first, ...rest] = clickedOrder;
    const newColors = [...colors];
    newColors[first] = '#ffffff';
    setColors(newColors);
    setClickedOrder(rest);

    if (rest.length > 0) {
      setTimeout(() => {
        resetColorsStepByStep();
      }, 500);  // 0.5 seconds delay between each reset
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
