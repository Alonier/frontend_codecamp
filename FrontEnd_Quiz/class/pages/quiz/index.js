import { Wrapper, Question, Mg50, Answer } from "../../styles/styleQuz";
import { useState, useEffect } from "react";

const queJSON = [
  {
    question: "문제 1입니다.",
    ans1: "답변 1입니다. 답변 1입니다.답변 1입니다.답변 1입니다.답변 1입니다. 답변 1입니다.답변 1입니다.",
    ans2: "답변 2입니다.",
    ans3: "답변 3입니다.",
    ans4: "답변 4입니다.",
    correct: 2,
  },
  {
    question: "문제 2입니다.",
    ans1: "답변 1입니다.",
    ans2: "답변 2입니다.",
    ans3: "답변 3입니다.",
    ans4: "답변 4입니다.",
    correct: 3,
  },
];

export default function QuizPage() {
  //JS Section
  const [question, setQuestion] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [cnt, setCnt] = useState(0);

  //cnt 값과 배열 사용, 문제와 정답 초기화 함수
  const setQuiz = () => {
    const quesArr = queJSON.at(cnt);

    setQuestion(quesArr.question);
    setAns1(quesArr.ans1);
    setAns2(quesArr.ans2);
    setAns3(quesArr.ans3);
    setAns4(quesArr.ans4);

    setCnt(++cnt);
  };

  const onClickAns = (event, selectedAns) => {
    // cnt는 이미 다음 문제를 가리키므로 -1로 현재 문제를 참조
    const currentQuestion = queJSON.at(cnt - 1);
    if (currentQuestion.correct === selectedAns) {
      setStyle(event);
      alert("정답입니다! 다음 문제로 이동합니다.");
      setQuiz();
    } else {
      event.target.style["background-color"] = "#ff0000cc";
    }
  };

  const setStyle = (event) => {
    const ansParent = event.target.parentElement;
    Array.from(ansParent.children).forEach((child) => {
      if (child.tagName === "DIV") {
        // Answer 컴포넌트가 <div> 태그라고 가정
        child.style["background-color"] = "transparent";
      }
    });
  };

  //컴포넌트가 처음 렌더링 될 때 setQuiz 실행
  useEffect(() => {
    setQuiz();
  }, []);

  //HTML Section
  return (
    <Wrapper>
      <Question>Q. {question}</Question>
      <Mg50></Mg50>
      <Answer
        onClick={(e) => {
          onClickAns(e, 1);
        }}
      >
        1. {ans1}
      </Answer>
      <Answer
        onClick={(e) => {
          onClickAns(e, 2);
        }}
      >
        2. {ans2}
      </Answer>
      <Answer
        onClick={(e) => {
          onClickAns(e, 3);
        }}
      >
        3. {ans3}
      </Answer>
      <Answer
        onClick={(e) => {
          onClickAns(e, 4);
        }}
      >
        4. {ans4}
      </Answer>
    </Wrapper>
  );
}
