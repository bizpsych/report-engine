$(document).ready(function() {
  //Graph Calculations
  $("#assertiveness").css( "width", assertiveness * 10 + '%');
  $("#assertiveness").css( "height", assertiveness * 10 + '%');

  $("#security").css( "width", security * 10 + '%');
  $("#security").css( "height", security * 10 + '%');

  $("#thinking").css( "width", thinking * 10 + '%');
  $("#thinking").css( "height", thinking * 10 + '%');

  $("#confidence").css( "width", confidence * 10 + '%');
  $("#confidence").css( "height", confidence * 10 + '%');

  $("#trust").css( "width", trust * 10 + '%');
  $("#trust").css( "height", trust * 10 + '%');

  $("#composure").css( "width", composure * 10 + '%');
  $("#composure").css( "height", composure * 10 + '%');

  $("#ideas").css( "width", ideas * 10 + '%');
  $("#ideas").css( "height",ideas * 10 + '%');

//Color Conditions
  if (assertiveness >= 4.6 && assertiveness <= 7.5) {
    $("#assertiveness").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#assertiveness-label").css("background", "#C18625");
    $("#assertiveness-score").css("color", "#ECA327");
	}
  if (assertiveness >= 0 && assertiveness <= 4.5) {
    $("#assertiveness").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#assertiveness-label").css("background", "#CE4427");
    $("#assertiveness-score").css("color", "#F25C24");
	}
  if (security >= 4.6 && security <= 7.5) {
    $("#security").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#security-label").css("background", "#C18625");
    $("#security-score").css("color", "#ECA327");
	}
  if (security >= 0 && security <= 4.5) {
    $("#security").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#security-label").css("background", "#CE4427");
    $("#security-score").css("color", "#F25C24");
	}
  if (thinking >= 4.6 && thinking <= 7.5) {
    $("#thinking").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#thinking-label").css("background", "#C18625");
    $("#thinking-score").css("color", "#ECA327");
	}
  if (thinking >= 0 && thinking <= 4.5) {
    $("#thinking").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#thinking-label").css("background", "#CE4427");
    $("#thinking-score").css("color", "#F25C24");
	}
  if (confidence >= 4.6 && confidence <= 7.5) {
    $("#confidence").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#confidence-label").css("background", "#C18625");
    $("#confidence-score").css("color", "#ECA327");
	}
  if (confidence >= 0 && confidence <= 4.5) {
    $("#confidence").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#confidence-label").css("background", "#CE4427");
    $("#confidence-score").css("color", "#F25C24");
	}
  if (trust >= 4.6 && trust <= 7.5) {
    $("#trust").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#trust-label").css("background", "#C18625");
    $("#trust-score").css("color", "#ECA327");
	}
  if (trust >= 0 && trust <= 4.5) {
    $("#trust").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#trust-label").css("background", "#CE4427");
    $("#trust-score").css("color", "#F25C24");
	}
  if (composure >= 4.6 && composure <= 7.5) {
    $("#composure").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#composure-label").css("background", "#C18625");
    $("#composure-score").css("color", "#ECA327");
	}
  if (composure >= 0 && composure <= 4.5) {
    $("#composure").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#composure-label").css("background", "#CE4427");
    $("#composure-score").css("color", "#F25C24");
	}
  if (ideas >= 4.6 && ideas <= 7.5) {
    $("#ideas").css("border", "4px solid #C18625").css("background", "rgba(193, 134, 37, 0.2)");
    $("#ideas-label").css("background", "#C18625");
    $("#ideas-score").css("color", "#ECA327");
	}
  if (ideas >= 0 && ideas <= 4.5) {
    $("#ideas").css("border", "4px solid #CE4427").css("background", "rgba(206, 68, 39, 0.2)");
    $("#ideas-label").css("background", "#CE4427");
    $("#ideas-score").css("color", "#F25C24");
	}

//assertiveness Detailed Metrics
if (assertiveness >= 0 && assertiveness <= 2.5) {
  $("#assertiveness-lowest").show();
  $("#assertiveness-low").hide();
  $("#assertiveness-mid").hide();
  $("#assertiveness-high").hide();
}
if (assertiveness >= 2.6 && assertiveness <= 5) {
  $("#assertiveness-lowest").hide();
  $("#assertiveness-low").show();
  $("#assertiveness-mid").hide();
  $("#assertiveness-high").hide();
}
if (assertiveness >= 5.1 && assertiveness <= 7.5) {
  $("#assertiveness-lowest").hide();
  $("#assertiveness-low").hide();
  $("#assertiveness-mid").show();
  $("#assertiveness-high").hide();
}
if (assertiveness >= 7.6 && assertiveness <= 10) {
  $("#assertiveness-lowest").hide();
  $("#assertiveness-low").hide();
  $("#assertiveness-mid").hide();
  $("#assertiveness-high").show();
}

//security Detailed Metrics
if (security >= 0 && security <= 2.5) {
  $("#security-lowest").show();
  $("#security-low").hide();
  $("#security-mid").hide();
  $("#security-high").hide();
}
if (security >= 2.6 && security <= 5) {
  $("#security-lowest").hide();
  $("#security-low").show();
  $("#security-mid").hide();
  $("#security-high").hide();
}
if (security >= 5.1 && security <= 7.5) {
  $("#security-lowest").hide();
  $("#security-low").hide();
  $("#security-mid").show();
  $("#security-high").hide();
}
if (security >= 7.6 && security <= 10) {
  $("#security-lowest").hide();
  $("#security-low").hide();
  $("#security-mid").hide();
  $("#security-high").show();
}

//thinking Detailed Metrics
if (thinking >= 0 && thinking <= 2.5) {
  $("#thinking-lowest").show();
  $("#thinking-low").hide();
  $("#thinking-mid").hide();
  $("#thinking-high").hide();
}
if (thinking >= 2.6 && thinking <= 5) {
  $("#thinking-lowest").hide();
  $("#thinking-low").show();
  $("#thinking-mid").hide();
  $("#thinking-high").hide();
}
if (thinking >= 5.1 && thinking <= 7.5) {
  $("#thinking-lowest").hide();
  $("#thinking-low").hide();
  $("#thinking-mid").show();
  $("#thinking-high").hide();
}
if (thinking >= 7.6 && thinking <= 10) {
  $("#thinking-lowest").hide();
  $("#thinking-low").hide();
  $("#thinking-mid").hide();
  $("#thinking-high").show();
}

//confidence Detailed Metrics
if (confidence >= 0 && confidence <= 2.5) {
  $("#confidence-lowest").show();
  $("#confidence-low").hide();
  $("#confidence-mid").hide();
  $("#confidence-high").hide();
}
if (confidence >= 2.6 && confidence <= 5) {
  $("#confidence-lowest").hide();
  $("#confidence-low").show();
  $("#confidence-mid").hide();
  $("#confidence-high").hide();
}
if (confidence >= 5.1 && confidence <= 7.5) {
  $("#confidence-lowest").hide();
  $("#confidence-low").hide();
  $("#confidence-mid").show();
  $("#confidence-high").hide();
}
if (confidence >= 7.6 && confidence <= 10) {
  $("#confidence-lowest").hide();
  $("#confidence-low").hide();
  $("#confidence-mid").hide();
  $("#confidence-high").show();
}

//trust Detailed Metrics
if (trust >= 0 && trust <= 2.5) {
  $("#trust-lowest").show();
  $("#trust-low").hide();
  $("#trust-mid").hide();
  $("#trust-high").hide();
}
if (trust >= 2.6 && trust <= 5) {
  $("#trust-lowest").hide();
  $("#trust-low").show();
  $("#trust-mid").hide();
  $("#trust-high").hide();
}
if (trust >= 5.1 && trust <= 7.5) {
  $("#trust-lowest").hide();
  $("#trust-low").hide();
  $("#trust-mid").show();
  $("#trust-high").hide();
}
if (trust >= 7.6 && trust <= 10) {
  $("#trust-lowest").hide();
  $("#trust-low").hide();
  $("#trust-mid").hide();
  $("#trust-high").show();
}

//composure Detailed Metrics
if (composure >= 0 && composure <= 2.5) {
  $("#composure-lowest").show();
  $("#composure-low").hide();
  $("#composure-mid").hide();
  $("#composure-high").hide();
}
if (composure >= 2.6 && composure <= 5) {
  $("#composure-lowest").hide();
  $("#composure-low").show();
  $("#composure-mid").hide();
  $("#composure-high").hide();
}
if (composure >= 5.1 && composure <= 7.5) {
  $("#composure-lowest").hide();
  $("#composure-low").hide();
  $("#composure-mid").show();
  $("#composure-high").hide();
}
if (composure >= 7.6 && composure <= 10) {
  $("#composure-lowest").hide();
  $("#composure-low").hide();
  $("#composure-mid").hide();
  $("#composure-high").show();
}

//ideas Detailed Metrics
if (ideas >= 0 && ideas <= 2.5) {
  $("#ideas-lowest").show();
  $("#ideas-low").hide();
  $("#ideas-mid").hide();
  $("#ideas-high").hide();
}
if (ideas >= 2.6 && ideas <= 5) {
  $("#ideas-lowest").hide();
  $("#ideas-low").show();
  $("#ideas-mid").hide();
  $("#ideas-high").hide();
}
if (ideas >= 5.1 && ideas <= 7.5) {
  $("#ideas-lowest").hide();
  $("#ideas-low").hide();
  $("#ideas-mid").show();
  $("#ideas-high").hide();
}
if (ideas >= 7.6 && ideas <= 10) {
  $("#ideas-lowest").hide();
  $("#ideas-low").hide();
  $("#ideas-mid").hide();
  $("#ideas-high").show();
}
});
