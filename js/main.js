jQuery(function() {
	// Index Page
	$("button.work-items").live('click', function(e){
		e.preventDefault();
		var selected = $(this).attr("name");
		var position = $("section#work").offset().top;
		var offset = position - $("a#title").height();
			$("article#"+selected).hide(0, function(e){
				$("article#"+selected).removeClass("visuallyhidden");
				$("article#"+selected).fadeIn(300, function(e){
				$("body").animate({scrollTop: offset}, 600);
			});
			$("#worklist").fadeOut(200);
			$("button#thumbnails").fadeIn(200);	
		});
	});
	$("button#thumbnails").live('click', function(e){
		e.preventDefault();
		$("article").fadeOut(200, function(e){
			$("article").addClass("visuallyhidden");
			$("article").show(0);
		});
		$("button#thumbnails").fadeOut(200);
		$("#worklist").fadeIn(200);
	});
	$("button#toggle-nav").live('click', function(e){
		$(this).toggleClass('inactive');
  		$('nav > ul').toggle();
	});
	$("nav > ul > li > a").live('click', function(e){
		if (!$("button#toggle-nav").hasClass('inactive')){
			$("nav > ul").toggle();
			$("button#toggle-nav").toggleClass('inactive');
		}
	});
	if ($("html").hasClass("no-touch")){
		$(window).bind('scroll resize', function(e){
			var offset = $("#main-wrapper").offset();
			if ($(window).scrollTop() > offset.top){
				var hheight = $("header").height();
				var hh = hheight + 12;
				$("header").css({
					'position': 'fixed',
					'top': '0'
				});
				$('#main-wrapper').css({
					'padding-top': hh + 'px'
				});
			}
			else{
				$("header").css({'position': 'static'});
				$('#main-wrapper').css({
					'padding-top': '0px'
				});
			}
		});	
	}
});