$(document).ready(function(){

	console.log("document ready");

	var fondoColor = "#f5f5f5";
	var tipografiaColor = "#353535";
	
	console.log("bgColor: " + bgColor);
	console.log("fontColor: " + fontColor);	
	console.log("prevProj: " + prevProj);
	console.log("nextProj: " + nextProj);
	
	if (bgColor == "") {bgColor = fondoColor;}
	if (fontColor == "") {fontColor = tipografiaColor;}
	
	/*
	$("body").css ("background-color", bgColor);
	$("body").css ("color", fontColor);
	$("a").css ("color", fontColor);
	$(".boton").css ("border-color", fontColor);
	$("#header-logo #svgLogo path").css ("fill", fontColor);
	$("#header-wrapper #header-menu-toggle svg line").css ("stroke", fontColor);
	$("#header-wrapper #header-closeProject svg line").css ("stroke", fontColor);
	*/
	
	TweenMax.to($("body"), 0.6, {css:{backgroundColor:bgColor}, ease:Expo.easeOut});
	TweenMax.to($("body"), 0.6, {css:{color:fontColor}, ease:Expo.easeOut});
	TweenMax.to($("a"), 0.6, {css:{color:fontColor}, ease:Expo.easeOut});
	TweenMax.to($(".boton"), 0.6, {css:{borderColor:fontColor}, ease:Expo.easeOut});
	TweenMax.to($("#header-logo #svgLogo path"), 0.6, {css:{fill:fontColor}, ease:Expo.easeOut});
	TweenMax.to($("#header-wrapper #header-menu-toggle svg line"), 0.6, {css:{stroke:fontColor}, ease:Expo.easeOut});
	TweenMax.to($("#header-wrapper #header-closeProject svg line"), 0.6, {css:{stroke:fontColor}, ease:Expo.easeOut});
	

	
	function updateResponsive() {
		windowHeight = $(window).innerHeight();
		windowWidth = $(window).innerWidth();

		TweenMax.to($("#header-prevProject"), 0, {top: windowHeight - 45 + "px", left: 58, width: windowHeight - 175 + "px"});
		TweenMax.to($("#header-nextProject"), 0, {top:130, left: windowWidth - 58, width: windowHeight - 175 + "px"});
		
	}
	
	$(window).on("resize", function () {
		updateResponsive();
	});
	
	function clickable(obj){
		//alert(obj.attr("id") + " clickable");
		$(obj).css("pointer-events", "all");
	    $(obj).css("cursor", "pointer");
	}
	function notClickable(obj){
		//alert(obj.attr("id") + " NOT clickable");
		$(obj).css("pointer-events", "none");
	    $(obj).css("cursor", "default");
	}
	
	function displayNone(obj) {
		obj.css("display", "none");
	}
	
	function displayBlock(obj) {
		obj.css("display", "block");
	}
	
	window.addEventListener("pageshow", function(evt){
        if(evt.persisted){
        setTimeout(function(){
            window.location.reload();
        },10);
    }
}, false);

	$(window).unload(function () {
		$("body").css("opacity", "1");
		$("body").css("pointer-events", "all");
	});

	$(window).bind("load", function() {
		
		console.log("document loaded");
		
		$("body").css("opacity", "1");
		$("body").css("pointer-events", "all");
		
		TweenMax.to($("#project-wrapper"), 1, {css:{top: "150px", opacity:1}, delay: 0.3, ease:Expo.easeOut});
		
		displayBlock($("#header-closeProject"));
		TweenMax.to($("#header-closeProject"), 0.6, {css:{autoAlpha:1}, ease:Expo.easeOut, delay: 1});
		clickable($("#header-closeProject"));
		$( "#header-closeProject" ).on("click", clickBackToArchive);
		
		TweenMax.to($("#header-archive-back"), 0.6, {css:{opacity:1}, ease:Expo.easeOut, delay: 1});
		$( "#header-archive-back" ).on("click", clickBackToArchive);

		TweenMax.to($("#header-common-back"), 0.6, {css:{opacity:1}, ease:Expo.easeOut, delay: 1});
		$( "#header-common-back" ).on("click", clickBackToHome);
		
		if (prevProj != ""){
			displayBlock($("#header-prevProject"));
			$( "#header-prevProject" ).on("click", clickPrevProject);
			TweenMax.to($("#header-prevProject"), 1, {opacity: 1, ease:Expo.easeOut, delay: 1});
			clickable($("#header-prevProject"));
		}
		
		if (nextProj != ""){
			displayBlock($("#header-nextProject"));
			$( "#header-nextProject" ).on("click", clickNextProject);
			TweenMax.to($("#header-nextProject"), 1, {opacity: 1, ease:Expo.easeOut, delay: 1});
			clickable($("#header-nextProject"));
		}
		
		displayNone($("#content-wrapper"));		
		displayBlock($("#project-wrapper"));

		
		$("#project-wrapper img").unveil(250, function() {
			  $(this).load(function() {
			  	console.log("load image: " + $(this).attr("src"));
			    $(this).fadeOut(0).fadeIn(600);
			    if ($(this).hasClass("imgMac")) {
			    	$(this).prev(".ventanaMac").css("opacity", "1");
			    	$(this).css("min-height", "");
			    }
			  });
			});
		
		
	});
	
	function clickNextProject(){
		console.log("Next");
		notClickable($("body"));
		$("body").css("opacity", "0");
		$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
		 function(e){
		    console.log("Carga la siguiente pagina: " + nextProj);
		    window.location.href = "https://migueltrias.com/" + nextProj;
		    $(this).off(e);
		 });

	}
	
	function clickPrevProject(){
		console.log("Prev");
		notClickable($("body"));
		resetColores();
		$("body").css("opacity", "0");
		$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
		 function(e){
		    console.log("Carga la anterior pagina: " + prevProj);
		    window.location.href = "https://migueltrias.com/" + prevProj;
		    $(this).off(e);
		 });
	}
	
	function clickBackToArchive(){
		console.log("Back to Archive");
		event.preventDefault();
		notClickable($("body"));
		resetColores();
		$("body").css("opacity", "0");
		$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
		 function(e){
		    console.log("Carga archivo");
		    window.location.href = "/archive/";
		    $(this).off(e);
		 });
	}
	function clickBackToHome(){
		console.log("Back to Home");
		event.preventDefault();
		notClickable($("body"));
		resetColores();
		$("body").css("opacity", "0");
		$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
		 function(e){
		    console.log("Carga home");
		    window.location.href = "/";
		    $(this).off(e);
		 });
	}
	
	$(".archive-link a").on("click", clickToArchive);
	
	function clickToArchive(){
		event.preventDefault();
		var archiveUrl = $(this).attr("href");
		console.log("Click to Archive " + archiveUrl);
		notClickable($("body"));
		resetColores();
		$("body").css("opacity", "0");
		$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
		 function(e){
		    window.location.href = archiveUrl;
		    $(this).off(e);
		 });
	}
	
	function resetColores() {
		TweenMax.to($("body"), 0.6, {css:{backgroundColor:fondoColor}, ease:Expo.easeOut});
		TweenMax.to($("body"), 0.6, {css:{color:tipografiaColor}, ease:Expo.easeOut});
		TweenMax.to($("a"), 0.6, {css:{color:tipografiaColor}, ease:Expo.easeOut});
		TweenMax.to($(".boton"), 0.6, {css:{borderColor:tipografiaColor}, ease:Expo.easeOut});
		TweenMax.to($("#header-logo #svgLogo path"), 0.6, {css:{fill:tipografiaColor}, ease:Expo.easeOut});
		TweenMax.to($("#header-wrapper #header-menu-toggle svg line"), 0.6, {css:{stroke:tipografiaColor}, ease:Expo.easeOut});
		TweenMax.to($("#header-wrapper #header-closeProject svg line"), 0.6, {css:{stroke:tipografiaColor}, ease:Expo.easeOut});
	}

	$(".gotoScroll").each(function() {
		$(this).on("click", function(e){
			e.preventDefault();
			whereTo = $(this).attr("href");
			console.log("gotoScroll " + whereTo);
			var position = $(whereTo).position();
			TweenMax.to(window, .6, {scrollTo:{y:position.top}, ease:Cubic.easeInOut});
		});
	});
	
	updateResponsive();


});