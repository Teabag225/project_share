//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var t_dropdown = document.getElementsByClassName("toggle-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  t_dropdown[i].addEventListener("click", function () {
    this.classList.toggle("t_active");
    var t_dropdownContent = this.nextElementSibling;
    if (t_dropdownContent.style.display === "block") {
      t_dropdownContent.style.display = "none";
    } else {
      t_dropdownContent.style.display = "block";
    }
  });
}

// Modal 창 구현
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".popup");
const btnModal2 = document.querySelector(".popup2");
btnModal.addEventListener("click", (e) => {
  modal.style.display = "flex";
  document.body.classList.add("stop-scroll");
});

btnModal2.addEventListener("click", (e) => {
  modal.style.display = "flex";
  document.body.classList.add("stop-scroll");
});

// X 부분 클릭하면 창 닫기
const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
  // document.querySelector("#total").innerText = " ";
  // document.querySelector("#payment").innerText = " ";
  // document.querySelector("ul").remove();
  // document.querySelector(".lists").innerHTML = " ";
  tot = 0;
  pay = 0;

  $("#total").empty();
  $("#payment").empty();
  $(".lists").empty();
  document.body.classList.remove("stop-scroll");
});

// Modal 창 외의 부분 클릭 했을 떄 창 닫기
modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modal.style.display = "none";
    tot = 0;
    pay = 0;
    $("#total").empty();
    $("#payment").empty();
    $(".lists").empty();
    document.body.classList.remove("stop-scroll");
  }
});

//토클 메뉴

const iconMenu = document.querySelector(".icon");
const toggleMenu = document.querySelector(".toggle-menu");

iconMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("d-none");
});
