var correct = 0;


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function validateEZAnswer1(){
  if(document.getElementById('Eq1').value == 20){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateEZAnswer2(){
  if(document.getElementById('Eq2').value == 6){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateEZAnswer3(){
  if(document.getElementById('Eq3').value == 2){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateEZAnswer4(){
  if(document.getElementById('Eq4').value == 11){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateHDAnswer1(){
  if(document.getElementById('Hq1').value == 6){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateHDAnswer2(){
  if(document.getElementById('Hq2').value == 2){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateHDAnswer3(){
  if(document.getElementById('Hq3').value == 144){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function validateHDAnswer4(){
  if(document.getElementById('Hq4').value == 15){
    correct += 1;
    setCookie("numberCorrect", correct, 300);
  }
}

function getResults(){
  var c = getCookie("numberCorrect");
  var d = (c/8) * 100;
  document.getElementById('score').innerHTML = d + "%";
}
