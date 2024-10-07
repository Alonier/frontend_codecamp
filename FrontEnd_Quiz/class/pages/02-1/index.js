import { useState } from "react";

export default function ReactHooksPage() {
  //JS Section
  const [hello, setHello] = useState("안녕하세요");
  //HTML Section
  const onClickButton = () => {
    setHello("반갑습니다.");
  };

  return (
    <div>
      <button onClick={onClickButton}>{hello}</button>
    </div>
  );
}
