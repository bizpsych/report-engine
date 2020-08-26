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

//Resilience Color Conditions
  if (optimism >= 4.6 && optimism <= 7.5) {
    $("#optimism").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#optimism-label").css("background", "#C18625");
    $("#optimism-score").css("color", "#ECA327");
	}
  if (optimism >= 0 && optimism <= 4.5) {
    $("#optimism").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#optimism-label").css("background", "#CE4427");
    $("#optimism-score").css("color", "#F25C24");
	}
  if (efficacy >= 4.6 && efficacy <= 7.5) {
    $("#efficacy").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#efficacy-label").css("background", "#C18625");
    $("#efficacy-score").css("color", "#ECA327");
	}
  if (efficacy >= 0 && efficacy <= 4.5) {
    $("#efficacy").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#efficacy-label").css("background", "#CE4427");
    $("#efficacy-score").css("color", "#F25C24");
	}
  if (determination >= 4.6 && determination <= 7.5) {
    $("#determination").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#determination-label").css("background", "#C18625");
    $("#determination-score").css("color", "#ECA327");
	}
  if (determination >= 0 && determination <= 4.5) {
    $("#determination").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#determination-label").css("background", "#CE4427");
    $("#determination-score").css("color", "#F25C24");
	}
  if (temper >= 4.6 && temper <= 7.5) {
    $("#temper").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#temper-label").css("background", "#C18625");
    $("#temper-score").css("color", "#ECA327");
	}
  if (temper >= 0 && temper <= 4.5) {
    $("#temper").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#temper-label").css("background", "#CE4427");
    $("#temper-score").css("color", "#F25C24");
	}
  if (assured >= 4.6 && assured <= 7.5) {
    $("#assured").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#assured-label").css("background", "#C18625");
    $("#assured-score").css("color", "#ECA327");
	}
  if (assured >= 0 && assured <= 4.5) {
    $("#assured").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#assured-label").css("background", "#CE4427");
    $("#assured-score").css("color", "#F25C24");
	}
  if (positive >= 4.6 && positive <= 7.5) {
    $("#positive").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#positive-label").css("background", "#C18625");
    $("#positive-score").css("color", "#ECA327");
	}
  if (positive >= 0 && positive <= 4.5) {
    $("#positive").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#positive-label").css("background", "#CE4427");
    $("#positive-score").css("color", "#F25C24");
	}
  if (adversity >= 4.6 && adversity <= 7.5) {
    $("#adversity").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#adversity-label").css("background", "#C18625");
    $("#adversity-score").css("color", "#ECA327");
	}
  if (adversity >= 0 && adversity <= 4.5) {
    $("#adversity").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#adversity-label").css("background", "#CE4427");
    $("#adversity-score").css("color", "#F25C24");
	}

//Optimism Detailed Metrics
if (optimism >= 0 && optimism <= 2.5) {
  $("#optimism-lowest").show();
  $("#optimism-low").hide();
  $("#optimism-mid").hide();
  $("#optimism-high").hide();
}
if (optimism >= 2.6 && optimism <= 5) {
  $("#optimism-lowest").hide();
  $("#optimism-low").show();
  $("#optimism-mid").hide();
  $("#optimism-high").hide();
}
if (optimism >= 5.1 && optimism <= 7.5) {
  $("#optimism-lowest").hide();
  $("#optimism-low").hide();
  $("#optimism-mid").show();
  $("#optimism-high").hide();
}
if (optimism >= 7.6 && optimism <= 10) {
  $("#optimism-lowest").hide();
  $("#optimism-low").hide();
  $("#optimism-mid").hide();
  $("#optimism-high").show();
}

//Self-Efficacy Detailed Metrics
if (efficacy >= 0 && efficacy <= 2.5) {
  $("#efficacy-lowest").show();
  $("#efficacy-low").hide();
  $("#efficacy-mid").hide();
  $("#efficacy-high").hide();
}
if (efficacy >= 2.6 && efficacy <= 5) {
  $("#efficacy-lowest").hide();
  $("#efficacy-low").show();
  $("#efficacy-mid").hide();
  $("#efficacy-high").hide();
}
if (efficacy >= 5.1 && efficacy <= 7.5) {
  $("#efficacy-lowest").hide();
  $("#efficacy-low").hide();
  $("#efficacy-mid").show();
  $("#efficacy-high").hide();
}
if (efficacy >= 7.6 && efficacy <= 10) {
  $("#efficacy-lowest").hide();
  $("#efficacy-low").hide();
  $("#efficacy-mid").hide();
  $("#efficacy-high").show();
}

//Determination Detailed Metrics
if (determination >= 0 && determination <= 2.5) {
  $("#determination-lowest").show();
  $("#determination-low").hide();
  $("#determination-mid").hide();
  $("#determination-high").hide();
}
if (determination >= 2.6 && determination <= 5) {
  $("#determination-lowest").hide();
  $("#determination-low").show();
  $("#determination-mid").hide();
  $("#determination-high").hide();
}
if (determination >= 5.1 && determination <= 7.5) {
  $("#determination-lowest").hide();
  $("#determination-low").hide();
  $("#determination-mid").show();
  $("#determination-high").hide();
}
if (determination >= 7.6 && determination <= 10) {
  $("#determination-lowest").hide();
  $("#determination-low").hide();
  $("#determination-mid").hide();
  $("#determination-high").show();
}

//Mild Temper Detailed Metrics
if (temper >= 0 && temper <= 2.5) {
  $("#temper-lowest").show();
  $("#temper-low").hide();
  $("#temper-mid").hide();
  $("#temper-high").hide();
}
if (temper >= 2.6 && temper <= 5) {
  $("#temper-lowest").hide();
  $("#temper-low").show();
  $("#temper-mid").hide();
  $("#temper-high").hide();
}
if (temper >= 5.1 && temper <= 7.5) {
  $("#temper-lowest").hide();
  $("#temper-low").hide();
  $("#temper-mid").show();
  $("#temper-high").hide();
}
if (temper >= 7.6 && temper <= 10) {
  $("#temper-lowest").hide();
  $("#temper-low").hide();
  $("#temper-mid").hide();
  $("#temper-high").show();
}

//Self-Assured Detailed Metrics
if (assured >= 0 && assured <= 2.5) {
  $("#assured-lowest").show();
  $("#assured-low").hide();
  $("#assured-mid").hide();
  $("#assured-high").hide();
}
if (assured >= 2.6 && assured <= 5) {
  $("#assured-lowest").hide();
  $("#assured-low").show();
  $("#assured-mid").hide();
  $("#assured-high").hide();
}
if (assured >= 5.1 && assured <= 7.5) {
  $("#assured-lowest").hide();
  $("#assured-low").hide();
  $("#assured-mid").show();
  $("#assured-high").hide();
}
if (assured >= 7.6 && assured <= 10) {
  $("#assured-lowest").hide();
  $("#assured-low").hide();
  $("#assured-mid").hide();
  $("#assured-high").show();
}

//Positive Reinterpretation Detailed Metrics
if (positive >= 0 && positive <= 2.5) {
  $("#positive-lowest").show();
  $("#positive-low").hide();
  $("#positive-mid").hide();
  $("#positive-high").hide();
}
if (positive >= 2.6 && positive <= 5) {
  $("#positive-lowest").hide();
  $("#positive-low").show();
  $("#positive-mid").hide();
  $("#positive-high").hide();
}
if (positive >= 5.1 && positive <= 7.5) {
  $("#positive-lowest").hide();
  $("#positive-low").hide();
  $("#positive-mid").show();
  $("#positive-high").hide();
}
if (positive >= 7.6 && positive <= 10) {
  $("#positive-lowest").hide();
  $("#positive-low").hide();
  $("#positive-mid").hide();
  $("#positive-high").show();
}

//Facing Adversity Detailed Metrics
if (adversity >= 0 && adversity <= 2.5) {
  $("#adversity-lowest").show();
  $("#adversity-low").hide();
  $("#adversity-mid").hide();
  $("#adversity-high").hide();
}
if (adversity >= 2.6 && adversity <= 5) {
  $("#adversity-lowest").hide();
  $("#adversity-low").show();
  $("#adversity-mid").hide();
  $("#adversity-high").hide();
}
if (adversity >= 5.1 && adversity <= 7.5) {
  $("#adversity-lowest").hide();
  $("#adversity-low").hide();
  $("#adversity-mid").show();
  $("#adversity-high").hide();
}
if (adversity >= 7.6 && adversity <= 10) {
  $("#adversity-lowest").hide();
  $("#adversity-low").hide();
  $("#adversity-mid").hide();
  $("#adversity-high").show();
}
});
