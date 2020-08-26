$(document).ready(function() {
  //Graph Calculations
  $("#optimism").css( "width", optimism * 10 + '%');
  $("#optimism").css( "height", optimism * 10 + '%');

  $("#efficacy").css( "width", efficacy * 10 + '%');
  $("#efficacy").css( "height", efficacy * 10 + '%');

  $("#determination").css( "width", determination * 10 + '%');
  $("#determination").css( "height", determination * 10 + '%');

  $("#temper").css( "width", temper * 10 + '%');
  $("#temper").css( "height", temper * 10 + '%');

  $("#assured").css( "width", assured * 10 + '%');
  $("#assured").css( "height", assured * 10 + '%');

  $("#positive").css( "width", positive * 10 + '%');
  $("#positive").css( "height", positive * 10 + '%');

  $("#adversity").css( "width", adversity * 10 + '%');
  $("#adversity").css( "height",adversity * 10 + '%');

//Resilience Conditions
  if (7.6 < optimism && optimism < 4.6) {
    $("#optimism").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#optimism-label").css("background", "#C18625");
    $("#optimism-score").css("color", "#ECA327");
	}
  if (7.6 < efficacy && efficacy < 4.6) {
    $("#efficacy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#efficacy").css("background", "#C18625");
    $("#efficacy-score").css("color", "#ECA327");
	}
  if (7.6 < determination && determination < 4.6) {
    $("#determination").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#determination-label").css("background", "#C18625");
    $("#determination-score").css("color", "#ECA327");
  }
  if (7.6 < temper && temper < 4.6) {
    $("#temper").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#temper-label").css("background", "#C18625");
    $("#temper-score").css("color", "#ECA327");
  }
  if (7.6 < assured && assured < 4.6) {
    $("#assured").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#assured-label").css("background", "#C18625");
    $("#assured-score").css("color", "#ECA327");
  }
  if (7.6 < positive && positive < 4.6) {
    $("#positive").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#positive-label").css("background", "#C18625");
    $("#positive-score").css("color", "#ECA327");
  }
  if (7.6 < adversity && adversity < 4.6) {
    $("#adversity").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#adversity-label").css("background", "#C18625");
    $("#adversity-score").css("color", "#ECA327");
  }
});
