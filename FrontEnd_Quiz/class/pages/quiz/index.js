import { Wrapper, Question, Mg50, Answer } from "../../styles/styleQuz";
import { useState, useEffect } from "react";

const queJSON = [
  {
    question: "명령어 사이클의 기본 요소는 무엇인가요?",
    ans1: "페치",
    ans2: "디코드",
    ans3: "실행",
    ans4: "모두 포함",
    correct: 4, // '모두 포함'이 정답이므로 인덱스 4입니다.
  },
  {
    question: "인터럽트의 주된 효용성은 무엇인가요?",
    ans1: "프로세서의 속도 향상",
    ans2: "입출력 장치의 효율성 증가",
    ans3: "메모리 용량 증가",
    ans4: "데이터 저장 용이",
    correct: 2, // '입출력 장치의 효율성 증가'가 정답입니다.
  },
  {
    question: "컴퓨터 시스템 내의 상호연결 개념은 무엇을 의미하나요?",
    ans1: "데이터 전송",
    ans2: "프로세서 간의 통신",
    ans3: "장치 간의 연결",
    ans4: "모두 포함",
    correct: 4, // '모두 포함'이 정답입니다.
  },
  {
    question: "점대점 상호연결 방식의 특징은 무엇인가요?",
    ans1: "네트워크의 복잡성 증가",
    ans2: "장치 간 직접 연결",
    ans3: "모든 장치가 중앙 서버에 연결됨",
    ans4: "데이터 전송 속도 감소",
    correct: 2, // '장치 간 직접 연결'이 정답입니다.
  },
  {
    question: "명령어가 처리되는 과정에서 첫 번째 단계는 무엇인가요?",
    ans1: "페치",
    ans2: "디코드",
    ans3: "실행",
    ans4: "저장",
    correct: 1, // '페치'가 정답입니다.
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
