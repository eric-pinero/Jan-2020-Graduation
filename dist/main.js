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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2020-01-09.js":
/*!***************************!*\
  !*** ./src/2020-01-09.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 4536,\n    \"name\": \"Adam Moftah\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/536/medium/Adam_Moftah.jpg?1581628526\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4601,\n    \"name\": \"Aimy Yu\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/601/medium/Aimy_Yu.jpg?1581628591\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4543,\n    \"name\": \"Amanda Huang\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/543/medium/Amanda_Huang.jpg?1581628635\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4618,\n    \"name\": \"Andrew Yoo\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/618/medium/Andrew_Yoo.jpg?1581628741\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4621,\n    \"name\": \"Ben Hsieh\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/621/medium/Ben_Hsieh.png?1581628911\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4629,\n    \"name\": \"Brian Nguyen\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/629/medium/Brian_Nguyen.jpg?1581629001\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4617,\n    \"name\": \"Chanu Choi\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/617/medium/Chanu_Choi.jpg?1581629313\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4602,\n    \"name\": \"Christian Perea\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/602/medium/Christian_Perea.jpg?1581629447\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4544,\n    \"name\": \"Connor Brabant\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/544/medium/Connor_Brabant.jpg?1581629583\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4630,\n    \"name\": \"Daniel (Dan) Lee\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/630/medium/Dan_Lee.jpg?1581629703\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4607,\n    \"name\": \"David Hong\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/607/medium/David_Hong.jpg?1581629740\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4598,\n    \"name\": \"Dylan Wong\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/598/medium/Dylan_Wong.jpg?1581630066\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4624,\n    \"name\": \"Eduardo (Eddy) Flores\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/624/medium/Eddy_Flores.jpg?1581630110\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4554,\n    \"name\": \"Edward Trinidad\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/554/medium/Edward_Trinidad.jpg?1581630730\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4628,\n    \"name\": \"Elijah Nam\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/628/medium/Elijah_Nam.jpg?1581630906\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4560,\n    \"name\": \"Ezra Schrage\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/560/medium/Ezra_Schrage.jpg?1581630981\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4556,\n    \"name\": \"Haejun Chung\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/556/medium/Haejun_Chung.jpg?1581631020\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4534,\n    \"name\": \"Huijia (Emily) Wu\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/534/medium/Emily_Wu.jpg?1581631059\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4538,\n    \"name\": \"Isaac Nam\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/538/medium/Isaac_Nam.jpg?1581631099\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4609,\n    \"name\": \"Isak Leon\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/609/medium/Isak_Leon.jpg?1581631133\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4599,\n    \"name\": \"Ivan Wang\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/599/medium/Ivan_Wang.jpg?1581631180\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4615,\n    \"name\": \"Jae Hyun (Jae) Song\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/615/medium/Jae_Song.jpg?1581631214\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4551,\n    \"name\": \"Jared Kaneshiro\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/551/medium/Jared_Kaneshiro.jpg?1581631261\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4558,\n    \"name\": \"Jared Meier\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/558/medium/Jared_Meier.jpg?1581631300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4603,\n    \"name\": \"Jonathan (Jo) Chen\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/603/medium/Jo_Chen.jpg?1581631351\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4606,\n    \"name\": \"Joshua Park\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/606/medium/Joshua_Park.png?1581631442\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4550,\n    \"name\": \"Jun Hyeok (Jun (Scott)) Lee\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/550/medium/Jun_Hyeok_Lee.jpg?1581631584\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4553,\n    \"name\": \"Kara Liu\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/553/medium/Kara_Liu.jpg?1581631638\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4613,\n    \"name\": \"Karl Fleener\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/613/medium/Karl_Fleener.jpg?1581631745\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4546,\n    \"name\": \"Ken Ting\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/546/medium/Ken_Ting.jpg?1581631843\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4616,\n    \"name\": \"Lianne Bisch\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/616/medium/Lianne_Bisch.jpg?1581631910\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4632,\n    \"name\": \"Marwa Elnashar\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/632/medium/Marwa_Elnashar.jpg?1581632050\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4604,\n    \"name\": \"Mengyuan (Christina) Hu-Lee\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/604/medium/Christina_Hu-Lee.jpg?1581632131\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4631,\n    \"name\": \"Michael Norton\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/631/medium/Michael_Norton.jpg?1581632172\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4611,\n    \"name\": \"Michael Yuen\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/611/medium/Michael_Yuen.jpg?1581632212\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4614,\n    \"name\": \"Nancy Ma\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/614/medium/Nancy_Ma.jpg?1581632291\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4597,\n    \"name\": \"Nazia Islam\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/597/medium/Nazia_Islam.jpg?1581632342\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4620,\n    \"name\": \"Nicole Samanich\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/620/medium/Nicole_Samanich.jpg?1581632377\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4548,\n    \"name\": \"Nir Krawczyk\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/548/medium/Nir_Krawczyk.jpg?1581632475\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4596,\n    \"name\": \"Richard Schaubeck\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/596/medium/Richard_Schaubeck.jpg?1581632513\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4547,\n    \"name\": \"Rory Evenson-Phair\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/547/medium/Rory_Evenson-Phair.jpg?1581632547\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4559,\n    \"name\": \"Samuel (Sammy) Gieseker\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/559/medium/Samuel_Gieseker.jpg?1581632584\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4539,\n    \"name\": \"Sarjil Miah\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/539/medium/Sarjil_Miah.jpg?1581632619\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4545,\n    \"name\": \"Satomi Okada\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/545/medium/Satomi_Okada.JPG?1581717181\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4561,\n    \"name\": \"Shaohua (Joe) Xiao\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/561/medium/Shaohua_Xiao.jpg?1581632674\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4627,\n    \"name\": \"Solomon Manyaga\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/627/medium/Solomon_Manyaga.jpg?1581632724\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4533,\n    \"name\": \"Steven Kunzel\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/533/medium/Steven_Kunzel.jpg?1581632758\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4549,\n    \"name\": \"Steven Yee\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/549/medium/Steven_Yee.jpg?1581632804\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4610,\n    \"name\": \"Taylor Wofford\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/610/medium/Taylor_Wofford.jpg?1581632842\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4622,\n    \"name\": \"Terrence Lai\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/622/medium/Terrence_Lai.jpg?1581632880\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4605,\n    \"name\": \"Tika Tsiklauri\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/605/medium/Tika_Tsiklauri.jpg?1581632916\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4537,\n    \"name\": \"Vivienne Van Vliet\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/537/medium/Vivienne_Van_Vliet.JPG?1581717297\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4540,\n    \"name\": \"Yeonjoo (June) Seong\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/540/medium/June_Seong.jpg?1581632955\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4623,\n    \"name\": \"Alejandro (Alex) Ortiz\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/bb0dafe868cd108d180e21998815d271?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4619,\n    \"name\": \"Begum Uddin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8a1c4004c08a144fb9156895b9333f70?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4625,\n    \"name\": \"Carlo Bruscani\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/625/medium/Carlo_Bruscani.jpg?1581629217\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4600,\n    \"name\": \"Christopher (Chris) Reilly\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8b8116164148bb0a4b89d98d5a0d959a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4557,\n    \"name\": \"Denis Naughton\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/557/medium/Denis_Naughton.jpg?1581629806\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4552,\n    \"name\": \"Eric Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8e66698792a165307c8ee1e684e8929e?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4555,\n    \"name\": \"George Skrelja\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/ab3d90f4d474e5598c2ac53b1988c0a0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4542,\n    \"name\": \"Mackenzie (Mac) Young\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/542/medium/Mackenzie_Young.jpg?1581631967\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4594,\n    \"name\": \"Margarita Pascual\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/16521e3cf0fcb20ef2d805ca8a5a32c8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4612,\n    \"name\": \"Mari Kasanuki\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/ec14c21ffefdd61c95277eeb946a275f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4595,\n    \"name\": \"Maya Blevins\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/595/medium/Maya_Blevins.jpg?1581632097\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4626,\n    \"name\": \"Misbah Ali\",\n    \"imageUrl\": \"//s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/004/626/medium/Misbah_Ali.jpg?1581632254\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4541,\n    \"name\": \"Ricky Zheng\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c5af64bf56b46824125d68adda3719e9?secure=true&size=300\",\n    \"occup\": \"student\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/2020-01-09.js?");

/***/ }),

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.megamanSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [100, 100];\n        let spriteSize = [50, 50]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            this.ctx.drawImage(this.megamanSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony,i,startingPosition, jumpHeight){\n        let spriteSize = [50, 50]\n        let runningSprites = [[150, 0], [200, 0], [250, 0]];\n        let dashSprites = [[350, 250], [400, 250], [450, 250]];\n        let jumpSprite = [300, 150]\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - 40,\n                130, 130)\n        } else {\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        let photoHeight = 170;\n        let photoWidth = 150;\n\n        this.ctx.drawImage(this.img_url, 375, 55, photoWidth, photoHeight);\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 375, 55, 150, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _2020_01_09__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2020-01-09 */ \"./src/2020-01-09.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _2020_01_09__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });