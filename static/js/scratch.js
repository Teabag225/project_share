// 유저 숫자
let cnt = 2;

// 켄버스 긁기 전 이미지
var scratch = document.querySelectorAll("canvas")[0],
    brushRadius = (scratch.width / 100) * 1,
    img = new Image();
var scratchCanvas = scratch.getContext('2d')

//이미지 다시 채우기 
let reset = function () {
    document.querySelectorAll("canvas")[0].getContext('2d').reset();
    document.querySelectorAll("canvas")[1].getContext('2d').reset();
    document.querySelectorAll("canvas")[2].getContext('2d').reset();
    document.querySelectorAll("canvas")[3].getContext('2d').reset();
    document.querySelectorAll("canvas")[4].getContext('2d').reset();
    document.querySelectorAll("canvas")[5].getContext('2d').reset();
}
//이미지 지우기
let del = function () {
    document.querySelectorAll("canvas")[0].getContext('2d').clearRect(0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[1].getContext('2d').clearRect(0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[2].getContext('2d').clearRect(0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[3].getContext('2d').clearRect(0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[4].getContext('2d').clearRect(0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[5].getContext('2d').clearRect(0, 0, scratch.width, scratch.height);
}

// 캔버스에 ? 이미지 덮어 씌우기
img.onload = function () {
    document.querySelectorAll("canvas")[0].getContext('2d').drawImage(img, 0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[1].getContext('2d').drawImage(img, 0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[2].getContext('2d').drawImage(img, 0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[3].getContext('2d').drawImage(img, 0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[4].getContext('2d').drawImage(img, 0, 0, scratch.width, scratch.height);
    document.querySelectorAll("canvas")[5].getContext('2d').drawImage(img, 0, 0, scratch.width, scratch.height);
}
img.src = 'static/image/question-marks.jpeg';

// 각각의 Canvas 요소들에 접근을 위해, 배열 형태로 선언하고
// 해당 배열에 접근하여 캔버스를 처리
var allScratch = document.querySelectorAll("canvas");
var scratchArr = [];
var scratchCanvasArr = [];
var scratchRectArr = [];


// 시작하면 캔버스를 배열에 담아주기
for (let i = 0; i < 6; i++) {
    scratchArr.push(document.querySelectorAll("canvas")[i]);
    scratchCanvasArr.push(document.querySelectorAll("canvas")[i].getContext('2d'));
    scratchRectArr.push(scratchArr[i].getBoundingClientRect());

    var scratch2 = document.querySelectorAll("canvas")[i];

    // 마우스움직임
    scratch2.addEventListener("mousemove", function (e) {
        // tetz 
        // 기존 함수와 달리 몇번 째 배열에 있는 캔버스인지를 알아야 하므로
        // 인덱스 값 전달
        var brushPos = getBrushPos(i, e.clientX, e.clientY);
        var leftBut = detectLeftButton(e);
        if (leftBut == 1) {
            drawDot(i, brushPos.x, brushPos.y);
        }
    }, false);

    // 마우스 클릭 후 움직임
    scratch2.addEventListener("touchmove", function (e) {
        e.preventDefault();
        var touch = e.targetTouches[0];
        if (touch) {
            var brushPos = getBrushPos(touch.pageX, touch.pageY);
            drawDot(brushPos.x, brushPos.y);
        }
    }, false);
    // 마우스
    if (brushRadius < 40) { brushRadius = 40 }

    function detectLeftButton(event) {
        if ('buttons' in event) {
            return event.buttons === 1;
        } else if ('which' in event) {
            return event.which === 1;
        } else {
            return event.button === 1;
        }
    }
    //마우스사이즈
    function getBrushPos(i, xRef, yRef) {
        var scratchRect = scratchArr[i].getBoundingClientRect();
        return {
            x: Math.floor((xRef - scratchRect.left) / (scratchRect.right - scratchRect.left) * scratch.width),
            y: Math.floor((yRef - scratchRect.top) / (scratchRect.bottom - scratchRect.top) * scratch.height)
        };
    }
    //지우개
    function drawDot(i, mouseX, mouseY) {
        // console.log(mouseX, mouseY);
        scratchCanvasArr[i].beginPath();
        scratchCanvasArr[i].arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
        scratchCanvasArr[i].fillStyle = '#000';
        scratchCanvasArr[i].globalCompositeOperation = "destination-out";
        scratchCanvasArr[i].fill();
    }
}

function run() {
    //커버 다시 덮기
    reset();
    img.onload();

    // 복권 숫자
    let numArray = [0, 1, 2, 3, 4, 5]
    numArray = numArray.slice(0, cnt)

    winner = numArray.sort(() => 0.5 - Math.random())[0] // 당첨자 섞기

    //당첨자 지우기 
    for (i = 0; 6 > i; i++) {
        document.querySelectorAll('canvas')[i].classList.remove('canvasWin')
    }
    //당첨자 재선정
    document.querySelectorAll('canvas')[winner].classList.add('canvasWin')

}

//이미지 지우기
function result() {
    del();
}


// 복권 변수 선언
let user3class = document.querySelectorAll(".noshow")[0]
let user4class = document.querySelectorAll(".noshow")[1]
let user5class = document.querySelectorAll(".noshow")[2]
let user6class = document.querySelectorAll(".noshow")[3]

// //유저 추가하기 
function add() {
    if (user3class.classList.contains('show') == false) {
        user3class.classList.add('show') //유저 추가
        cnt++ //유저 숫자 카운트 
        run();
    } else if (user4class.classList.contains('show') == false) {
        user4class.classList.add('show') //유저 추가
        cnt++
        run();
    } else if (user5class.classList.contains('show') == false) {
        user5class.classList.add('show') //유저 추가
        cnt++
        run();
    } else if (user6class.classList.contains('show') == false) {
        user6class.classList.add('show') //유저 추가
        cnt++
        run();
    } else {
        alert("최대 6인입니다.")
        run();
    }
}

// //유저 제거하기
function remove() {
    if (user6class.classList.contains('show') == true) {
        user6class.classList.remove('show') // 유저 제거
        cnt-- //유저 숫자 카운트
        run();

    } else if (user5class.classList.contains('show') == true) {
        user5class.classList.remove('show')
        cnt--
        run();
    } else if (user4class.classList.contains('show') == true) {
        user4class.classList.remove('show')
        cnt--
        run();
    } else if (user3class.classList.contains('show') == true) {
        user3class.classList.remove('show')
        cnt--
        run();
    } else {
        alert("최소 2인입니다.")
        run();
    }
}