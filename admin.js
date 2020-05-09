// dropdrop menu apabila didalam .menu li ko ada ul lagi(berarti itu dropdown)
// bila a diklik apa yang terjadi
$(".menu li > a").click(function (e) {
	// yg terjadi adalah nge-slide up dan nge-slide down apabila punya anak menu
	$(".menu ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),e.stopPropagation()
})


// bila yang membuka kurang dari 768px
$(window).bind("load resize", function(){
	if($(this).width() < 768)
	{
		$(".sidebar-collapse").addClass(".collapse");
	}
	else
	{
		$(".sidebar-collapse").removeClass("collapse");
		$(".sidebar-collapse").removeAttr("style");
	}
})