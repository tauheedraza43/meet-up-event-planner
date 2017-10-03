var database = firebase.database().ref();
var events = document.getElementById("events");
var currentUser = JSON.parse(localStorage.getItem('currentUser'));

database.child("events").on("child_added", function(snapshot){
    var obj = snapshot.val();
    obj.id = snapshot.key;
    render(obj);
})

database.child("userInfo").on("child_added", function(snapshot){
    var obj = snapshot.val();
    obj.id = snapshot.key;
})

function render(event){
    var mainDiv = document.createElement("DIV");
    // mainDiv.setAttribute("id", event.id);
    mainDiv.setAttribute("class", "panel-group");

    var panel = document.createElement("DIV");
    panel.setAttribute("class", "panel panel-default");

    var panelHeading = document.createElement("DIV");
    panelHeading.setAttribute("class", "panel-heading");

    var headingTag = document.createElement("H3");
    headingTag.setAttribute("class", "panel-title");
    var a = document.createElement("A");
    var aText = document.createTextNode( event.name);
    a.setAttribute("data-toggle", "collapse")
    a.setAttribute("href", "#col"+event.id);
    a.appendChild(aText);

    var collapsePanel = document.createElement("DIV");
    collapsePanel.setAttribute("id", "col"+event.id);
    collapsePanel.setAttribute("class", "panel-collapse collapse");

    var panelBody = document.createElement("DIV");
    panelBody.setAttribute("class", "panel-body");

    var orgName = document.createElement("H5");
    orgNameText = document.createTextNode( "Event Organizer: " + currentUser.fName + " " + currentUser.lName);
    orgName.appendChild(orgNameText)

    var eventDate = document.createElement("H6");
    eventDateText = document.createTextNode("Held On: " + event.date);
    eventDate.appendChild(eventDateText);

    var time = document.createElement("H6");
    timeText = document.createTextNode("Starting Time: " + event.time);
    time.appendChild(timeText);

    var location = document.createElement("H2");
    locationText = document.createTextNode("Venue: " + event.location);
    location.appendChild(locationText);

    var about = document.createElement("h6");
    aboutText = document.createTextNode("About Event: " + event.description)
    about.appendChild(aboutText);

    var btnBox = document.createElement("DIV");
    btnBox.setAttribute("class" , "btn-box");
    var button = document.createElement("BUTTON");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = "Going";
    button.setAttribute("id", event.id);
    button.setAttribute("onClick", "goingEvent(this.id)")
    btnBox.appendChild(button);
    

    panelBody.appendChild(orgName);
    panelBody.appendChild(eventDate);
    panelBody.appendChild(time);
    panelBody.appendChild(location);
    panelBody.appendChild(about);
    panelBody.appendChild(btnBox);

    collapsePanel.appendChild(panelBody);


    panel.appendChild(panelHeading);
    panelHeading.appendChild(headingTag);
    headingTag.appendChild(a);

    panel.appendChild(collapsePanel);

    mainDiv.appendChild(panel)

    events.appendChild(mainDiv);

}

function goingEvent(btnId){
    var goingUser = JSON.parse(localStorage.getItem('currentUser'))

    // var myEvent = {
    //   id: eventId,
    //   name: eventName,
    //   date: eventDate,
    //   description : eventDescription,
    //   location: eventLocation,
    //   userName: currentUser.name,
    //   time: eventTime,
    // }
    // console.log(myEvent)
    // document.getElementById(eventId).style.border = "1px solid red"

            if(goingUser.eventarray==undefined){
                goingUser.eventarray=[];
                goingUser.eventarray.push(btnId);
                document.getElementById(btnId).innerHTML="Going &#10004;"
                localStorage.removeItem("currentUser");
                localStorage.setItem("currentUser",JSON.stringify(goingUser))
                database.child("userInfo").child(userInfo.id).set(goingUser)
                
            }
            else{
                var x=goingUser.eventarray.length;
                var boolean=false;
                for(var i=0; i<x;i++){
                if(goingUser.eventarray[i]==btnId){
                    $("#newsfeedmodal").modal("show")
                    boolean=true;
                }      
                }

                if(boolean==false){
                // localStorage.removeItem("currentUser");        
                goingUser.eventarray.push(btnId);
                document.getElementById(btnId).innerHTML="&#10004;"
                
                // alert()
                localStorage.setItem("user",JSON.stringify(goingUser))
                database.child("user").child(useruid).set(goingUser)
                
                }
                
            }


    // database.child("intrested").push(myEvent).then(
    //   alert("added successfully")
    // )

}



var userName = JSON.parse(localStorage.getItem('currentUser')); 
var greetName = document.getElementById("greet-name");
greetName.innerHTML = userName.fName;
