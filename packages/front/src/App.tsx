import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount((prev) => prev + 1);
  const onDecrease = () => setCount((prev) => prev - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default App;
