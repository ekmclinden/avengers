var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var number3 = parseInt($("#add2").val());
    var result = add(number1, number2, number3);
    $("#output").text(result); 

if (number1===0) {
  $(".warning").show();
}
if (result < 4) {
  $("#mcdonalds").hide();
  $("#home").show();
}
  if (result > 7) {
    $("#home").hide();
    $("#mcdonalds").show();
    }

  }); 
}); 