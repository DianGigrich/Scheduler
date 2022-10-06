
//   TIME OF DAY
var timeCal = $("time")

for (var i = 0; i < timeCal.length; i++) {
    var setTime = 
    setTime = timeCal[i] + (0900)+1
    timeCal.setHours(setTime)
}

console.log(timeCal)
function displayTime () {
    let today = moment().format("MMM Do, YYYY")
    $("#currentDay").text(today)
    console.log(today)
  } 
  
  setInterval (displayTime, 1000)

 
//   COLOR FOR PASSING OF DAY
  function colorBlock () {
    let currentTime = moment().hours()
    console.log(currentTime)
    while (currentTime > timeCal) {
        $('#${timeCal}').addClass("past")
    }
  }

  colorBlock()

//   save to local storage
// var textInput = document.querySelector(".textInput");
// var textOutput = document.querySelector(".textOutput")
// var save = document.querySelector("#save")
//         var textArray = JSON.parse(localStorage.getItem("textArray"));

    // var save = )
// save.addEventListener("click", updateOutput) 
//       textOutput.textContent = localStorage.getItem('content')
//       textInput.value = localStorage.getItem('content')

// function updateOutput() {
//     localStorage.setItem('content', textInput.value);

//     textOutput.textContent = textInput.value;
// }
//         if (textArray === null) {
//             textArray = [];
//         }

// console.log(textInput) 

// localStorage.setItem("activity", JSON.stringify(textInput));



