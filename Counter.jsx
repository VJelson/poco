import React, { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);
  const handleIncreament = () => setcount(count + 1);
  const handleDecreament = () => setcount(count - 1);

  return (
    <div>
      <p>The Count is: {count}</p>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
    </div>
  );
}
