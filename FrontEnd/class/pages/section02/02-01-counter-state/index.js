//import useState
import { useState } from "react";

export default function CounterStatePage() {
  //JS Section
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    setCount(count + 1);
  }
  function onClickCountDown() {
    setCount(count - 1);
  }

  //HTML Section
  return (
    <div>
      {count}
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}
