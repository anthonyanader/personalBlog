---
layout: post
title: Cocoapods Tutorial
description: Reference tutorial to installing Cocoapods!
permalink: /blog/:categories/:title
date: 2018-04-01
author: Anthony A. Nader
image: cocoapodsTutorial.jpg
imageSource: Lautaro Andreani
lang: en_US
lead: Dependency manager for xCode!
categories: technical
tags: iOS development tutorials
published: true
---

<b>A</b>s promised in a previous blog post, I began documenting my learning journey in iOS development. Despite living through the stress of the end of the semester; last-minute posted assignments, projects presentations, and not to mention finals starting next week, I was still able to get up at 4-5AM and work toward something I’m passionate about before starting my school day.

> This past week I learned about Cocoapods!

Cocoapods is a dependency manager, similar to NPM for Node but for Xcode. It allows you to search for third-party plugins/components that you would want to add to any of your applications.

Cocoapods allows you to search for:

- -Design Kits
- -Open Source Collections
- -Frameworks and Libraries of Code

This blog post will be relatively short, as it will serve as a technical reference to others and myself looking to incorporate pods in their future projects.

_The following steps assume that you are installing Cocoapods for the first-time._

<hr style="width:50%; border: 1px solid #EC6F75">

Alright then, go ahead and open your <b>terminal</b>.

1. <b>Installing Cocoapods</b>

    Type the following: `sudo gem install cocoapods`. It will prompt for your password as it installs the cocoapods ruby gem on your machine.

2. <b>Installing Pods</b>

    Type the following: `pod setup --verbose`. "Verbose" will list out all the things that are happening behind the scene as the terminal is used to doing things in the background; it's more to give you an idea on what's being installed. Once the initial installation is complete, you will not have to go through this again. In the future, all you have to do is incorporate cocoapods in the project.

3. <b>Initialize Pod in Project Directory</b>

    Start by closing any open Xcode project. Then using the <b>terminal</b>, `cd` into your project directory. Initialize a pod file using the following command: `pod init`.

All done!

You can now add any dependency to the pod file created in the project directory. Make sure you edit your pod file in a text editor to avoid syntax issues. Finally, make sure you open your Xcode project with the extension <b>.xcodeproj</b>;  that project now contains all the added packages.

I hope this post helps anyone looking for a quick tutorial or refresher on installing cocopads and incorporating third-party dependencies to their Xcode project.

Cheers!

Anthony A. Nader
