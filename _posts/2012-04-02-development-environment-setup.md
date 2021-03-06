---
layout: post
title: "Development Environment Setup"
date: 2012-04-02 17:00:00
tags: [resume-site, development]
---
I need a new development environment. Actually, I *want* a new development environment, and I *need* a better development workflow. I code most things by hand and use a variety of text editors to accomplish that:

* [TextMate](http://macromates.com/) for [Shopify](http://www.shopify.com/) themes due to the excellent [Shopify bundle](http://wiki.shopify.com/Shopify_Textmate_Bundle) that makes pushing code incredibly easy
* [Coda](http://www.panic.com/coda/) for when I am developing code on a remote server due to the excellent FTP integration and integrated SSH terminal
* [Notepad++](http://notepad-plus-plus.org/) for when I am at work because I can easily work out of my DropBox folder and it isn't as heavy as [Eclipse](http://www.eclipse.org/) (and I have to use a Windows PC)

Given all the time I spend at work, I'd like to have a similar setup at home on my Mac and at the office on my PC. I think it would be easier to learn one editor, and then I can make an effort to learn how to use it optimally - e.g. shortcuts, configuration, packages, etc. So I'm going to give [Sublime Text](http://www.sublimetext.com/) a shot.

Right now, I have some blog posts written about this project, but no code yet. So I'll focus on getting my environment setup to write [markdown](http://daringfireball.net/projects/markdown/) and getting those files into [github](https://github.com/). If I have time tonight, I'd also like to explore setting up [Octopress](http://octopress.org) as I am thinking I'll use that for my blogging platform. Then I'll revisit my development environment to find tools for better handling development.

I'll treat this post as instructions on how to setup Sublime on Mac OS X (10.7.3) to write markdown files and check them into github.

First, let's get Sublime setup for handling markdown files.

1. Download [Sublime Text](http://www.sublimetext.com/) from their [downloads page](http://www.sublimetext.com/2) and copy it to your `Applications` folder.
2. To easily add extra features to Sublime, we'll use [Sublime Package Control](http://wbond.net/sublime_packages/package_control). Installing this requires entering a command into the console of Sublime, accessed by the `` ctrl+` ``, and to make sure the latest command is used, you can copy it from their [installation page](http://wbond.net/sublime_packages/package_control/installation).
3. Restart Sublime to finish the installation.
4. We'll use the [SublimeText Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview) plugin available on github. Installation instructions are available in their README file.
5. Activating the preview can be done by pressing `cmd+shift+P` then typing `MarkdownPreview`. But it would be nice to setup a keybinding so this can be done easier and faster.
6. To set a keybinding, go to the `Preferences` menu, then select `Keybindings - User`. A new tab will open in Sublime Text, then paste the code below inside square brackets so the resulting file looks like:
{% highlight json %}
[
	{
		"keys": ["ctrl+j"],
		"command": "markdown_preview",
		"args": {
			"target": "browser"
		}
	}
]
{% endhighlight %}
7. Save the file. Now the markdown preview can be activated using the shortcut `ctrl+j`.
8. Now let's associate `.mdown` files to Sublime Text so it can be our default editor for markdown files. Right click on a `.md` file in the `Finder`, and select `Get Info`. In the `Open with` section, select the application `Sublime Text 2` from the drop down. Click on the `Change All...` button, then click `Continue` in the dialog box.

Next, let's get Sublime Text to communicate with github. I already have a github account and github has excellent [documentation](http://help.github.com/) on setting up and using git. As much of the instructions in this section would be about how to setup a repository on github and how to use git, I'll just briefly describe the steps I took.

1. Use Sublime Package Control again to install [Sublime Text 2 plugin: git](https://github.com/kemayo/sublime-text-2-git).
2. Create a repository in github, and configure the local system to communicate with the repository.
3. Using a file within the local github directory, we can use the Sublime git plugin to interact with the hosted repository.
4. Select `Git: Add Current File` from the Sublime Command Palette to add the file to the local repository.
5. Select `Git: Commit` from the Sublime Command Palette to commit to the local repository.
6. Select `Git: Push` from the Sublime Command Palette to push the changes to the hosted repository.
7. Check the update on github.

Now I have a text editor that I am reasonably happy with and my work is being saved to github. I'll still need to do some tweaking on my environment as I work more, and I'm already thinking I'd like to add more plugins to Sublime. But this is good enough to continue on the project.

## Next Steps

Feels like the next thing to do is work on the content of the site, starting with reading *[The Elements of Content Strategy](http://www.abookapart.com/products/the-elements-of-content-strategy)* by Erin Kissane.
