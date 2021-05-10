import { useEffect, useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((c) => c + 1);
  };

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log(`hello world`);
  });
  // componentDidMount - executa 1x
  useEffect(() => {
    console.log(`run 1x`);
  }, []);
  // Com dependecia - executa td vez que a dependencia mudar
  useEffect(() => {
    console.log(`counter change for ${counter}`);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>increment</button>
    </div>
  );
}
