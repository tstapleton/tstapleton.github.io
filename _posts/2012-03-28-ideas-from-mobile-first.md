---
layout: post
title: "Ideas from Mobile First"
date: 2012-03-28 18:00:00
tags: [resume-site]
---
I just finished reading *[Mobile First](http://www.abookapart.com/products/mobile-first)* by Luke Wroblewski. The main takeways for my personal website are:

* Design for the smallest screen first by reducing content to only what is absolutely necessary
* Consider how the device could be used and adjust site design and content for the various cases
* Prototype, prototype, prototype

### Constraints

* "Make sure that what stays on the screen is the most important set of features for your customers and your business"
* "Don't dumb things down on mobile - focus on what really matters most anywhere people can access your website"
* Performance considerations
	* Use image sprites
	* Bundle and minify CSS and JavaScript files
	* Limit or remove dependencies on heavy JavaScript libraries
	* Limit the use of CSS grid systems
	* Use proper HTTP headers to ensure files are appropriately cached
	* Use CSS3 properties to reduce the need for images, and provide decent fall backs
* "Location and time act as constraints on the mobile design process because they force you to think differently about how people will use your products throughout their day"

#### My thoughts

* My customer is someone I want to hire me for a job, they want to see if I could provide value to them
* My business is me, demonstrating my accomplishments and projects
* If it isn't important enough to be on the mobile web experience, then should it be on the desktop web experience?
* Contrast with my idea going into this project that I want a place to collect my work over time, instead should it be reduced to only show the highlights? Or should there be a way to discover more information?
* There could be a need for highlights / summary information
* This is aligned with the idea that people spend about 30 seconds looking at your resume to make a decision

### Organization

* Align with how people use their mobile devices and why. Mobile usage generally consists of the interaction types:
	* Lookup / find - need an answer to something now
	* Explore / play - have some time to kill
	* Check in / status - stay on top of updating information
	* Edit / create - need something done now
* Emphasize content over navigation
* Provide relevant options for exploration and pivoting
 * Idea of navigation at the header and bottom of every page, but shouldn't duplicate menu so top menu could link user to the bottom of the page where the navigation is
 * Contextual navigation menus on content pages allow people to explore related content
	* However, browser chrome and phone hardware buttons are typical at the bottom of the screen so a fixed bottom navigation bar seems to not be a great idea
* Maintain clarity and focus
 * Minimize navigation options to allow for more focus on content and prevent accidental taps

#### My thoughts

* How people could use my content on their devices
	* Lookup / find - a user could need my contact information, or want to know resume highlights
	* Explore / play - a user could want to browse projects I have worked on and explore examples of my work
	* Check in / status - I don't really think of a resume as updating that frequently, but maybe this could be a recent work section or current projects or even links to Twitter and / or Facebook (which I don't really utilize right now)
	* Edit / create - ideally the user needs to contact me immediately to offer me a position, so I should make this really easy to do
* Don't have the initial experience be a series of links to sections of a traditional resume
* I am thinking about a single page for the resume, with a separate section for how the site was built
* Exploration might suggest that content should be initially summarized, with more information available when desired
* Bottom of page could have links to various resume categories, however the categories are defined
	* This could be a solution to allowing the user to see more than just the highlighted content, i.e. discover "less important" but related accomplishments and projects
* The idea that less is more, should probably curate the content rather than being inclusive of everything I've done

### Actions

* "You actually want to...make things bigger - often even bigger than you're naturally comfortable with"
* Apple recommends touch targets to be 44x44 points, and padding or margins should be used to denote importance and provide a larger tap target
* Primary actions on a touch screen should depend on which fingers will do the tapping, and since most people are right-handed and use their thumbs on mobile devices, primary actions can be placed on the middle or bottom of the screen and arranged from left to right
* Hovers are not explicit actions, and are nonexistent in touch interfaces
* Should still define :hover and :focus states to accommodate the usage of non-touch mobile devices

#### My thoughts

* If the primary action to take is contacting me, should the contact button be placed in this zone? But before he said that we shouldn't use bottom navigation bars...hmmm
* References to gestures, but I am unsure about how this works in a mobile browser

### Inputs

* Top aligned labels work best due to mobile device widths, and labels inside input fields have their own challenges
* New HTML5 input types can help users answer questions that require a specific format, e.g. input type of email has @ character on keyboard in mobile safari

#### My Thoughts

* As my site doesn't really need input, perhaps I should include a contact form to practice collecting input
* Should read this section again if I decide to collect input on the site

### Layout

* `<meta name="viewport" content="width=device-width">` is used to optimize the site's width for the device it's being viewed on and provides layout consistency across various pixel densities
* Still need to do some work to handle high-resolution images
	* Images will render at the correct size but lack crispness and definition when pixel density is high
	* Need two sets of images - one at twice the resolution and one at standard resolution
	* Tell the web browser to include the higher resolution images on the appropriate devices using CSS3 media queries, JavaScript or server side scripts
* "With responsive web design, you can set a baseline (mobile) experience first, then progressively enhance or adapt your layout as device capabilities change"
	* Set resolution break points and apply a different set of layout rules and media assets to each
	* See Ethan Marcotte's book
	* Layout rules can reposition elements, increase image sizes or remove elements
* "Different device experiences may require different user interface design solutions"
	* Relative importance of tasks can differ between device experiences
	* "Developing a single interface that works across all device experiences may result in compromises or bare-bones features that don't take advantage of what makes each device experience excel"
* "Reduction is the best layout approach available to you on mobile"
	* Across all layouts, aim for the minimum amount necessary, regardless of usage
* "Prototype, prototype, prototype. The sooner a mobile web experience is in your hands, the faster you'll know if it works in the real world."

#### My thoughts

* Will need to take this into consideration when taking screen shots of projects, and can I even get high resolution images on screen shots?
* Just realized that the website I have built were not optimized for mobile, so directing a user on a mobile device to the actual size might be a negative experience and reflect poorly on me
* Consider importance of tasks between devices, e.g. phone might focus on contact information and highlights, tablet might have more focus on browsing projects, and desktop might provide even more details
* Seems to be in contrast to how I understood it before where mobile experience shouldn't be dumbed down

## Next Steps

I'm still stuck on how to organize and display my resume content so I'd like to give that more thought. I think I'll read responsive web design next so I can start building the site framework and various ways to display content (like Luke recommended). I should get a better idea of how to organize my content if I can better understand how various content organization methods will work in a responsive framework. and I need to get github setup before I start building prototypes.
