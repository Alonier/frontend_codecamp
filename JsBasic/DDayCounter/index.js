const container = document.querySelector(".d-day-container");
const newContainer = document.querySelector(".d-day-message");
let intervalIdArr = [];

newContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>";
container.style["display"] = "none";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

const countMaker = function (dateFormat) {
  const nowDate = new Date();
  const targetDate = new Date(dateFormat);
  // 두 객체의 날짜 차이를 초로 반환
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    console.log("타이머가 종료되었습니다.");
    container.style.display = "none";
    newContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
    newContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    console.log("유효하지 않은 시간대입니다.");
    container.style.display = "none";
    newContainer.innerHTML = `<h3>유효하지 않은 시간대입니다.</h3>`;
    newContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: (Math.floor(remaining) % 60).toString().padStart(2, "0"),
  };

  const documentArr = ["days", "hours", "min", "sec"];

  const timeKeys = Object.keys(remainingObj);

  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
    i++;
  }
};

const starter = () => {
  container.style["display"] = "flex";
  newContainer.style["display"] = "none";

  const dateFormat = dateFormMaker();
  countMaker(dateFormat);

  setClearInterval();

  const intervalId = setInterval(() => {
    countMaker(dateFormat);
  }, 1000);

  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

const setClearInterval = () => {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  intervalIdArr = [];
};

const resetTimer = () => {
  container.style["display"] = "none";
  newContainer.style["display"] = "flex";
  newContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
  setClearInterval();
};
