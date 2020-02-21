var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add3").val());
    var result = add(number1, number2, number3);
    if ((number1 > 0) && (number2 > 0) && (number3 > 0)) {
      $("#output").text(result); 
    }
    else { 
      alert ("you seriously couldn't fill in 3 boxes?? try again, slacker")
    }
  
   



  }); 
}); 