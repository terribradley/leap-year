var leapYear = function(num) {
  if (num % 4 === 0 && num % 100 != 0) {
    return true;
  } else {
  return false;
  }

}




$(document).ready(function(){
  $(".year-form#submit").submit(function(event) {
    event.preventDefault();
    var year = $("#year-input").val();
    leapYear(year);
  })
});
