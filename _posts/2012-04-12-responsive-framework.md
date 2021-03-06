---
layout: post
title: "Responsive Framework"
date: 2012-04-12 17:00:00
tags: [resume-site]
---
Following the mobile strategy, the site will be designed for mobile devices first, and progressively enhanced as device resolution increases. The successful combination of a flexible grid-based layout, flexible images and media, and CSS3 media queries will produce a site that responds the user's device.

Responsive design is about better meeting the user's needs. The user can interact with the content from a variety of devices, so the design produced should make that always a good experience for the user.

There are many existing responsive grid frameworks. After evaluating some, I've decided to use the [Fluid Baseline Grid](http://fluidbaselinegrid.com/) because it follows the mobile first strategy, the markup is simple, and can be easily customized to my desired design.

### Implementation

I'll update the Fluid Baseline Grid to be based on 4 columns instead of the default 3 since each period has 4 pieces of content to highlight. The grid will display 1 column on mobile devices with content linearized, then switch to a 2 column layout for tablets, and finally switch up to a 4 column layout for large screens. This will keep the content grouped nicely for all devices.

The same content will be served to every device as there is no reason to think that a user on a mobile device would want less or different content, for this site. Some consideration should be given to make images responsive, starting with serving smaller images to mobile devices rather than allowing the browser to scale down the full image.

### References

*[Responsive Web Design](http://www.abookapart.com/products/responsive-web-design)* by Ethan Marcotte for the explanation on why and how to implement a responsive website.
