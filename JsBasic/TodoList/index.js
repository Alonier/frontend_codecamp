const todoInput = document.getElementById("todo__input");
const todoList = document.getElementById("todo__list");

const createTodo = (storageData) => {
  const todoLi = document.createElement("li");
  const todoLiSpan = document.createElement("span");
  const todoButton = document.createElement("button");

  //삭제 처리시 편의를 위한 class
  todoLi.classList.add("todo__list__li");

  // todoButton 클릭 시 취소선
  todoButton.addEventListener("click", () => {
    todoLi.classList.toggle("complete");
    saveItemsFn();
  });

  // todoButton 더블 클릭시 삭제
  todoButton.addEventListener("dblclick", (element) => {
    todoLi.remove();
    saveItemsFn();
  });

  todoButton.class = "todo__button";

  // input 영역 내 contents 로드
  let todoContents = todoInput.value;

  // storageData 가 존재한다면, 해당 data로 todoList 초기화
  if (storageData) {
    todoContents = storageData.contents;
    if (storageData.complete) {
      todoLi.classList.add("complete");
    }
  }
  todoLiSpan.innerText = todoContents;

  todoLi.appendChild(todoButton);
  todoLi.appendChild(todoLiSpan);
  todoList.appendChild(todoLi);

  todoInput.value = "";

  saveItemsFn();
};

/**
 * todo__list__li 클래스가 붙은 모든 li 삭제
 * localStorage 해당 데이터 삭제
 */
const deleteAll = () => {
  const liList = document.querySelectorAll(".todo__list__li");
  for (element of liList) {
    element.remove();
  }
  saveItemsFn();
};

/**
 * saveItems : todoObj 집합
 * todoObj: contents, isComplete 집합
 */
const saveItemsFn = () => {
  const saveItems = [];
  for (element of todoList.children) {
    const todoObj = {
      contents: element.querySelector("span").textContent,
      complete: element.classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }
  // console.log(saveItems);

  //saveItems 가 빈 배열인 경우, localStorage에 해당 데이터 삭제
  saveItems.length === 0
    ? localStorage.removeItem("saveItems")
    : localStorage.setItem("saveItems", JSON.stringify(saveItems));
};

let isComposing = false;

todoInput.addEventListener("compositionstart", () => {
  isComposing = true;
});

todoInput.addEventListener("compositionend", () => {
  isComposing = false;
});

/**
 * key Enter시에 createTodo() 메서드 실행하는 Eventlister
 */
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && isComposing === false) {
    createTodo();
  }
});

/**
 * 페이지 입장 시, localStorage 에 데이터가 존재한다면, 해당 데이터를 토대로
 * createTodo 함수 실행
 */
if (localStorage.getItem("saveItems")) {
  const savedItems = JSON.parse(localStorage.getItem("saveItems"));
  for (item of savedItems) {
    // console.log(item);
    createTodo(item);
  }
}
