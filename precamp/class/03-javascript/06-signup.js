const checkValidation = function () {
  let email = document.getElementById("email").value;
  let pw = document.getElementById("pw").value;
  let pw2 = document.getElementById("pw2").value;

  if (email !== "" && pw != "" && pw2 != "") {
    //모든 input 이 비어있지 않을 때
    document.getElementById("submit").disabled = false;
  } else {
    //하나라도 비어있을 때
    document.getElementById("submit").disabled = true;
  }
};
