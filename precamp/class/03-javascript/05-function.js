let isStarted = false;

const fun = () => {
  if (isStarted === false) {
    //타이머가 작동 중이 아닐 때.
    isStarted = true;
    document.getElementById("complete").disabled = false;

    const num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    const authnum = document.getElementById("authNum");
    authnum.innerText = num;
    authnum.style["color"] = `#${random_colour()}`;

    let time = 10;
    let timer;
    //setInterval 이 timer에 할당 될 때 실행됨.
    timer = setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("time").innerText = `${min}:${sec}`;
        time = time - 1;
      } else {
        //타임이 0이 되는 순간 clearInterval로 timer 할당을 해제
        document.getElementById("complete").disabled = true;
        isStarted = false;
        console.log("타이머 작동 중");
        clearInterval(timer);
      }
    }, 1000);
  } else {
    //타이머가 작동 중일 때.
  }
};

//숫자.toString(16) -> 10진수 수를 16진수로 변환.
function random_colour() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
