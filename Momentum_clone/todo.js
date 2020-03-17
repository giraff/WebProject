const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //해야할 일 생성할 때마다 이 toDos Array에 추가할 것.

function deleteToDo (event){//btn의 부모는 li, li는 id값을 가진다.
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){ 
        // 현재 delete하기로 선택된 li를 제외한 나머지로 구성된 새로운 배열
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos(toDos);
}
function saveToDos(todos){// LS에 저장
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}
function paintToDo(text){ // LS에 있는 걸 띄우거나 입력한 텍스트를 toDoList에 추가한다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);//delBtn is inside li
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj); // toDos Arrray안에 객체 toDoObj를 넣는 것.
    saveToDos(toDos);
}
function handleSubmit(event){ // form에서 입력하고 엔터를 누른 경우 발생
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue)
    toDoInput.value = "";
}
function loadToDos(){// LS에 toDos가 있으면 화면에 띄운다. (없으면 아무일도 X)
    const loadedToDos = localStorage.getItem(TODOS_LS); //String
    if(loadedToDos !== ""){  
        const parsedToDos = JSON.parse(loadedToDos);
        //데이터를 전달 할 때 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔준다.
        //string => object
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}
function init(){
    loadToDos();
    //create toDo
    toDoForm.addEventListener("submit", handleSubmit);
}

init();