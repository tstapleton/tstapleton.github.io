(function (window, document, undefined) {
	'use strict';

	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	function _getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	console.log('<3 boo');

	var UNIT = 24;
	var HEADER_HEIGHT = UNIT * 3;

	var COLOR_FIRST = 'rgb(20, 143, 204)';
	var COLOR_SECOND = 'rgb(20, 204, 173)';
	var COLOR_THIRD = 'rgb(20, 204, 81)';
	var COLOR_FOURTH = 'rgb(20, 51, 204)';
	var COLOR_FIFTH = 'rgb(81, 20, 204)';
	var COLOR_WHITE = 'rgb(255, 255, 255)';
	var colors = [COLOR_SECOND, COLOR_THIRD, COLOR_FOURTH, COLOR_FIFTH, COLOR_WHITE];

	// var COLOR_BLUE_DARK = 'rgb(46, 66, 89)';
	// var COLOR_BLUE_LIGHT = 'rgb(3, 200, 250)';
	// var COLOR_RED = 'rgb(247, 72, 59)';
	// var COLOR_GRAY_LIGHT = 'rgb(236, 240, 241)';
	// var COLOR_GRAY_DARK = 'rgb(115, 115, 115)';
	// var COLOR_GREEN = 'rgb(0, 155, 163)';
	//var colors = [COLOR_BLUE_DARK, COLOR_RED, COLOR_GRAY_LIGHT, COLOR_GREEN];

	window.UI = (function () {
		var _isInitialized = false;

		function initialize() {
			if (_isInitialized) {
				return;
			}
			_isInitialized = true;

			_setSlideHeight();
			_addCircles();
			smoothScroll.init();
		}

		function _setSlideHeight() {
			var slides = document.querySelectorAll('.js-slide');
			var length = slides.length;
			var i;
			var windowHeight = window.innerHeight;
			var unit = 24;
			var height = windowHeight + (unit - (windowHeight % unit));
			console.log(slides);
			for (i = 0; i < length; i++) {

				slides[i].style.height = (i === 0 ? height - HEADER_HEIGHT : height) + 'px';
			}
		}

		function _getRandomColor() {
			return colors[_getRandomInt(0, colors.length)];
		}

		function _getRandomSize() {
			var min = 20;
			var max = 120;
			return _getRandomInt(min, max + 1);
		}

		function _getRandomPosition() {
			var min = 5;
			var max = 90;
			return _getRandomInt(min, max + 1);
		}

		function _addCircles() {
			var i;
			var circleCount = 24;
			for (i = 0; i < circleCount; i++) {
				_addCircle();
			}
		}

		function _addCircle() {
			var size = _getRandomSize() + 'px';
			var circle = document.createElement('div');
			circle.classList.add('circle');
			circle.classList.add('dot');
			circle.style.top = _getRandomPosition() + '%';
			circle.style.left = _getRandomPosition() + '%';
			var container = document.querySelectorAll('.home .intro');
			container[0].appendChild(circle);

			// Make sure the initial state is applied.
			var opacity = window.getComputedStyle(circle).opacity;

			circle.style.backgroundColor = _getRandomColor();
			circle.style.height = size;
			circle.style.width = size;
		}

		return {
			initialize: initialize
		};
	})();

	if (window.addEventListener) {
		window.addEventListener('DOMContentLoaded', window.UI.initialize);
	}
})(window, window.document);
