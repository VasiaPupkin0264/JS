/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 1 Создать массив arr = [] и записать в него 7 любых многозначных 
// чисел в виде строк. Вывести в консоль только те, что начинаются с 
// цифры 3 или 7 (Должны присутствовать в массиве)

/* let arr = [243, 11, 35, 0, 3000, 776, 910];

let sortFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString()[0] == "3" || arr[i].toString()[0] == "7") {
            console.log(arr[i]);
        }
    }
};
sortFunc(arr); */
// 2 У вас есть str = “урок-3-был слишком легким”. Сделать так, чтобы строка 
// начиналась с большой буквы. Замените все “-” на пробелы. Вывести в консоль 
// то, что получилось. Из получившейся строки вырезать слово “легким”, в этом
//  же слове заменить 2 последние буквы на букву “о”. Вывести на экран то, что
// получилось

/*let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.slice(1);
str = str.replace(/-/g, " ");
str = str.slice(19);
str = str.replace("им", "о");
console.log(str);*/
// 3 У вас есть массив arr = [20, 33, 1, “Человек”, 2, 3]. Вывести в консоль 
// квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)

/*let arr = [20, 33, "1", "Человек", 2, 3];

let account = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        if (typeof(+arr[i]) == "number" && isNaN(arr[i]) !== true) {
            arr[i] = arr[i]**3;
        } else {
            arr.splice(i, 1);
            i--;
        }
    }
    // console.log(arr);
    
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    console.log(Math.sqrt(result));
};
account(arr);*/
// 4 Создайте функцию, которая принимает 1 аргумент (название произвольное)
// Если как аргумент передана не строка - функция оповещает об этом пользователя
// В полученной (как аргумент) строке функция должна убрать все пробелы в 
// начале и в конце. Если строка более 50 знаков - то после 50го символа часть 
// текста скрывается и вместо них появляются три точки (...)

/*let x = "  1234512345123451234512345123451234512345123451234512345  ";

let clearFucn = (x) => {

    if (typeof (x) == "string") {

        x = x.split("");

        x.reverse();

        let revFunc = () => {
            for (let i = 0; i < x.length; i++) {
                if (x[i] == " ") {
                    x.splice(i, 1);
                    i--;
                } else {
                    i = x.length - 1;
                }
            }
        };

        revFunc(x);
        x.reverse();
        revFunc(x);

        if (x[50] !== undefined) {
            
            x = x.slice(0, 50); 
            x.push(".", ".", ".");
        }
        x = x.join("");
        console.log(x);
    } else {
        console.log("Аргумент передан не как строка");
    }
};
clearFucn(x);*/
var x = new Array(1);
x.push(5);
console.log(x);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map