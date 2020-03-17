const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CLASS = "showing";

// function askForName(){
//     form.classList.add(SHOWING_CLASS);
//     input.addEventListener("change", (event) => {
//         event.preventDefault();
//         localStorage.setItem(USER_LS, event.target.value);
//     })
// }
function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CLASS);
    greeting.classList.remove(SHOWING_CLASS);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CLASS);
    greeting.classList.add(SHOWING_CLASS);
    greeting.innerHTML= `Good evening, ${text}.`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === ""){
        askForName();
    }else{//이름에 색칠
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();