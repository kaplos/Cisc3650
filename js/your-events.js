// your-events.js
// ====
// This file is included at the end of your-events.html

"use strict";

function addEvents(section, list) {
	let container = document.getElementById(section+"Section");

	// Add events
	list.forEach((identifier, index) => {
		const event = allEventsList.find(x => (x.identifier == identifier));
		if (event) container.appendChild(event.createDiv(true));
	});
	
	// Hide placeholder
	let placeholder = document.getElementById(section+"PlaceholderStatic");
	placeholder.hidden = (list.length > 0);
}

function removeEvents(section) {
	// Remove all elements except the header from the section
	let container = document.getElementById(section+"Section");
	let toRemove = [];
	for (const child of container.children) {
		if (!child.id.endsWith("Static")) toRemove.push(child);
	}
	for (const child of toRemove) container.removeChild(child);
}

// Main
// Populate the list with events the user is going to or is interested in
loadEventsFromLocalStorage();
addEvents("going", goingEvents);
addEvents("interested", interestedEvents);

