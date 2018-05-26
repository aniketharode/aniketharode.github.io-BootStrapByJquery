/**
 * 
 */


$(document).ready(() =>{
	
	$("#button").click(() =>{
		
		 $("#myModal").css("display","block");
		 $(".close").hover(() =>{
			 
			 $(".close").addClass("focus");
			 },
			 () =>{
				 
				 $(".close").removeClass("focus");
				 }
		 
		 
		 );
		 
		 $(".close").click(() =>{
			 
			 $("#myModal").css("display","none");
			 
		 });
		 
        $("#myModal").click(() =>{
			 
			 $("#myModal").css("display","none");
			 
		 });
		 
		 
			// $(".modal-content").slideToggle();
			
		
	});
	
});