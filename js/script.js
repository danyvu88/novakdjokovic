window.onscroll = function(){scrollUp()};

function scrollUp(){

	if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ){
		document.getElementById("dugme").style.display = "block";
	}else{
		document.getElementById("dugme").style.display = "none";
	}

};

function topUp(){

	document.body.scrollTop = "0";
	document.documentElement.scrollTop = "0";
};


$(function(){
      // See if this is a touch device
      if ('ontouchstart' in window)
      {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');
        
        // Add the touch toggle to show text
        $('div.boxInner img').click(function(){
          $(this).closest('.boxInner').toggleClass('touchFocus');
        });
      }
    });


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("p1").style.fontStyle = "italic";
    document.getElementById("p2").style.fontStyle = "italic";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading1").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading2").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading3").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading4").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading5").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading6").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("heading7").style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("p1").style.fontStyle = "normal";
    document.getElementById("p2").style.fontStyle = "normal";
    document.body.style.backgroundColor = "white";
    document.getElementById("heading1").style.backgroundColor = "white";
    document.getElementById("heading2").style.backgroundColor = "white";
    document.getElementById("heading3").style.backgroundColor = "white";
    document.getElementById("heading4").style.backgroundColor = "white";
    document.getElementById("heading5").style.backgroundColor = "white";
    document.getElementById("heading6").style.backgroundColor = "white";
    document.getElementById("heading7").style.backgroundColor = "white";
}

function closeAfterClickMenu() {
	document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("p1").style.fontStyle = "normal";
    document.getElementById("p2").style.fontStyle = "normal";
    document.body.style.backgroundColor = "white";
    document.getElementById("heading1").style.backgroundColor = "white";
    document.getElementById("heading2").style.backgroundColor = "white";
    document.getElementById("heading3").style.backgroundColor = "white";
    document.getElementById("heading4").style.backgroundColor = "white";
    document.getElementById("heading5").style.backgroundColor = "white";
    document.getElementById("heading6").style.backgroundColor = "white";
    document.getElementById("heading7").style.backgroundColor = "white";
}
