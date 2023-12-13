import React, { useState } from 'react';

function Counter() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);

  const handleAdd1 = () => {
    setCount1(count1 + 1);
  };

  const handleAdd2 = () => {
    setCount2(count2 + 2);
  };

  return (
    <div>
      <h2>Counter : {count1}</h2>
      <button onClick={handleAdd1}>Add 1</button>
      <h2>Counter : {count2}</h2>
      <button onClick={handleAdd2}>Add 2</button>
    </div>
  );
}

export default Counter;