// let field = document.createElement("div");

// document.body.appendChild(field);
// field.classList.add("field");

// for (let i = 1; i < 65; i++) {
//     let excel = document.createElement("div");
//     field.appendChild(excel);
//     excel.classList.add("excel");
// }
// // Создаем наше поле

// let excel = document.querySelectorAll(".excel");
// let x = 1,
//     y = 8;

// for (let i = 0; i < excel.length; i++) {
//     excel[i].setAttribute("posX", x);
//     excel[i].setAttribute("posY", y);

//     x++;

//     if ((i + 1) % 8 == 0) {
//         x = 1;
//     }

//     if ((x % 2 == 0 && y % 2 == 0) || (x % 2 !== 0 && y % 2 !== 0)) {
//         excel[i].style.cssText = "background-color: rgb(255, 248, 220);";
//     } else {
//         excel[i].style.cssText = "background-color: brown;";
//     }

//     if (x == 1) {
//         y--;
//     }
// }
// // Указываем координаты каждой клетке с помощью аттрибутов и задаем цвета

// let a = Math.round(Math.random() * 63);
// excel[a].classList.add("current");
// // Первое появление коня

// excel[a].classList.add("set");
// // Метка, говорящая коню о том, что ходить на эту клетку еще раз - запрещено
// let step = 1;
// excel[a].innerHtml = step;
// // Наш ходы

// let currentX = excel[a].getAttribute("posX"),
//     currentY = excel[a].getAttribute("posY");
// console.log(currentX, currentY);
// // Получаем позицию появившегося коня

// function nextStep() {
//     let vars = [
//         document.querySelector(`[posX="${+currentX + 1}"][posY="${+currentY + 2}"]`),
//         document.querySelector(`[posX="${+currentX + 2}"][posY="${+currentY + 1}"]`),
//         document.querySelector(`[posX="${+currentX + 2}"][posY="${+currentY - 1}"]`),
//         document.querySelector(`[posX="${+currentX + 1}"][posY="${+currentY - 2}"]`),
//         document.querySelector(`[posX="${+currentX - 1}"][posY="${+currentY - 2}"]`),
//         document.querySelector(`[posX="${+currentX - 2}"][posY="${+currentY - 1}"]`),
//         document.querySelector(`[posX="${+currentX - 2}"][posY="${+currentY + 1}"]`),
//         document.querySelector(`[posX="${+currentX - 1}"][posY="${+currentY + 2}"]`)
//     ];
//     for (let i = vars.length - 1; i >= 0; i--) {
//         if (vars[i] == null || vars[i].classList.contains("set")) {
//             vars.splice(i, 1);
//         }
//     }
//     console.log(vars);

//     let nextArr = [];

//     function whatToDoNext() {
//         for (let i = 0; i < vars.length; i++) {
//             let nextX = vars[i].getAttribute("posX");
//             let nextY = vars[i].getAttribute("posY");
//             let nextVars = [
//                 document.querySelector(`[posX="${+nextX + 1}"][posY="${+nextY + 2}"]`),
//                 document.querySelector(`[posX="${+nextX + 2}"][posY="${+nextY + 1}"]`),
//                 document.querySelector(`[posX="${+nextX + 2}"][posY="${+nextY - 1}"]`),
//                 document.querySelector(`[posX="${+nextX + 1}"][posY="${+nextY - 2}"]`),
//                 document.querySelector(`[posX="${+nextX - 1}"][posY="${+nextY - 2}"]`),
//                 document.querySelector(`[posX="${+nextX - 2}"][posY="${+nextY - 1}"]`),
//                 document.querySelector(`[posX="${+nextX - 2}"][posY="${+nextY + 1}"]`),
//                 document.querySelector(`[posX="${+nextX - 1}"][posY="${+nextY + 2}"]`)
//             ];

//             for (let i = nextVars.length - 1; i >= 0; i--) {
//                 if (nextVars[i] == null || nextVars[i].classList.contains("set")) {
//                     nextVars.splice(i, 1);
//                 }
//             }

//             nextArr.push(nextVars.length);
//         }
//         return nextArr;
//     }
//     console.log(whatToDoNext());

//     nextArr = whatToDoNext();

//     let k = nextArr.length;
//     let min = nextArr[0];
//     var index = 0;
//     while (k--) {
//         if (nextArr[k] < min) {
//             min = nextArr[k];
//         }
//     }

// }
// nextStep();

