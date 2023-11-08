// events.js
// ====
// This file contains the data for all the events on this site.

"use strict";

// Globals
var allEventsList = []; // array of Event objects
var goingEvents = [1, 2]; // array of identifiers of events that user has selected "I'm interested"
var interestedEvents = [5, 8]; // array of identifiers of events that user has selected "I'm going"



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
	"Brooklyn College students come to the murder mystery hosted by the Anthropology club and learn how to investigate the culprit of the murder. All students are welcome and no prior experience is needed to participate. Anthropology club members will guide you through the procedure to participate in the murder mystery and then you will be able to solve a mystery by yourself. All drinks and food will be free of charge so get your detective cap on and come by for a thrilling adventure.", // description
	["club"], // eventTypes
	[6, 1] // relatedEvents
));

allEventsList.push(new Event(
	3, // identifier
	"Electro-acoustic Music Festival", // title
	"Topfer Rehearsal Studio", // location
	"11/14/23", // date
	"event-3.png", // imageFile
	"Brooklyn College students come to the Electro-acoustic Music Festival to experience cutting edge works by masters and emerging composers. This event is free to all students and no prior knowledge is needed to enjoy the event. Reminder please do not eat in the venue and remember to be careful with your drinks. We hope to see you there!", // description
	["music"], // eventTypes
	[6, 1] // relatedEvents
));

allEventsList.push(new Event(
	4, // identifier
	"Afternoons at the Piano 2", // title
	"Topfer Rehearsal Studio", // location
	"12/10/23", // date
	"event-4.png", // imageFile
	"Brooklyn College students come to the Afternoons at the Piano 2 to see the Conservatory of Music pianists perform solo works. The event will be about an hour long in the Topfer Rehearsal studio with 5 minute breaks between each performance. The event is free of charge and anyone may attend. No food or drinks are allowed in the venue and please be mindful of your manners during the performances. We hope to see you there!", // description
	["music"], // eventTypes
	[6, 1] // relatedEvents
));

allEventsList.push(new Event(
	5, // identifier
	"El Huracán", // title
	"Don Buchwald Theater", // location
	"12/21/23", // date
	"event-5.png", // imageFile
	"Brooklyn College students come see the play El Huracán performed in the Don Buchwald Theater. A powerful tale of family and forgiveness, El Huracán, written by Miami native and recent Academy Award winner Charise Castro Smith (Disney's Encanto) reveals what can be rebuilt in the aftermath of life's most devastating tempests and what can never be replaced. This event requires tickets to gain admission. No food or drinks in the venue. We hope to see you soon!", // description
	["theater"], // eventTypes
	[6, 2] // relatedEvents
));

allEventsList.push(new Event(
	6, // identifier
	"Eurydice", // title
	"New Workshop Theater", // location
	"1/17/24", // date
	"event-6.png", // imageFile
	"Brooklyn College students come see the play Eurydice performed in the New Workshop Theater. Eurydice is a 2003 play by Sarah Ruhl which retells the myth of Orpheus from the perspective of Eurydice, his wife. The story focuses on Eurydice's choice to return to Earth with Orpheus or to stay in the underworld with her father. Admission requires tickets to be shown at the entrance. No food or drinks in the venue. We hope to see you there!", // description
	["theater"], // eventTypes
	[5, 1] // relatedEvents
));

allEventsList.push(new Event(
	7, // identifier
	"BC Job Fair", // title
	"Student Center", // location
	"2/12/24", // date
	"event-7.png", // imageFile
	"Brooklyn College students come on down to the BC Job Fair to meet representatives of companies such as Google, Meta, Chase on job opportunities. Students will have a chance to discuss with representatives of these companies on internship opportunities as well as what employers look at when assessing potential employees. This event is free of charge. We hope to see you there!", // description
	["recruiting"], // eventTypes
	[8, 2] // relatedEvents
));

allEventsList.push(new Event(
	8, // identifier
	"Software Development Speaker", // title
	"148 Ingersoll Hall", // location
	"2/24/24", // date
	"event-8.png", // imageFile
	"Brooklyn College students come down to 148 Ingersoll Hall to attend a presentation held by experienced software developers in the industry to hear about their experiences and possible advice to building up your resume. These lectures will involve developers from companies such as Google, Meta, Twitter, and many more. We will also host a small workshop on how to build a portfolio and your resume to prepare you for the job hunt. This event is free of charge. We hope to see you there!", // description
	["recruiting"], // eventTypes
	[7, 5] // relatedEvents
));



// Functions for loading and saving the Interested and Going lists to localStorage

function loadEventsFromLocalStorage() {
	//console.log("Loading event data from local storage.");
	
	if (localStorage.getItem("eventboardGoingEvents")) {
		goingEvents = JSON.parse(localStorage.getItem("eventboardGoingEvents"));
	}

	if (localStorage.getItem("eventboardInterestedEvents")) {
		interestedEvents = JSON.parse(localStorage.getItem("eventboardInterestedEvents"));
	}
}

function saveEventsToLocalStorage() {
	//console.log("Saving event data to local storage.");
	
	localStorage.setItem("eventboardGoingEvents", JSON.stringify(goingEvents));
	localStorage.setItem("eventboardInterestedEvents", JSON.stringify(interestedEvents));
}
