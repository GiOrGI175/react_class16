import { useState, useRef } from 'react';
import './App.css';

function App() {
  // let normalVar = 0;

  const [click, setClick] = useState(0);

  const refVar = useRef(0);

  console.log(refVar.current);

  const handleClick = () => {
    // normalVar = normalVar + 1;
    setClick(click + 1);
    // console.log(normalVar);
    refVar.current += 1;

    console.log('use ref: ', refVar.current);
  };
  return (
    <>
      <div>
        <p>button clicked items{click}</p>
        {/* <p>normal variable:{normalVar}</p> */}
        <p>normal variable: {refVar.current}</p>
        <button onClick={handleClick}>clk me</button>
      </div>
    </>
  );
}

export default App;
