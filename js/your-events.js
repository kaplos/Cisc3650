// your-events.js
// ====
// This file is included at the end of your-events.html

"use strict";

function addEvents(section, list) {
	let container = document.getElementById(section);

	list.forEach((identifier, index) => {
		const event = allEventsList.find(x => (x.identifier == identifier));
		if (event) container.appendChild(event.createDiv(true));
	});
}

function removeEvents(section) {
	// Remove all elements except the header from the section
	let container = document.getElementById(section);
	let toRemove = [];
	for (const child of container.children) {
		if (!child.id.endsWith("Header")) toRemove.push(child);
	}
	for (const child of toRemove) container.removeChild(child);
}

// Main
// Populate the list with events the user is going to or is interested in

var goingEventsList = [ 1, 2 ];
var interestedEventsList = [ 5, 7 ];

addEvents("goingSection", goingEventsList);
addEvents("interestedSection", interestedEventsList);

