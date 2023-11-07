// event.js
// ====
// This file is included at the end of event.html

"use strict";

function addDetails() {
	// Get the event id from the URL
	const parameters = new URLSearchParams(window.location.search);
	const index = parameters.get("id");
	const event = allEventsList.find(x => (x.identifier == index));
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
	
	event.relatedEvents.forEach((identifier, index) => {
		const relatedEvent = allEventsList.find(x => (x.identifier == identifier));
		relatedSection.appendChild(relatedEvent.createDiv(false));
	});
}

// Main
// Set the image and text using data from the event with the matching ID 
addDetails();
