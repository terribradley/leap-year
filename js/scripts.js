var allowableInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

var leapYear = function(num) {
  var boolean = true
  var numLength =num.length;
  for (i=0; i < numLength; i ++) {
    if (allowableInputs.includes(num.charAt(i))) {}
    else {
      boolean = false
    }
  };
  var number = parseInt(num);
  if (!boolean) {
    alert ("unallowed input")
    return false;
  }
  else if (number % 4 === 0 && number % 100 != 0 || number % 400 === 0) {
    return true;
  } else {
  return false;
  }

};


$(document).ready(function() {
  $(".year-form").submit(function(event) {
    event.preventDefault();
    var year = $("#year-input").val();
    if (leapYear(year)) {
      $("#result").text(year + " is a leap year!")
    } else {
      $("#result").text(year + " is not a leap year.")
    }
  });

});
