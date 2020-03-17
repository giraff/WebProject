# WebProject
Momentum 클론코딩
- clock.js : 실시간 시간 업데이트
- greeting.js : USER 이름이 LS에 없으면 물어보고, 있으면 사용자 이름+인삿말을 띄움 (*LS: Local Storage)
- todo.js : ToDoList 생성
- bg.js : 새로고침할 때 마다 배경이미지를 랜덤하게
- weather : openWeatherMap API를 이용. 현재 위치(위도,경도)를 입력하여 날씨 정보를 가져옴.

새로 알게된 사실
- js는 html을 태그를 모두 객체화 하여 html 태그에 이벤트를 조정하는 역할을 한다.
- VanilaJS가 JS의 가장 기본적인 형태.
- setInterval( [실행 함수, 그 함수를 실행할 시간 간격(milsecond 기준)] ) 
   : setInterval() 사용 전 setInterval을 적용할 [실행 함수]를 정의.
- .createElement("[HTML 태그명]"); 입력된 타입을 가진 HTML의 태그 객체를 생성.
- (부모 노드).appendChild(노드) : Web API 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙임.
- getSecond()의 특징 : 58, 59, 00, 01, .. 이 아니라 58, 59, 0, 1.. 로 나타나서 매끄러운 시간 표현을 하기 어려움. 조정 필요
- Local Storage : 작은 정보 따위를 유저 컴퓨터에 저장한다. 모든 값은 string(문자열) 형태

참고한 사이트
- flatuicolors : ( https://flatuicolors.com/ ) css에 적용할 색상 코드 제공
- Momentum : ( https://momentumdash.com/ ) 클론 대상
- UnPlash : ( https://unsplash.com/ ) 저작권 무료 이미지 사이트
- openWeatherMap : ( https://openweathermap.org/ ) 실시간 날씨 정보 API 제공
- MDN web docs : (https://developer.mozilla.org/ko/docs/Web ), 중에서 특히 '개발자를 위한 웹 기술 > Web API > event reference'
