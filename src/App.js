import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(true);

  const handleCounter = () => {
    setCounter((c) => c + 1);
    setColor((f) => f === false);
  };

  console.log(color);

  return (
    <div>
      <h1 styles={{ backgroundColor: `${color} === true ? 'red' : 'blue'` }}>{counter}</h1>
      <button onClick={handleCounter}>increment</button>
    </div>
  );
}
