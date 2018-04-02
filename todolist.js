$(function () {
	//this function is referring to my ID for the form and saying "on the submit action" do the following...
	$("#todoListForm").on("submit", function(event) {
	event.preventDefault();
	//this creates a new variable for the text typed into the form box
	let inputValue = $("#todoListInput").val();
	//this refers to the open <ul> tag in html and adds a <li> tag everytime the form is submitted
	$('ol').append(("<li>" + inputValue) + ("<button id='done'>"));
	//this clears the form input everytime the entry is submitted
	inputValue = $("#todoListInput").val('');
	});

	//This changes the color of the text to green when you click it
	// $(document).on("click", 'li', function() {
	// 	$(this).addClass('complete');
	// });

	$(document).on("click", "#done", function() {
		$(this).html('done');
	});




});
