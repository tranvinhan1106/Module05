import { useState} from 'react'
 
function Example() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  
  const handleIncreament = (value) => {
    if (value === true) {
      setCount1((prev) => prev + 1);
    } else {
      setCount2((prev) => prev + 2);
    }
  };

  return (
    <div>
      <p>
        Count : {count1}
      </p>
      <button onClick={() => handleIncreament(true)}>Add 1 </button>

      <p>
        Count :{count2}
      </p>
      <button onClick={() => handleIncreament(false)}>Add 2 </button>
    </div>
  );
}

export default Example;