// 주사위 변수 선언
let user3class = document.querySelectorAll(".noshow")[0];
let user4class = document.querySelectorAll(".noshow")[1];
let user5class = document.querySelectorAll(".noshow")[2];
let user6class = document.querySelectorAll(".noshow")[3];

// 유저 숫자
let cnt = 2;

//유저 추가하기
function add() {
  if (user3class.classList.contains("show") == false) {
    user3class.classList.add("show"); //유저 추가
    cnt++; //유저 숫자 카운트
  } else if (user4class.classList.contains("show") == false) {
    document.querySelector("#user4").classList.add("show");
    cnt++;
  } else if (user5class.classList.contains("show") == false) {
    document.querySelector("#user5").classList.add("show");
    cnt++;
  } else if (user6class.classList.contains("show") == false) {
    document.querySelector("#user6").classList.add("show");
    cnt++;
  } else {
    alert("최대 6인입니다.");
  }
}

//유저 제거하기
function remove() {
  if (user6class.classList.contains("show") == true) {
    user6class.classList.remove("show"); // 유저 제거
    cnt--; //유저 숫자 카운트
  } else if (user5class.classList.contains("show") == true) {
    document.querySelector("#user5").classList.remove("show");
    cnt--;
  } else if (user4class.classList.contains("show") == true) {
    document.querySelector("#user4").classList.remove("show");
    cnt--;
  } else if (user3class.classList.contains("show") == true) {
    document.querySelector("#user3").classList.remove("show");
    cnt--;
  } else {
    alert("최소 2인입니다.");
  }
}

// 던지기
function run() {
  const numArray = [1, 2, 3, 4, 5, 6]; // 주사위 숫자
  numArray.sort(() => 0.5 - Math.random()); // 주사위 섞기

  let min = 7; // 최소값
  let loser = 0; // 최소값 유저

  for (i = 0; cnt > i; i++) {
    // 유저숫자만큼 반복
    //주사위 숫자만큼 이미지 가져오기
    let dice = "./static/image/dice" + numArray[i] + ".png";
    document.querySelectorAll("img")[i].setAttribute("src", dice);
    if (numArray[i] < min) {
      loser = i + 1;
      min = numArray[i]; // 최소값 추가하기
    } else {
    }
  }
  // LOSER text 노출

  document.querySelector(
    ".result"
  ).innerHTML = `🥳 USER ${loser} 님 축하합니다! 밥사주세요!!!🥳`;
}
