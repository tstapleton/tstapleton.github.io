---
layout: post
title: "Coding the Tradeshift Logo"
date: 2014-06-13 16:00:00
tags: [tradeshift, development]
---
Tradeshift was hosting another hackathon and I was helping to design a shirt for the event. We thought it would be cool to have some code on the shirt. So I got to work.

My first idea was drawing the Tradeshift logo using SVG. It [looked pretty good](It looked pretty good, but there wasn't much *code* to it.), but there wasn't much *code* to it.

```html
<svg version="1.1" baseProfile="full" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
	<circle cx="160" cy="160" r="160" fill="#000" />
	<path d="M 25 90 L 153 90 L 153 270 L 105 270 L 105 128 L 25 128" fill="#fff" stroke="#fff" />
	<path d="M 167 90 L 167 270 L 215 270 L 215 128 L 295 128 L 295 90" fill="#20a0e9" stroke="#20a0e9">
</svg>
```

Since we write a lot of Javascript, I wrapped up the SVG and added a bit more filler. Ultimately, it felt too forced - and ```Tradeshift``` isn't even defined!

```html
<!DOCTYPE html>
<html>
  <h1>Tradeshift Hackathon</h1>
  <h2>Summer 2014</h2>
  <svg version="1.1" baseProfile="basic" width="320" height="320" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="160" r="160" fill="#000" />
    <path d="M 25 90 L 153 90 L 153 270 L 105 270 L 105 128 L 25 128" fill="#fff" stroke="#fff" />
    <path d="M 167 90 L 167 270 L 215 270 L 215 128 L 295 128 L 295 90" fill="#20a0e9" stroke="#20a0e9">
  </svg>
  <script>
    window.addEventListener('HackathonLoaded', Tradeshift.code);
  </script>
</html>
```

So I ditched SVG for canvas so the code could be largely Javascript and interesting enough to fill up a shirt.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Tradeshift Pirate Ship Days, June 2014</title>
		<style>
			body {
				background-color: rgb(0, 0, 0);
				padding: 22px;
			}
		</style>
		<script type="text/javascript">
			function drawLogo(canvas, capHeight) {
				var context = canvas.getContext('2d');
				var alley = Math.round(capHeight / 13.40);
				var halfGlyphWidth = Math.round(capHeight / 1.40);
				var stemWidth = Math.round(capHeight / 3.72);
				var armHeight = Math.round(capHeight / 4.79);
				var armWidth = halfGlyphWidth - stemWidth;

				(function drawLeftSide(context, start) {
					context.fillStyle = 'rgb(255, 255, 255)';
					context.fillRect(start.x, start.y, armWidth, armHeight);
					context.fillRect(start.x + armWidth, start.y, stemWidth, capHeight);
				})(context, { x: alley, y: alley });

				(function drawRightSide(context, start) {
					context.fillStyle = 'rgb(32, 160, 233)';
					context.fillRect(start.x, start.y, stemWidth, capHeight);
					context.fillRect(start.x + stemWidth, start.y, armWidth, armHeight);
				})(context, { x: alley + halfGlyphWidth + alley, y: alley });
			}

			window.addEventListener('DOMContentLoaded', function () {
				var canvas = document.getElementById('logo');
				var capHeight = 360;
				if (canvas.getContext) {
					drawLogo(canvas, capHeight);
				}
			}, true);
		</script>
	</head>
	<body>
		<canvas id="logo" height="415" width="595"></canvas>
	</body>
</html>
```
