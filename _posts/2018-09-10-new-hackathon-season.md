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

<b>Firebase Auth – Authentication Solution</b>

Building our own authentication mechanisms by storing username, passwords, cookies, domains, hashing, salting, and user tokens would have taken a significant amount of time.  Most of the heavy lifting was done for us using Firebase Auth. We were left to configure using the SDK, the manner in which we wanted to enable users to log in. For this prototype, we decided to use email and password, but we could have easily added the option to have a “lazy” login using providers like Google, Facebook, GitHub, and another existing account system. The value of implementing such a solution is that we do not store or handle sensitive, private user information. In other words, our user's data is protected, and we are simply given references to the user object in the database which we use to attach a user session and populate elements such as name and avatar.

<b>Firebase Realtime Database – Database Solution</b>

Firebase’s real-time database is a NoSQL, cloud-based technology that allows data to be synchronized across different devices, and several accounts while keeping the data available if the application goes offline. It is best suited for real-time data and event-based changes occurring in the backend. The choice for this database allows our modern web application to scale to very quickly while keeping responsiveness and access time extremely fast independent of connectivity. It works perfect to track users positions in realtime.


<b>React</b>

Create-react-app CLI was used to bootstrap the initial setup of react project. It is really quick to get react up and running because it configures all the necessary dependencies, structures the folder and sets up Webpack (module bundler) before starting any development work. Once the structure and the initial scaffolding is in place, it was time to break down the UI and several components; react uses a single responsibility paradigm where each component is responsible for its functions and state.


### Cool things that happened

> _No random fruit name generator, so I coded one!_

I searched and searched for a library that would randomly generate an adjective and a fruit name as the display name of our new users. I couldn't find anything! I decided to create my own. Using Python, I parsed the name of several fruits of the interest, wrote a program that concatenated cool adjectives to fruit names and exported the results into a JSON that I placed in the DB.

### Parting Words

It was 
