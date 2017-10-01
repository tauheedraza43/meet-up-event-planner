var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var fNameInput = document.getElementById("firstName");
var lNameInput = document.getElementById("lastName");
var cellNoInput = document.getElementById("cellNo");
var ageInput = document.getElementById("age");
var modal = document.getElementById("myModal");
var errorMsg = document.getElementById("error-msg");
var database = firebase.database().ref("/");
var auth = firebase.auth();  // access authentication service

function signup() {
        if(emailInput.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Email Adress Required..";7
            emailInput.style.border = "1px solid red";
            emailInput.focus();
        }else if(passwordInput.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Password Required.."
            passwordInput.style.border = "1px solid red";
            passwordInput.focus();
        }else if(fNameInput.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "First Name Required.."
            fNameInput.style.border = "1px solid red";
            fNameInput.focus();
        }else if(lNameInput.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Last Name Required.."
            lNameInput.style.border = "1px solid red";
            lNameInput.focus();
        }else if(cellNoInput.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Required Your Cell No.."
            cellNoInput.style.border = "1px solid red";
            cellNoInput.focus();
        }else if(ageInput.value == ""){
            $("#myModal").modal('show'); 
            errorMsg.innerHTML = "Age Required.."
            ageInput.style.border = "1px solid red";
            ageInput.focus();
        }else{


            var fName1 = fNameInput.value.slice(0,1).toUpperCase();
            var fName2 = fNameInput.value.slice(1).toLowerCase();
            var fName = fName1+fName2;
            var lName1 = lNameInput.value.slice(0,1).toUpperCase();
            var lName2 = lNameInput.value.slice(0,1).toLowerCase();
            var lName = lName1+lName2;
            var email = emailInput.value;
            var password = passwordInput.value;
            var cellNo = cellNoInput.value;
            var age = ageInput.value;

    // var fullName = fName.slice(0,1).toUpperCase()+fName.slice(0,1).toLowerCase() + " " + lName.slice(0,1).toUpperCase()+lName.slice(1).toLowerCase(); 
    auth.createUserWithEmailAndPassword(email, password) //promise
        .then(function (user) {
           var currentUser = {
                email : email,
                fName : fName,
                lName : lName,
                cellNo : cellNo,
                age : age,
            }
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            database.child("userInfo").push(currentUser);
            location = 'login.html';
        })
        .catch(function (error) {
            alert(error.message);
        })
    }

}

function login() {
    var email = emailInput.value;
    var password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function(user){
            location = 'home.html';
        })
        .catch(function(error){
            alert("error", error.message);
        })
}


  



