$(".portrait").on("load", function() {
    var imgheight = $(this).height();
    var imgwidth = $(this).width();
    if (imgheight > imgwidth) {
        $(this).removeClass("portrait")
        $(this).addClass("landscape");
    }
});


$(".pic").hover(function(){
	//$(this).addClass("fade");
	//$(this).removeClass("fade");
	$(this).children().children().toggleClass("fade");


});