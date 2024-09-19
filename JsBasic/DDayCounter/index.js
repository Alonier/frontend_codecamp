/** @type {module} *일 *시간 *분 표현 document 객체 */
const container = document.querySelector(".d-day-container");
/** @type {module} 타이머 종료, 유효하지 않은 시간대를 표시하는 div document 객체 */
const newContainer = document.querySelector(".d-day-message");
/**@type {string} localStorage에 저장된 목표 시간 */
const savedDate = localStorage.getItem("savedDate");
/**Interval 저장 배열 */
let intervalIdArr = [];

/**input 태그에 입력된 목표 날짜를 Date 형태의 string 반환
 * @returns {string} 목표 날짜
 */
const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};

/**
 * 현재시간과 목표시간 사이의 남은 기간을 일,시간,분,초로 div내에 표시
 * @param {string} dateFormat
 * @returns
 */
const countMaker = function (dateFormat) {
  if (dateFormat !== savedDate) {
    localStorage.setItem("savedDate", dateFormat);
  }

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

/**
 * 카운터의 시작을 위해 컨테이너, 메시지 컨테이너를 초기화하고xw
 * 기존의 interval들을 clear하고
 * countMaker 를 매초 작동시킨다.
 */
const starter = (dateFormat) => {
  if (!dateFormat) {
    dateFormat = dateFormMaker();
  }

  container.style["display"] = "flex";
  newContainer.style["display"] = "none";
  setClearInterval();

  countMaker(dateFormat);
  const intervalId = setInterval(() => {
    countMaker(dateFormat);
  }, 1000);

  intervalIdArr.push(intervalId);
  console.log(intervalIdArr);
};

/**
 * 기존의 interval 들을 모두 삭제한다.
 */
const setClearInterval = () => {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  intervalIdArr = [];
};

/**
 * 타이머를 리셋시키고, localStorage에 저장된 date String을 삭제한다.
 */
const resetTimer = () => {
  container.style["display"] = "none";
  newContainer.style["display"] = "flex";
  newContainer.innerHTML = "<h3>D-Day를 입력해주세요.</h3>";
  localStorage.removeItem("savedDate");
  setClearInterval();
};

// localStorage 에 저장된 데이터가 있다면, 바로 타이머 시작
if (savedDate) {
  starter(savedDate);
} else {
  newContainer.innerHTML = "<h3>D-Day를 입력해주세요</h3>";
  container.style["display"] = "none";
}
