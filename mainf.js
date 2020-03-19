
function ValidateForm() {
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var msg = document.getElementById('msg');


  removeMessage();
  var valid = true;


  console.log("You entered: " + firstname.value + " " + lastname.value);


  var radios = document.getElementsByName('gender');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      console.log("Gender: " + radios[i].value);

      // only one radio can be logically checked, don't check the rest
      break;
    }
  }


  //Errors on invalid input

  if (firstname.value.length == 0) {
    firstname.className = "error-input";
    valid = false;
  }
  if (lastname.value.length == 0) {
    lastname.className = "error-input";
    valid = false;
  }
  if (msg.value.length == 0) {
    msg.className = "error-input";
    valid = false;
  }
  return valid;
}

//Remove error when valid input

function removeMessage() {
  var errorinput = document.querySelectorAll(".error-input");
  [].forEach.call(errorinput, function (el) {
    el.classList.remove("error-input");
  });
}


//Display banner/close banner when pressing x

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () { div.style.display = "none"; }, 600);
  }
}


//Display value from text input

function changeText(){
	var userInput = document.getElementById('firstname').value;
	document.getElementById('boldStuff2').innerHTML = userInput;
}


//Display banner when pressing button submit

function showElem() {
  // get the banner
  var myBanner = document.getElementById("alert");
  var firstname = document.getElementById('firstname');
  

  // get the current value of the banner's visiblity property
  var visibilitySetting = document.getElementById("alert").style.visibility = "hidden";

  // now toggle the banner, depending on current state
  if (firstname.value.length != 0 && lastname.value.length != 0 && msg.value.length != 0) {
    // banner has to be visbile
    document.getElementById("alert").style.visibility = "visible";
    
  }
  else {
    // banner has to be hidden
    document.getElementById("alert").style.visibility = "hidden";
  }
}


//prevent page from loading
var form = document.querySelector('Form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);
})



// // show value from input
// function myName()
//     {
//         var input = document.getElementById('firstname').value;
//         var div = document.getElementById('alert').innerHTML;
//         div.innerHTML = div + input;
//     }



