// events.js
// ====
// This file contains the data for all the events on this site.

"use strict";

// Globals
var allEventsList = []; // array of Event objects

// Set up allEventsList
allEventsList.push(new Event(
	1, // identifier
	"B.C. Halloween Party", // title
	"Student Center, Penthouse 7th floor", // location
	"10/31/23, 5:00pm", // date
	"event-1.png", // imageFile
	"Brooklyn College students come spend your Halloween at our costume party where students will mingle, eat, and dress up. Food and drinks will be provided to all free of charge. We will also have mini games where students can win spooky prizes. Come all and remember to bring your costume!", // description
	["club"], // eventTypes
	[6, 2] // relatedEvents
));

allEventsList.push(new Event(
	2, // identifier
	"Murder Mystery", // title
	"3111 James Hall", // location
	"11/7/23", // date
	"event-2.png", // imageFile
	"[Description forthcoming]", // description
	["club"], // eventTypes
	[6, 1] // relatedEvents
));

allEventsList.push(new Event(
	3, // identifier
	"Electro-acoustic Music Festival", // title
	"Topfer Rehearsal Studio", // location
	"11/14/23", // date
	"event-3.png", // imageFile
	"[Description forthcoming]", // description
	["music"], // eventTypes
	[6, 1] // relatedEvents
));

allEventsList.push(new Event(
	4, // identifier
	"Afternoons at the Piano 2", // title
	"Topfer Rehearsal Studio", // location
	"12/10/23", // date
	"event-4.png", // imageFile
	"[Description forthcoming]", // description
	["music"], // eventTypes
	[6, 1] // relatedEvents
));

allEventsList.push(new Event(
	5, // identifier
	"El Huracán", // title
	"Don Buchwald Theater", // location
	"12/21/23", // date
	"event-5.png", // imageFile
	"[Description forthcoming]", // description
	["theater"], // eventTypes
	[6, 2] // relatedEvents
));

allEventsList.push(new Event(
	6, // identifier
	"Eurydice", // title
	"New Workshop Theater", // location
	"1/17/24", // date
	"event-6.png", // imageFile
	"[Description forthcoming]", // description
	["theater"], // eventTypes
	[5, 1] // relatedEvents
));

allEventsList.push(new Event(
	7, // identifier
	"BC Job Fair", // title
	"Student Center", // location
	"2/12/24", // date
	"event-7.png", // imageFile
	"[Description forthcoming]", // description
	["recruiting"], // eventTypes
	[8, 2] // relatedEvents
));

allEventsList.push(new Event(
	8, // identifier
	"Software Development Speaker", // title
	"148 Ingersoll Hall", // location
	"2/24/24", // date
	"event-8.png", // imageFile
	"[Description forthcoming]", // description
	["recruiting"], // eventTypes
	[7, 5] // relatedEvents
));

