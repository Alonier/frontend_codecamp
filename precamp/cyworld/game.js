const word_game = () => {
  const first = document.getElementById("word");
  const second = document.getElementById("myWord");
  const result = document.getElementById("result");

  if (first.innerText[first.innerText.length - 1] == second.value[0]) {
    result.innerText = "정답입니다!";
    first.innerText = second.value;
    second.value = "";
  } else {
    result.innerText = "땡!";
  }
};
