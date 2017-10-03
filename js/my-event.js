var database = firebase.database().ref("/");;
var events = document.getElementById("events")

function myEventFunc(){
var currentUser=JSON.parse(localStorage.getItem("currentUser"));
var eventarray=currentUser.eventarray;

database.child("events").on("child_added", function(snap){
    var obj=snap.val();
    obj.key=snap.key

    for(var i=0; i<eventarray.length;i++){
        if(eventarray[i]==obj.key){
            
                    var mainDiv = document.createElement("DIV");
                    // mainDiv.setAttribute("id", event.id);
                    mainDiv.setAttribute("class", "panel-group");
                    mainDiv.setAttribute("id", "panel"+obj.id);

                    var panel = document.createElement("DIV");
                    panel.setAttribute("class", "panel panel-default");

                    var panelHeading = document.createElement("DIV");
                    panelHeading.setAttribute("class", "panel-heading");

                    var headingTag = document.createElement("H3");
                    headingTag.setAttribute("class", "panel-title");
                    var a = document.createElement("A");
                    var aText = document.createTextNode( obj.name);
                    a.setAttribute("data-toggle", "collapse")
                    a.setAttribute("href", "#col"+obj.id);
                    a.appendChild(aText);

                    var collapsePanel = document.createElement("DIV");
                    collapsePanel.setAttribute("id", "col"+obj.id);
                    collapsePanel.setAttribute("class", "panel-collapse collapse");

                    var panelBody = document.createElement("DIV");
                    panelBody.setAttribute("class", "panel-body");

                    var orgName = document.createElement("H5");
                    orgNameText = document.createTextNode( "Event Organizer: " + currentUser.fName + " " + currentUser.lName);
                    orgName.appendChild(orgNameText)

                    var eventDate = document.createElement("H6");
                    eventDateText = document.createTextNode("Held On: " + obj.date);
                    eventDate.appendChild(eventDateText);

                    var time = document.createElement("H6");
                    timeText = document.createTextNode("Starting Time: " + obj.time);
                    time.appendChild(timeText);

                    var location = document.createElement("H2");
                    locationText = document.createTextNode("Venue: " + obj.location);
                    location.appendChild(locationText);

                    var about = document.createElement("h6");
                    aboutText = document.createTextNode("About Event: " + obj.description)
                    about.appendChild(aboutText);

                    var btnBox = document.createElement("DIV");
                    btnBox.setAttribute("class" , "btn-box");
                    var button = document.createElement("BUTTON");
                    button.setAttribute("class", "btn btn-primary");
                    button.innerHTML = "Not Going";
                    button.setAttribute("id", obj.id);
                    button.setAttribute("onClick", "notGoing(this.id)")
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


            // var maincarddiv=document.createElement("div");
            // maincarddiv.setAttribute("class","card text-center")
            // maincarddiv.setAttribute("id","eventoutput")
            
            
            
            // var cardheader=document.createElement("div");
            // cardheader.setAttribute("class","card-header");
            // var headertextnode=document.createTextNode(obj.eventname);
            // cardheader.appendChild(headertextnode);
            
            
            // var cardbody=document.createElement("div");
            // cardbody.setAttribute("class","card-body");
            
            // var cardheadingmain=document.createElement("h1");
            // cardheadingmain.setAttribute("class","card-title");
            // var cardheadingmaintext=document.createTextNode("Venue");
            // cardheadingmain.appendChild(cardheadingmaintext);
            
            
            // var cardheading=document.createElement('h4');
            // cardheading.setAttribute("class","card-title");
            // var cardheadingtext=document.createTextNode(obj.eventlocation);
            // cardheading.appendChild(cardheadingtext);
            
            // var cardpara=document.createElement("p");
            // cardpara.setAttribute("class","card-text");
            // var cardparatext=document.createTextNode(obj.eventdescription);
            // cardpara.appendChild(cardparatext);
            
            
            
            
            // var cardfooter=document.createElement("div");
            // cardfooter.setAttribute("class","card-footer text-muted");
            
            // var footerdateheading=document.createElement("h4");
            // var footerdateheadingtext=document.createTextNode("Date");
            // footerdateheading.appendChild(footerdateheadingtext);
            // var footerdate=document.createElement("p");
            // var footerdatetext=document.createTextNode(obj.eventdate);
            // footerdate.appendChild(footerdatetext);
            
            
            
            
                    
            
            
            // var notgoingbutton=document.createElement("button");
            // notgoingbutton.setAttribute("class","btn btn-danger customgoingbtnstyle")
            // notgoingbutton.setAttribute("onclick","notgoingfunction(this.id)")

            // notgoingbutton.setAttribute("id",obj.key)
            // notgoingbutton.innerHTML="Not Going!"
            
            
            
            // var footertimeheading=document.createElement("h4");
            // var footertimeheadingtext=document.createTextNode("Time");
            // footertimeheading.appendChild(footertimeheadingtext);
            // var footertime=document.createElement("p");
            // var footertimetext=document.createTextNode(obj.eventtime);
            // footertime.appendChild(footertimetext);
            
            
            // var eventcreator=document.createElement("small");
            // eventcreator.style.cssFloat="right"
            // var eventcreatortext=document.createTextNode("Event Created By "+obj.eventcreator);
            // eventcreator.appendChild(eventcreatortext);
            
            
            
            
            
            
            // cardfooter.appendChild(footerdateheading);
            // cardfooter.appendChild(footerdate);
            
            // cardfooter.appendChild(footertimeheading);
            // cardfooter.appendChild(footertime);
            // cardfooter.appendChild(eventcreator)
            
            
            
            // cardbody.appendChild(cardheadingmain)
            // cardbody.appendChild(cardheading)
            // cardbody.appendChild(cardpara)
            // cardbody.appendChild(notgoingbutton)
            
            // maincarddiv.appendChild(cardheader);
            // maincarddiv.appendChild(cardbody);
            // maincarddiv.appendChild(cardfooter);
            // eventoutput.appendChild(maincarddiv);
        }
    }
})

}


function notGoing(btnid){
local=JSON.parse(localStorage.getItem("currentUser"));
var panelDiv = document.getElementById("panel"+btnid);

var useruid=local.useruid;

for(var i=0;i<local.eventarray.length;i++){
    if(local.eventarray[i]==btnid){
        
    local.eventarray.splice(btnid,1);
    break
    }
}
localStorage.setItem("currentUser",JSON.stringify(local));
database.child("userInfo").child("useruid").set(local)
var buttonparent=document.getElementById(btnid).parentElement;
var grandparent=buttonparent.parentElement;
var grandGrandParent = grandparent.parentElement;
grandparent.style.opacity="0.4";

setTimeout(function() {panelDiv.style.display="none";},2000)
}

myEventFunc();


var userName = JSON.parse(localStorage.getItem('currentUser')); 
var greetName = document.getElementById("greet-name");
greetName.innerHTML = userName.fName;
