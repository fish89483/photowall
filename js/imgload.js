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
    console.log(src)
    $(this).parent('a').css("background-image","url("+src+")")
    $(this).hide()
    
    
});







$(".pic").hover(function(){
	//$(this).addClass("fade");
	//$(this).removeClass("fade");
	$(this).children().children().toggleClass("fade");


});
