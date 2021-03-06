'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(change);

}
function change(e) {

	var proj = $('#project').val();
	$(proj).animate ({
		width: $('#width').val()
	})
	var txt = $('#description').val();
	$(proj + " .project-description").text(txt);
}
function projectClick(e) {

	e.preventDefault();
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	console.log("Number of matching items: " + jumbotronHeader.length);
	jumbotronHeader.text(projectTitle);
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
	 $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
	 description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
}
