//런치리스트 배열생성
let lunchList = ["냉면", "분식", "국밥", "국수", "중식", "핫도그", "초밥", "부대찌개", "돈까스", "토스트", "패스트푸드", "편의점", "컵밥", "백반"]
// let lunchList = ["떡볶이", "우동", "햄버거", "냉면", "마라탕"]


//배열복사
let firstLunchList = [];

lunchList.forEach(function (item) {
    firstLunchList.push(item);
});

console.log(lunchList)

// let distanceList = ["10m", "8m", "7m", "7m", "9m"];
// let costList = ["7000won", "5000won", "4500won", "8000won", "9000won"];


//제어할 요소선택 후 변수에 담기
let displaySlot = document.querySelector(".menu_slot"); //menu slot
let elem = document.querySelector(".menu_print > h2"); //menu print
let inputValue = document.querySelector("#search");

// let distanceTxt = document.querySelector(".main_text> p > span"); //distance
// let costTxt = document.querySelector("em"); //cost


//reset check
let resetNum = 1;


//LunchIs 함수선언
function lunchIs() {
    //setTimeout 선언
    setTimeout(timeFunc, 900);

    function timeFunc() {
        //shuffle 메소드 선언
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        //슬롯애니메이션 감추기
        displaySlot.style.display = "none";

        //shuffle 메소드를 사용하여 석은 배열에서 index[0]을 가져오기
        console.log(shuffle(lunchList));
        let lunckPick = shuffle(lunchList)[0];

        //메뉴 노출
        console.log(lunckPick);
        elem.innerHTML = lunckPick;



        inputValue.value = lunckPick;
        //선택된 메뉴의 indexOf를 이용하여 distanceTxt, costTxt 노출


        // let i = firstLunchList.indexOf(lunckPick);
        // distanceTxt.innerHTML = distanceList[i];
        // costTxt.innerHTML = costList[i];

        //reset 되었을 경우에 숨겨진 메뉴를 다시 노출시킴
        if (resetNum == 0) {
            elem.style.display = "block";
        }
    }
}







// reset 함수선언
function reset() {
    //메뉴 숨기기
    elem.style.display = "none";

    //슬롯애니메이션 노출
    displaySlot.style.display = "block";

    // //distance, cost 초기화
    // distanceTxt.innerHTML = "??m";
    // costTxt.innerHTML = "?000won";

    //resetNum으로 reset여부를 구분하기 위해 0 할당
    resetNum = 0;

    inputValue.value="";
}


let randomStop = document.querySelector('.menu_slot');
let menuPrint = document.querySelector('.menu_print');
randomStop.addEventListener('click', lunchIs);
menuPrint.addEventListener('click', reset);


// 랜덤결과 Searchbar에 자동입력
// let search = document.querySelector('#search');
// let result = document.getElementsByClassName('.menu_print').innerText;
// search.innerText = result;
