let isAuth = false;
let isPhone = false;
let isMail = false;
let isName = false;
let isPW = false;
let isGender = false;
let isRegion = false;

let timer;

const checkValidation = () => {
  if (
    document.getElementById("email").value.includes("@") &&
    document.getElementById("email").value
  ) {
    isMail = true;
  } else {
    isMail = false;
  }

  if (document.getElementById("name").value) {
    isName = true;
  } else {
    isName = false;
  }

  if (
    document.getElementById("pw").value &&
    document.getElementById("pw").value === document.getElementById("pw2").value
  ) {
    isPW = true;
  }

  if (isMail && isName && isPW && isAuth && isPhone) {
    document.getElementById("register").disabled = false;
  }

  console.log(
    "isMail " +
      isMail +
      " isname " +
      isName +
      " ispw " +
      isPW +
      " isaht " +
      isAuth +
      " isphone " +
      isPhone
  );
};

const changePhone1 = () => {
  if (document.getElementById("p1").value.length === 3) {
    document.getElementById("p2").focus();
  }
};

const changePhone2 = () => {
  if (document.getElementById("p2").value.length === 4) {
    document.getElementById("p3").focus();
  }
};

const changePhone3 = () => {
  if (
    document.getElementById("p1").value.length === 3 &&
    document.getElementById("p2").value.length === 4 &&
    document.getElementById("p3").value.length === 4
  ) {
    isPhone = true;
    document.getElementById("sendAuth").disabled = false;
  } else {
    isPhone = false;
  }
};

let sendAuth = () => {
  document.getElementById("authnum").innerText = String(
    Math.floor(1000000 * Math.random())
  ).padStart(6, "0");

  document.getElementById("receiveAuth").disabled = false;
  let time = 180;

  timer = setInterval(() => {
    if (time >= 0) {
      time--;
      document.getElementById("timer").innerText = `${Math.floor(time / 60)}:${
        time % 60
      }`;
    } else {
      document.getElementById("receiveAuth").disabled = true;
      clearInterval(timer);
    }
  }, 1000);
};

const receiveAuth = () => {
  clearInterval(timer);
  isAuth = true;
};

const register = () => {
  alert("코드캠프 가입을 축하합니다.");
};
