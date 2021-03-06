---
layout: post
title: "Ideas from Responsive Web Design"
date: 2012-04-01 17:00:00
tags: [resume-site]
---
I just finished reading *[Responsive Web Design](http://www.abookapart.com/products/responsive-web-design)* by Ethan Marcotte. The main takeways for my personal website are:

* Use target / context = result to get relative sizes
* Many technical details about how to implement a responsive site and what considerations need to be made
* Serving the same content to every device isn't the best solution in all cases, and the goals of the user should be considered first to
* A responsible approach to responsive design would mean building our stylesheet with mobile first in mind, then progressively enhancing it as the resolution increases

### Chapter 1: Our Responsive Web

* "The ingredients: a flexible grid-based layout, flexible images and media, and media queries"
* "We'll have created a design that can adapt to the constraints of the browser window or device that renders it, creating a design that almost *responds* to the user's needs"

#### My Thoughts

* Responsive design is about better meeting the user's needs. The user can interact with our content from a variety of devices, so the design produced should make that always a good experience for the user.

### Chapter 2: The Flexible Grid

* Flexible typesetting
	* Relative type sizes can be calculated with the formula target / context = result, e.g. 24px / 16px = 1.5em
	* Don't round relative sizes computed, browsers can handle that better
* Creating a flexible grid
	* Using the same formula to compute width, convert fixed element widths to percentages using the parent container as the context
* Flexible margins and padding
	* Need a flexible gutter so content aligns with the rest of the fluid grid, reusing the formula
	* When setting flexible margins, the context is the width of the element's container
	* When setting flexible padding, the context is the width of the element itself

### Chapter 3: Flexible Images

* Fluid images
	* Images larger than their container will overflow, which can be prevented with `max-width: 100%`, then as the flexible container resizes itself, the image will respond appropriately
	* Can apply `max-width: 100%` to `img`, `embed`, `object` and `video`, and it will work in modern browsers and IE7+
	* Resized images suffer from poor quality in IE7, but are fine in modern browsers and IE8+
* Negotiate that content
	* Simply scaling and cropping might be less than desirable for some images, instead could use multiple images suitable for various devices and server side solutions to server the most appropriate image (which is beyond the scope of the book, see http://bkaprt.com/rwd/23)

#### My Thoughts

* My focus, at this time, is not IE and as it is important to me that I can use a Mac at my next job, I will assume that someone reading this will also be using a Mac, for better or worse
* Didn't read anything about sending full sized images to mobile devices, so I will need to investigate solutions for that elsewhere

#### Chapter 4: Media Queries

* CSS2 spec included media types for handling styles for different media, which didn't work very well and never caught on
* CSS3 spec introduced media queries for inspecting the physical characteristics of the devices and browsers
	* e.g. `@media screen and (min-width: 1024px) { body { font-size: 100%; } }`
	* Includes media type - `screen`, query of a feature and a value - `(min-width: 1024px)`
	* If the browser meets both criteria, then the styles will be rendered, otherwise they will be ignored
	* Can include the rule in a stylesheet, or like `<link rel="stylesheet" href="wide.css" media="screen and (min-width: 1024px)" />`
	* In spec, display area refers to the browser window and rendering surface refers to the entire screen
	* Can use prefixes of `min-` and `max-` to test above and below thresholds
	* Some important feature names: `width`, `height`, `device-width`, `device-height`, `orientation`, `resolution`
	* Can chain multiple queries like `@media screen and (min-device-width: 480px) and (orientation: landscape) { ... }`
* The idea is to "use media queries to optimize the display of our content to best meet the needs of the device, creating alternate layouts tailored to the different resolution ranges"
	* Flexible layouts and media queries combine to make the site responsive
* Mobile Safari has a display size of 320x480 but actually displays web pages at a width of 980px, shrunken to fit on the display
	* Apple created a new attribute value, `viewport`, to control the size of the canvas and override the default behavior
	* e.g. `<meta name="viewport" content="width=320" />`
	* To handle various resolutions, use `<meta name="viewport" content="initial-scale=1.0, width=device-width" />` to set the zoom level to 100% and width of the browser's viewport equal to the width of the device's screen
	* now `min-width` and `max-width` can be used to conditionally load CSS
* Media queries in action, using `max-width` for smaller screens
	* For text, consider using media queries to decrease the font size and changing the font family to something more readable at smaller sizes
	* For the container, consider decreasing the margins and increasing the width to fill the entire smaller screen
	* For the content areas, disabling the horizontal margins and making them occupy the full width of the container will linearize the page's layout so it is more readable
	* For logo inline with navigation, consider moving logo above navigation and centering navigation elements below or moving navigation elements into a grid layout to prevent wrapping
* Media queries in action, using `min-width` for larger screens
	* Consider taking the opposite approach of making content linear for smaller screens, instead bring elements up and inline to keep line lengths reasonable and make content more accessible
* Compatibility
	* Media queries have a broad range of support in modern desktop browsers and IE9+, and in many mobile browsers
	* Will have issues in IE8 and below, IE mobile and older blackberries
	* JavaScript libraries like `css3-mediaqueries.js` and `respond.js` can be used to provide support, though no guarantee that JavaScript is enabled on all browsers

#### My Thoughts

* Reminder that I should consider a print stylesheet to convert my resume into a printable version

### Chapter 5: Becoming Responsive

* A matter of context
	* An argument against responsive web design reasons that mobile users might want quicker access to different tasks than if they were on a desktop or laptop
	* An argument against responsive web design reasons that if the user's priorities and goals do indeed differ between contexts, then they should not be served the same HTML in all contexts
* Serving the same content to every device isn't the best solution in all cases, and the goals of the user should be considered first to determine the best approach
	* It is wasteful to serve all content to all devices but hide some depending on device using `display: none;`
* Toward a responsive workflow
	* Ask, how does this content or feature benefit our mobile users?
	* Example breakpoints for most commonly used resolutions: 320px, 480px, 600px, 768px, 1024px, 1200px
	* Designers and developers need to be working together to build the prototypes iteratively and test them on a variety of devices
	* Responsive design is about starting from a reference resolution, and using media queries to adapt it to other contexts
	* A more responsible approach to responsive design would mean building our stylesheet with mobile first in mind, then progressively enhancing it as the resolution increases
	* To handle users without JavaScript, elements that are applicable only when JavaScript is present can be loaded using JavaScript, e.g. all slides besides the first of an image slideshow
	* And can use `$.get()` to open HTML snippets so markup doesn't need to be storied in JavaScript strings
	* Or can make the script resolution dependent to prevent JavaScript from loading on smaller screen, e.g. `if(screen.width > 480) { ... }`
	* Filament Group has a responsive image library at http://bkaprt.com/rwd/56 that can be used to serve lighter images to smaller displays

#### My Thoughts

* It feels like the correct approach to buidlding my site would be to build the stylesheet with mobile first in mind, then progressively enhance as the resolution increases, like he recommended

## Next Steps

It feels like I have a better understanding of how to approach the site design, where to start and what I need to consider. Both Luke and Ethan stressed the importance of iteration during development so I should start building and learn more as I proceed. The next major aspect of the site will be the content, so before I jump into that, I'll read *[The Elements of Content Strategy](http://www.abookapart.com/products/the-elements-of-content-strategy)* by Erin Kissane. And I still need to get my environment setup - github, and environments for writing and development.
