// event.js
// ====
// This file is included at the end of event.html

"use strict";

function addDetails() {
	// Get the event id from the URL
	const parameters = new URLSearchParams(window.location.search);
	const id = parameters.get("id");
	const event = allEventsList.find(x => (x.identifier == id));
	if (event == null) return;
	
	// Image
	document.getElementById("eventImage").src = "img/"+event.imageFile;
	
	// Text 
	document.getElementById("eventTitle").appendChild(document.createTextNode(event.title));
	document.getElementById("eventLocation").appendChild(document.createTextNode(event.location));
	document.getElementById("eventDate").appendChild(document.createTextNode(event.date));
	document.getElementById("eventDescription").appendChild(document.createTextNode(event.description));
	
	// Related Events
	const relatedSection = document.getElementById("relatedEventsSection");
	
	event.relatedEvents.forEach((identifier, id) => {
		const relatedEvent = allEventsList.find(x => (x.identifier == identifier));
		relatedSection.appendChild(relatedEvent.createDiv(false));
	});
	
	// Update the buttons based on the Interested and Going lists
	if (interestedEvents.includes(event.identifier)) setCheckbox("interested", true);
	if (goingEvents.includes(event.identifier)) setCheckbox("going", true);
	
}

function setCheckbox(prefix, state) {
	document.getElementById(prefix+"Checkmark").src = "img/checkbox-"+(state? "on":"off")+"@2x.png";
}

// Main
// Set the image and text using data from the event with the matching ID 
addDetails();

// Add event listeners
document.getElementById("interestedButton").addEventListener('click', ({target}) => {
	setCheckbox("interested", true);
});

document.getElementById("goingButton").addEventListener('click', ({target}) => {
	setCheckbox("going", true);
});
