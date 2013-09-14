// JavaScript Document
$(document).ready(function()
{
	
	$('div').hide();
	$('#Home').fadeIn(500);
	
	$('#menu ul li').mouseenter(function(){
		$(this).css("text-decoration", "underline");
	});
	
	$('#menu ul li').mouseleave(function(){
		$(this).css("text-decoration", "none");
	});
	
	
});

$(function(){
	$('td').mouseenter(function(){
		$(this).css("background-color","#F0F0F0");
	});
	
});


$(function(){
	
	$('#menu ul li:nth-child(1)').click(function(){
		
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		
		$('#Home').fadeIn(500);
		$(this).css("background-color", "#f1f1f1");
	});
	
	$('#menu ul li:nth-child(2)').click(function(){
		
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		
		$('#Resume').fadeIn(500);
		$(this).css("background-color", "#f1f1f1");
	});
	
	$('#menu ul li:nth-child(3)').click(function(){
		
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		
		$('#Music_Lessons').fadeIn(500);
		$('#Music_Lessons2').fadeIn(500);
		$(this).css("background-color", "#f1f1f1");
	});
	
	$('#menu ul li:nth-child(4)').click(function(){
		
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		
		$('#Photography').fadeIn(500);
		$(this).css("background-color", "#f1f1f1");
	});
	
	$('#menu ul li:nth-child(5)').click(function(){
		
		$('div').fadeOut(500)
		$('ul li').css("background-color", "transparent");
		
		$('#Contact_Me').fadeIn(500);
		$(this).css("background-color", "#f1f1f1");
	});
	

	
});



	
	
	