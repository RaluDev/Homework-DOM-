function ValidateForm(){
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var msg = document.getElementById('msg');
    removeMessage();
    var valid=true;

 //Errors on invalid input

    if(firstname.value.length==0){
         firstname.className="error-input";
         valid=false;
    }
    if(lastname.value.length==0){
        lastname.className="error-input";
        valid=false;
   }
     if(msg.value.length==0){
        msg.className="error-input";
        valid=false;
}
    return valid;
}

//Remove error when valid input

function removeMessage(){
    var errorinput = document.querySelectorAll(".error-input");
    [].forEach.call(errorinput, function(el) {
        el.classList.remove ("error-input");
    });
}


//Display banner/close banner when pressing x

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

//Display banner when pressing button submit

// function showElem() {
//     document.getElementById("alert").style.visibility = "visible"; 
//   }

  function showElem() {
    // get the banner
     var myBanner = document.getElementById("alert");
   
      // get the current value of the banner's visiblity property
     var visibilitySetting = document.getElementById("alert").style.visibility = "hidden";
   
    // now toggle the banner, depending on current state
   if (firstname.value.length!=0 && lastname.value.length!=0 && msg.value.length!=0) {
       // banner has to be visbile
       document.getElementById("alert").style.visibility = "visible"; 
     }
   else {
       // banner has to be hidden
       document.getElementById("alert").style.visibility = "hidden";
      }
 }
 

//  prevent page from loading
 document.getElementById("buttonS").addEventListener("click", function(event){
  event.preventDefault()
});



// show value from input
function myName()
    {
        var input = document.getElementById('firstname').value;
        var div = document.getElementById('alert').innerHTML;
        div.innerHTML = div + input;
    }



