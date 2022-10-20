// 총합
let tot = 0;

// pay = 총합 / 인원수
let pay = 1;

//인원수
const peopleInput = document.querySelector('input[id="people"]');

function userNameInput(e) {
  //새로고침 방지
  e.preventDefault();

  //변수선언
  let menu = document.getElementById("menu").value;
  let price = Number(document.getElementById("price").value);

  // 가격 더하기

  tot = price + Number(tot);

  const result = document.getElementById("result");
  const newList = document.createElement("li");
  const ul = document.querySelector(".lists");

  const minusBtn = document.createElement("button");
  const BtnText = document.createTextNode("-");

  newList.textContent = menu + "  " + price;

  //뺴기버튼 -> 리스트에서 삭제
  minusBtn.addEventListener("click", function () {
    newList.parentNode.removeChild(newList);
    minusBtn.parentNode.removeChild(minusBtn);
    tot = tot - price;
    document.querySelector("#total").innerHTML = "= " + tot + "원";
    // pay = 총합 / 인원수 (+버튼 누르면 계산)
    pay = tot / peopleInput.value;
    document.querySelector("#payment").innerHTML = pay + "원";
  });

  minusBtn.style.color = "red";
  minusBtn.style.fontSize = "20px";
  minusBtn.style.paddingLeft = "5px";

  minusBtn.appendChild(BtnText);
  newList.append(minusBtn);
  ul.append(newList);

  document.getElementById("menu").value = " ";
  document.getElementById("price").value = " ";
  // Total 기능
  document.querySelector("#total").innerHTML = "= " + tot + "원";

  // pay = 총합 / 인원수 (+버튼 누르면 계산)
  pay = tot / peopleInput.value;
  document.querySelector("#payment").innerHTML = pay + "원";
}

//총 인원수 실시간 변경 감지 및 계산
function autopay() {
  // pay = 총합 / 인원수 (변경시 자동 계산)
  let pay = tot / peopleInput.value;
  document.querySelector("#payment").innerHTML = pay + "원";
}

submitButton.addEventListener("click", userNameInput, false);
