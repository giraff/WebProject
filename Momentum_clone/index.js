const title = document.querySelector("#title");
// querySelector : 셀렉터에 매치된 노드의 자식인 첫 요소를 반환.
//document를 다 뒤져서 #title인걸 찾아보겠다.

// console.dir(title) //title이 할 수 있는 모든걸 보여준다.
//자바스크립트로 모든 HTML을 조종할 수 있다.

// console.log(title) => title이 나타내는 html 요소만을 알려줌

// 자바스크립트는 html에 있는 모든 요소를 가지고 와 그걸 객체로 바꿀 것이다.
// 모든 html은 객체가 될 운명에 있다. (JS에 의해 html은 객체가 된다.)
// 그리고 객체는 많은 키를 가지고 있다는 것을 알자
// console이란 객체엔 error, log, 와 같은 많은 키가 있듯이.

title.innerHTML = "Hi ! From JS";