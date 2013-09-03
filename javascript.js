// JavaScript Document
$(document).ready(function()
{
	$('#menu ul li').mouseenter(function()
	{
		$(this).css("text-decoration", "underline");
		$(this).css("background-color", "#cfcfcf");
	});
	
	$('#menu ul li').mouseleave(function()
	{
		$(this).css("text-decoration", "none");
		$(this).css("background-color", "transparent");
	});
	
});