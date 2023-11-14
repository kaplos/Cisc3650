let editableSection = document.querySelector("#col-md-6-left");
let defaultEditableSection = editableSection.innerHTML;
//checks if theres an already saved data in local storage for the editable section
// if not it assigns the default value to the editable section
editableSection.innerHTML = (localStorage.getItem("col-md-6-left")===null? defaultEditableSection:localStorage.getItem("col-md-6-left"));
window.onload = function() {
    if(!localStorage.getItem("col-md-6-left")===null){
        editableSection.innerHTML = localStorage.getItem("col-md-6-left");
    }
};

let saveButton = document.createElement("button");
(localStorage.getItem("col-md-6-left")===null? editableSection.appendChild(saveButton) : "" );    
saveButton.setAttribute("onclick", "saveData()");
saveButton.innerHTML = "Save";
let editableDiv = document.querySelectorAll(".editable")

editableDiv.forEach((div) =>{
    
    
    div.addEventListener("click", () =>{
        saveData(div.parentElement);
    });
});
//console.log(editableSection.innerHTML);

function saveData(){
    localStorage.setItem("col-md-6-left", editableSection.innerHTML);
    //console.log("saved");
}
document.addEventListener("keydown", (event) =>{
    if(event.key == "Enter" && !event.shiftKey){
        event.preventDefault();
        saveData();
        console.log(event);
    }
});
