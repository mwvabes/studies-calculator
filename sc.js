

var courseTable = document.querySelector("#course-table");
var scoresOutput = document.querySelector("#scoresOutput");
var clearForm = document.querySelector("#clearForm");
var courseInput = document.querySelectorAll(".courseInput");

var plBasic = document.querySelector("#plBasic");
var mathBasic = document.querySelector("#mathBasic");
var langBasic = document.querySelector("#langBasic");
var plExt = document.querySelector("#plExt");
var mathExt = document.querySelector("#mathExt");
var langExt = document.querySelector("#langExt");
var biolExt = document.querySelector("#biolExt");
var chemExt = document.querySelector("#chemExt");
var philExt = document.querySelector("#philExt");
var physExt = document.querySelector("#physExt");
var geoExt = document.querySelector("#geoExt");
var histExt = document.querySelector("#histExt");
var csciExt = document.querySelector("#csciExt");
var wosExt = document.querySelector("#wosExt");
var coursesArr = [plBasic, mathBasic, langBasic, plExt, mathExt, langExt, biolExt, chemExt, philExt, physExt, geoExt, histExt, csciExt, wosExt];

function score() {
  scoresOutput.innerHTML = "abc";
  return 0;
}

function cutLast(str) {
  oldString = str.value;
  newString = oldString.substring(0, oldString.length - 1);
  return str.value = newString;
}

//Checks if user entered any letter or special char and deletes it (only numbers in input required)
function check() {
  
  for (i = 0; i < coursesArr.length; i++) {
    if ((coursesArr[i].value >= 0 && coursesArr[i].value <= 100) || coursesArr[i] == null) {}
    else if (coursesArr[i].value.slice(-1) == " ") {
      coursesArr[i].value = cutLast(coursesArr[i]);
    }
    else {
      coursesArr[i].value = cutLast(coursesArr[i]);
    }
  }
  
}

var filledStatus = 0;
// For the "reset" button to reset red cells or alerts of incorrect data
function filledStatusReset() {
  var inputsCorrect = document.querySelectorAll(".checkIfCorrect");
  for (i = 0; i < inputsCorrect.length; i++) {
    inputsCorrect[i].parentNode.parentNode.style.backgroundColor = "transparent";
    inputsCorrect[i].parentNode.parentNode.style.color = "";
  }
  filledStatus = 0;
  tdAlert.style.color = "green";
  setTimeout(function() {
      tdAlert.style.display = "none";
  }, 2000);
}

//Checks if input is filled correctly
function unFilled(input) {
  var cell = input.parentNode.parentNode;
  var tdAlert = document.querySelector("#tdAlert");
  if (input.value == "") 
  {
    cell.style.color = "#FFF";
    cell.style.backgroundColor = "#ff5c5c";
    tdAlert.style.color = "";
    tdAlert.style.display = "table-cell";
    tdAlert.style.value = "*Uzupełnij wartości poprawnie";
    filledStatus++;
  } 
  else if (input.value != "") 
  {
    filledStatus--;
    cell.style.color = "inherit";
    cell.style.backgroundColor = "transparent";
  }
  if (filledStatus == 0) 
  {
    tdAlert.style.color = "green";
    setTimeout(function() 
    {
      tdAlert.style.display = "none";
    }, 800);
  } 
}

/*function checkIfAnythingFilled() {
  var ifFilled = function checkSpecificFilled() {
    for (i = 0; i < courseInput.length; i++) {
      if (courseInput[i].value != "") return true;
      else return false;
  }
    
  if (ifFilled) courseResetTr.style.display = "table-cell";
  else courseResetTr.style.display = "";
    
  }
}*/

document.addEventListener('DOMContentLoaded', function() {
  courseTable.addEventListener("keydown", function() {
  score();
}, false);
});

courseTable.addEventListener("keyup", function() {
  check();
}, false);

plBasic.addEventListener("blur", function() {
  unFilled(plBasic);
}, false);

mathBasic.addEventListener("blur", function() {
  unFilled(mathBasic);
}, false);

langBasic.addEventListener("blur", function() {
  unFilled(langBasic);
}, false);

/*plBasic.addEventListener("keyup", function() {
  unFilled(plBasic);
}, false);

mathBasic.addEventListener("keyup", function() {
  unFilled(mathBasic);
}, false);

langBasic.addEventListener("keyup", function() {
  unFilled(langBasic);
}, false);*/

clearForm.addEventListener("click", function() {
  filledStatusReset();
}, false);

/*courseInput.addEventListener("blur", function() {
  checkIfAnythingFilled();
}, false);*/
  
