/**
 * 
 */

$(document).ready(() =>{
	
	
	
	
	
$("#home").hover(() =>{
		
		$("#homecontainer").show();
		
		$("#abc").removeClass("hometext");
		$("#pqr").removeClass("hometext");
		$("#homecontainer").addClass("homecontainer");
		$("#home").addClass("fontsize");
		$("#dropdowncontainer").hide();
		$("#dropdown").removeClass("fontsize");
		
     },
		
		() => {
			//$("#homecontainer").hide();
			//$("#abc").addClass("hometext");
			//$("#pqr").addClass("hometext");
			//$("#home").removeClass("fontsize");
	});



$("#container").hover(() =>{
	$("#container").css("display:none");
	
})


$("#abc").hover(() =>{
	$("#abc").addClass("textfonts")},
	
	() => {
		$("#abc").removeClass("textfonts");
	
});


$("#pqr").hover(() =>{
$("#pqr").addClass("textfonts")},
	
	() => {
		$("#pqr").removeClass("textfonts");
	
	
});





$("#navbar").hover(() =>{
	
	$("#navbar").addClass("fontsize");
	$("#homecontainer").hide();
	$("#home").removeClass("fontsize");
	$("#dropdowncontainer").hide();
	$("#dropdown").removeClass("fontsize");
    },
	
	() => {
		$("#navbar").removeClass("fontsize");
	
});

$("#dropdown").hover(() =>{
	
	$("#dropdown").addClass("fontsize");
	$("#homecontainer").hide();	
	$("#home").removeClass("fontsize");
	$("#dropdown").click(() =>{
		$("#dropdown").addClass("fontsize");
		$("#dropdowncontainer").show();
		$("#abc1").removeClass("hometext");
		$("#pqr1").removeClass("hometext");
		$("#dropdowncontainer").addClass("dropdowncontainer");
		
	});
},
	
	() => {
		//$("#dropdown").removeClass("fontsize");
	
});



$("#abc1").hover(() =>{
	$("#abc1").addClass("textfonts")},
	
	() => {
		$("#abc1").removeClass("textfonts");
	
});


$("#pqr1").hover(() =>{
$("#pqr1").addClass("textfonts")},
	
	() => {
		$("#pqr1").removeClass("textfonts");
	
	
});








		

$("#hidecontainer").hover(() =>{
	$("#homecontainer").hide();	
	$("#home").removeClass("fontsize");
	$("#dropdowncontainer").hide();
	$("#dropdown").removeClass("fontsize");
	
	
});


//************input and submit*******************//

$("input").focus(function(){
	$(this).addClass("border");
	$("#homecontainer").hide();	
	$("#home").removeClass("fontsize");
	$("#dropdowncontainer").hide();
	$("#dropdown").removeClass("fontsize");
	
});

$("input").focusout(function(){
	$(this).removeClass("border");
	$("#text").attr("value","search");
});


$("#button").hover(() =>{
	
	$("#button").addClass("buttonborderhover");},

() =>{
	
	$("#button").removeClass("buttonborderhover");

	
});


$("#text").click(() =>{
	 $("#text").attr("value","");
	
	
	
});




$(".toplevel").click(() => {
	$(".text1").addClass("text2");
	$(".text1").slideToggle();
	
	
});


$("#dropdown1").click(() => {
	//$(".showdropdown").css("display:block");
	
	$(".text1").addClass("text1height");
	//$(".text1").slideToggle();
	$(".showdropdown").slideToggle();
	
		
	}
	
	
);




/* let text= 	$(".text").text();
 
	 if(text.slice(21,25)=="Home")
		 alert("success");
	 else
		 alert(text);
	
	
	});*/
});