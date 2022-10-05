
  function displayTime () {
    let today = moment().format("MMM Do, YYYY")
    $("#currentDay").text(today)
  }
  setInterval (displayTime, 1)

  function colorBlock () {
    let currentTime = moment().hours()
    console.log(currentTime)
  }