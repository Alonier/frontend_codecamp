export default function CounterLetDocumentPage() {
  //JS Section

  function onClickCountUp() {
    const count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;
  }

  function onClickCountDown() {
    const count = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
  }

  //HTML Section
  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </>
  );
}
