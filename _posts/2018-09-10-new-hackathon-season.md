---
layout: post
title: Hackathon Season 2018
description: Let the hackathon season begin!
date: 2018-09-10
author: Anthony A. Nader
image: hackTheNorth18.jpg
imageSource: Anthony A. Nader
lang: en_US
lead: Here we go again!
categories: hackathons
tags: university waterloo HackTheNorth hackathon python react JavaScript node firebae
published: true
---

<b>K</b>icked off the 2018 hackathon season by attending <a class="pink-hover" href="https://hackthenorth.com/" target="_blank">#HackTheNorth</a> with my good friends Filip and Kyle. We bounced ideas; build a new feature for Neappoli that would include a new Resident Management System (RMS) for councilors, or take a completely different direction and create something unrelated to our company.

> _Hackathon opportunity == create something independent from Neappoli._


We had initially decided to work on a project involving Spotify and the ability to mix and sync songs in a playlist based on the <b>user's jogging speed</b>. The iOS application would mix each track in a playlist to match the BPM of the jogging speed, using the Apple Watch sensors, creating a continous and seamless flow of music adapted to the user's activity. However, this project would have required much more effort than 36 hours and we wouldn't have been able to present a demo on time.

We finally settled on building a web application that would make networking engaging, easy and fun. We want to remove that shyness barrier, providing people with an easier time connecting with others around them during networking events.

### What we built

> _Think about this..._

It’s your first year in university, you don’t know anyone in your classes, or you happen to attend a hackathon for the first time, and you know no one around you; most people are too shy to talk to anyone around them. What if we provided an application that describes the people around you with pseudo-information using three distinct traits and one pixelated avatar.

We decided to build a new social interaction application that allows users within a geo-location to view people around them by initiating the interaction via the app and then walking up to the person to have a real-life conversation with them to unlock their network information.

### How we built it

<b>Firebase Realtime Database</b>

<b>React</b>

### Cool things that happened

> _No random fruit name generator, so I coded one!_

I searched and searched for a library that would randomly generate an adjective and a fruit name as the display name of our new users. I couldn't find anything! I decided to create my own. Using Python, I parsed the name of several fruits of the interest, wrote a program that concatenated cool adjectives to fruit names and exported the results into a JSON that I placed in the DB. Upon user creating we would randomly assign one of those names as the display name of the user.
