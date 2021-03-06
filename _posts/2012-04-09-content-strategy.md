---
layout: post
title: "Content Strategy"
date: 2012-04-09 17:00:00
tags: [resume-site]
---
The primary message that should be conveyed to potential employers is that I will be able to provide value to their organization, that I can figure out how to solve problems and then deliver results.

I need to convey that I care about the projects that I have worked on, by identifying how I contributed to making the project great.

I need to convey diversity and passion, by describing a variety of accomplishments and having opinions on subjects.

I need to convey ability and action, by showcasing completed projects and listing my responsibilities.

### Big Concepts

A traditional resume consists of text in bullet points, separated into various categories and delivered in a printable format. A website with the resume content would be more effective at delivering the desired messages to potential employers.

The resume content on the website should be readable like a traditional resume, in the sense that a reader can easily read the content quickly. But the content should be explorable, where a user can get more detail about a piece of content, something that wouldn't be easily available with a traditional, static resume.

The website can be used as a code sample for potential employers to demonstrate current abilities. Host all code and supporting documentation on github so it is easily available.

Describing the process of building the website could be included as a separate section of the resume site, which can demonstrate writing ability and thinking process. Plus, writing about solving problems often leads to a better solution.

Much of the written content reviewed during the content inventory phase felt formal and terse. Use the website to be more lighthearted to better demonstrate personality.

Resume content should be rewritten to convey the messages described above. The at-a-glance resume view should be short and direct summaries, encouraging exploration for more detail. More descriptive content should be developed for important resume pieces, which could include images, links to active sites, and more text to communicate the desired messages.

### Structural Design

The structural design of this site will be fairly simple by intention. The resume content should be main focus of the site, with the project documentation easily available, but distinctly separate.

#### Sitemap

To allow for easy reading, most of the resume content should be available on a single page, with additional content becoming available as requested, without directing the user onto a separate page. The project documentation will be available on a different page, as to separate it from the main resume content, while collecting it in one location for easy exploration.

* Experience (the resume content)
* Notation (the project planning documentation)
	* Project Definition
	* Research and Assessment
	* Content Strategy
	* Design Process
	* Mobile Strategy
	* Responsive Framework

#### Experience Organization

The resume content is unique in that grouping by organization and job title results in many overlaps of time and responsibilities. The relevant experiences for a new position as a front-end developer come from multiple job titles from multiple organizations since I have been doing web development outside my day job for a few years now.

Analysis of the content shows 8 overlapping and non-hierarchical terms that can be used for categorization:

* Education - taking responsibility to learn something new
* Design - determining how something should work to solve a problem
* Development - writing code to solve a problem
* Drupal - implementing a solution using the open source content management system [Drupal](http://drupal.org)
* Shopify - implementing a solution using the ecommerce platform [Shopify](http://www.shopify.com)
* Leadership - affecting the path forward and bringing others along
* Teaching - learning someone's situation then providing a resolution and explanation so it is understandable
* Data Analysis - collecting and interpreting information to understand a situation

Content should be sectioned by year to show new experiences first as recent work should establish current abilities. Within each year, a few important projects should be made more prominent to attract attention to specific pieces that are deemed most important. And each piece of content should be tagged with the relevant categories to provide a quick way of finding similar content.

A summary section at the top of the page should include a brief bio and the type of position I am looking for, similar to a traditional resume objective. Statistic-like information would also be useful, like organizations I have worked for, dates of employment, positions held, and terms that will be used for the content.

A review of the quantity of content pieces in each year, and those desired to be highlighted, shows that some years should be combined to have more balance in each section. The counts when separated by year is:

| Year | Content Count | Highlight Count |
| ---- | ------------- | ----------------|
| 2012 | 7 | 4 |
| 2011 | 8 | 4 |
| 2010 | 4 | 2 |
| 2009 | 2 | 2 |
| 2008 | 2 | 0 |
| 2007 | 5 | 4 |
| 2006 | 7 | 2 |
| 2005 | 4 | 0 |
| 2004 | 1 | 1 |
| 2003 | 2 | 1 |

Combining 2008, 2009 and 2010 into one section, and 2003, 2004, 2005 and 2006 into a separate section would balance out the content distribution:

| Section | Content Count | Highlight Count |
| ------- | ------------- | --------------- |
| 2012 | 7 | 4 |
| 2011 | 8 | 4 |
| 2008 - 2010 | 8 | 4 |
| 2007 | 5 | 4 |
| 2003 - 2006 | 14 | 4 |

### Content Templates

A piece of content should contain at least:

* Year - the year the project was completed
* Organization - the company I was working for during the project
* Position - the position I held while doing the project
* Tags - relevant categories
* Highlighted - yes or no, depending on desire to display this piece of content prominently

Depending on the piece of content, it may also contain:

* Teaser - a short description of the project that conveys a desired message
* Description - a longer description of the project listing my contributions, background, results, etc
* Link - to support material like a live site
* Images - screen shots representing the project, often with text captions

An example piece of content:

* Year - 2012
* Organization - Baker Hughes
* Position - Web Developer
* Teaser - Identified the need for a user interface designer and took the role
* Tags - Design, Development, Leadership, Teaching
* Highlighted - Yes
* Description -
	* Identified the lack of user interface design in our current processes and the issues it was causing like gaps between what the business wanted and the solution developed, and inconsistent interface patterns throughout the application
	* Set the expectation that screen mockups should be developed and approved by the business prior to development so a common understanding could be established early
	* Started developing a front-end pattern library to establish standard and reusable ways of interacting with the application
* Link - none
* Images - take cropped screenshot of interface designed

### Content Creation

Placeholders exist for each content piece already, as they were retrieved from the existing resume. The quality of each piece varies, and each piece should be reviewed and updated to ensure that a desired message is communicated. In order to meet the desired launch date, content creation should be prioritized as:

1. Write teasers for the highlighted content piece that will be used on the site
2. Write descriptions and collect links and images for highlight content
3. Write descriptions and collect links and images for remaining content, starting with the the most recent sections

The site could launch with only the first task completed, but it would be ideal to complete the second task as well. The third task, while important, provides less value and can be prioritized with other project tasks.

### References

*[The Elements of Content Strategy](http://www.abookapart.com/products/the-elements-of-content-strategy)* by Erin Kissane for explaining the benefits of defining a content strategy and for direction on what to think about in during process.
