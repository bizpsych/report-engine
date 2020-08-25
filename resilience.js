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
  if (optimism < 7.6) {
    $("#optimism").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#optimism-label").css("background", "#C18625");
    $("#optimism-score").css("color", "#ECA327");
	}
  if (optimism < 4.6) {
  	$("#optimism").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#optimism-label").css("background", "#CE4427");
    $("#optimism-score").css("color", "#F25C24");
	}
  if (efficacy < 7.6) {
    $("#efficacy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#efficacy").css("background", "#C18625");
    $("#efficacy-score").css("color", "#ECA327");
	}
  if (efficacy < 4.6) {
  	$("#efficacy").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#efficacy-label").css("background", "#CE4427");
    $("#efficacy-score").css("color", "#F25C24");
	}
  if (determination < 7.6) {
    $("#determination").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#determination-label").css("background", "#C18625");
    $("#determination-score").css("color", "#ECA327");
  }
  if (determination < 4.6) {
    $("#determination").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#determination-label").css("background", "#CE4427");
    $("#determination-score").css("color", "#F25C24");
  }
  if (temper < 7.6) {
    $("#temper").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#temper-label").css("background", "#C18625");
    $("#temper-score").css("color", "#ECA327");
  }
  if (temper < 4.6) {
    $("#temper").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#temper-label").css("background", "#CE4427");
    $("#temper-score").css("color", "#F25C24");
  }
  if (assured < 7.6) {
    $("#assured").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#assured-label").css("background", "#C18625");
    $("#assured-score").css("color", "#ECA327");
  }
  if (assured < 4.6) {
    $("#assured").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#assured-label").css("background", "#CE4427");
    $("#assured-score").css("color", "#F25C24");
  }
  if (positive < 7.6) {
    $("#positive").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#positive-label").css("background", "#C18625");
    $("#positive-score").css("color", "#ECA327");
  }
  if (positive < 4.6) {
    $("#positive").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#positive-label").css("background", "#CE4427");
    $("#positive-score").css("color", "#F25C24");
  }
  if (adversity < 7.6) {
    $("#adversity").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#adversity-label").css("background", "#C18625");
    $("#adversity-score").css("color", "#ECA327");
  }
  if (adversity < 4.6) {
    $("#adversity").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#adversity-label").css("background", "#CE4427");
    $("#adversity-score").css("color", "#F25C24");
  }
});
