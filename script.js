
/*
WEB 303 Assignment 1- jQuery
Your Name: Karamjit */

$(document).ready(function(){
	$('#yearly-salary, #percent').on('keyup', ()=>{
		var salary = $("#yearly-salary").val();
		var percentage = $("#percent").val();
		let amountToSpend = Number(salary) * Number(percentage) * 0.01;
		$('#amount').text(`$${amountToSpend.toFixed(2)}`);
	});
});