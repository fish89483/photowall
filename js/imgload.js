// $(".portrait").on("load", function() {
//     var imgheight = $(this).height();
//     var imgwidth = $(this).width();
//     if (imgheight > imgwidth) {
//         $(this).removeClass("portrait")
//         $(this).addClass("landscape");
//     }
// });

 $("img").each(function() {
    var src =$(this).attr('src');
	 
    
    $(this).parent('a').css("background-image","url("+src+")")
     if ($(this).complete) {
                console.log(src)
            }
    
    $(this).remove()
    
    
});







$(".pic").hover(function(){
	//$(this).addClass("fade");
	//$(this).removeClass("fade");
	$(this).children().children().toggleClass("fade");


});
