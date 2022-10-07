var save = document.querySelector(".saveBtn")


//   TIME OF DAY
var inputrow = [
    "#textInput1",
    "#textInput2",
    "#textInput3",
    "#textInput4",
    "#textInput5",
    "#textInput6",
    "#textInput7",
    "#textInput8",
    "#textInput9"
]


console.log(inputrow, "aftervariable")

function colors() {
    for (var i = 0; i <= inputrow.length; i++) {

        var currentHour = parseInt(moment().format("H"))
        // var currentHour = moment().hours();
        var hourCompare = parseInt(moment(9+i, "H").format("H"));

        console.log(currentHour, "current hour")

        if (currentHour < hourCompare) {
            $(inputrow[i]).addClass("future")
           console.log( "greater")
        }
        else if (currentHour == hourCompare) {
            $(inputrow[i]).addClass("present")
            
        }
    }
}

// TODAY'S TIME
function displayTime() {
    let today = moment().format("MMM Do, YYYY")
    $("#currentDay").text(today)
    console.log(today)
}

setInterval(displayTime, 1000)

colors()



//   SAVE TO LOCAL STORAGE
save.addEventListener("click", saveContent)

// 9am
var ti1 = document.querySelector("#textInput1");

ti1.textContent = localStorage.getItem('9am')

ti1.value = localStorage.getItem('9am')

// 10am
var ti2 = document.querySelector("#textInput2");

ti2.textContent = localStorage.getItem('10am')

ti2.value = localStorage.getItem('10am')

// 11am
var ti3 = document.querySelector("#textInput3");

ti3.textContent = localStorage.getItem('11am')

ti3.value.value = localStorage.getItem('11am')
// 12pm
var ti4 = document.querySelector("#textInput4");

ti4.textContent = localStorage.getItem('12pm')

ti4.value = localStorage.getItem('12pm')
// 1pm
var ti5 = document.querySelector("#textInput5");

ti5.textContent = localStorage.getItem('1pm')

ti5.value = localStorage.getItem('1pm')
// 2pm
var ti6 = document.querySelector("#textInput6");

ti6.textContent = localStorage.getItem('2pm')

ti6.value = localStorage.getItem('12pm')
// 3pm
var ti7 = document.querySelector("#textInput7");

ti7.textContent = localStorage.getItem('3pm')

ti7.value = localStorage.getItem('3pm')
// 4pm
var ti8 = document.querySelector("#textInput8");

ti8.textContent = localStorage.getItem('4pm')

ti8.value = localStorage.getItem('4pm')
// 5pm
var ti9 = document.querySelector("#textInput9");

ti9.textContent = localStorage.getItem('5pm')

ti9.value = localStorage.getItem('5pm')





function saveContent(event) {
    event.defaultPrevented
 
    localStorage.setItem('9am', ti1.value)
    localStorage.setItem('10am', ti2.value)
    localStorage.setItem('11am', ti3.value)
    localStorage.setItem('12pm', ti4.value)
    localStorage.setItem('1pm', ti5.value)
    localStorage.setItem('2pm', ti6.value)
    localStorage.setItem('3pm', ti7.value)
    localStorage.setItem('4pm', ti8.value)
    localStorage.setItem('5pm', ti9.value)

}
