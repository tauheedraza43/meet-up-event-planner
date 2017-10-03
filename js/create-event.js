var eventName = document.getElementById("eventName"); 
var eventLocation = document.getElementById("eventLocation"); 
var eventDate = document.getElementById("eventDate"); 
var eventTime = document.getElementById("eventTime"); 
var eventDescription = document.getElementById("eventDescription");
var remarks = document.getElementById("remarks");
var errorMsg = document.getElementById("error-msg")

var currentUser = JSON.parse(localStorage.getItem('currentUser'));

var database = firebase.database().ref("/");

function addEvent(){
    if(eventName.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Event Name Required..";
            eventName.style.border = "1px solid red";
            eventName.focus();
    }else if(eventLocation.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Event Location Required..";
            eventLocation.style.border = "1px solid red";
            eventLocation.focus();
    }else if(eventDate.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Event Name Required..";
            eventLocation.style.border = "1px solid red";
            eventLocation.focus();
    }else if(eventTime.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Event Name Required..";
            eventTime.style.border = "1px solid red";
            eventTime.focus();
    }else if(eventDescription.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Event Name Required..";
            eventDescription.style.border = "1px solid red";
            eventDescription.focus();
    }else{
    eventInfo = {
        organiser : currentUser.fName + " " + currentUser.lName,
        name : eventName.value,
        location : eventLocation.value,
        date : eventDate.value,
        time : eventTime.value,
        description : eventDescription.value,
    }

    eventName.value = "";
    eventLocation.value = "";
    eventDate.value = "";
    eventTime.value = "";
    eventDescription.value = "";
    
    remarks.innerHTML = "Event Added Successfully";
    database.child("events").push(eventInfo);

    } 
}




function logout(){
    localStorage.clear();
    location = "index.html";
}

var userName = JSON.parse(localStorage.getItem('currentUser')); 
var greetName = document.getElementById("greet-name");
if(userName.fName == undefined){
    location = "index.html";
    alert("You Must Have To Sign In For View This Page..");
}else{
greetName.innerHTML = userName.fName;
console.log(userName);
}
