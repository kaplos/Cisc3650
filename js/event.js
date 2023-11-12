// event.js
// ====
// This file is included at the end of event.html

"use strict";

function eventID() {
	// Get the event id from the URL
	const parameters = new URLSearchParams(window.location.search);
	return parseInt(parameters.get("id"));
}

function addDetails() {
	const id = eventID();
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
	if (interestedEvents.includes(id)) setCheckbox("interested", true);
	if (goingEvents.includes(id)) setCheckbox("going", true);
}

function setCheckbox(prefix, state) {
	document.getElementById(prefix+"Checkmark").src = "img/checkbox-"+(state? "on":"off")+"@2x.png";
}

function removeIdFromList(id, list) {
	const index = list.indexOf(id);
	if (index > -1) {
		list.splice(index, 1);
	}
}

function showMapModal() {
	// Create and show the modal
	let modal = new bootstrap.Modal(document.getElementById('mapModal'));
	modal.show();
}

// Main

// Load the I'm Interested/Going data from localStorage
loadEventsFromLocalStorage();

// Set the image and text using data from the event with the matching ID 
addDetails();

/* ! Event Listeners */

// Location modal
document.getElementById("eventLocation").addEventListener('click', (event) => {
	const id = eventID();
	showMapModal();
});

// Interested button
document.getElementById("interestedButton").addEventListener('click', ({target}) => {
	const id = eventID();
	if (interestedEvents.includes(id)) {
		setCheckbox("interested", false);
		removeIdFromList(id, interestedEvents);
	} else {
		setCheckbox("interested", true);
		interestedEvents.push(id);
	}
	
	// Save changes to localStorage
	saveEventsToLocalStorage();
});

// Going button
document.getElementById("goingButton").addEventListener('click', ({target}) => {
	const id = eventID();
	if (goingEvents.includes(id)) {
		setCheckbox("going", false);
		removeIdFromList(id, goingEvents);
	} else {
		setCheckbox("going", true);
		goingEvents.push(id);
	}
	
	// Save changes to localStorage
	saveEventsToLocalStorage();
});
