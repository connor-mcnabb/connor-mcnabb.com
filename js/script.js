jQuery(function() {
	// Index Page
	$("ul.nav li a").hover(
			function(e){
				var icon = $(this).attr("id");
				$("#exhibit img").stop(true, true).fadeOut(600);
				$("img#"+icon).stop(true, true).fadeIn(600);
			},
			function(e){
			$("#exhibit img").not("img.current").stop(true, true).fadeOut(600);
			$("img.current").stop(true, true).delay(400).fadeIn(600);
		}
	);


	$("ul li a").hover(
		function(e){
			var icon = $(this).attr("id");
			$("#exhibit img").stop(true, true).fadeOut(600);
			$("img#"+icon).stop(true, true).fadeIn(600);
		},
		function(e){
			$("#exhibit img").not("img.current").stop(true, true).fadeOut(600);
			$("img.current").stop(true, true).delay(400).fadeIn(600);
		}
	);

	$("ul.cats li a").live('click', function(e){
		var icon = $(this).attr("id");
		var reset = $("#work_examples").html();

		$("img").removeClass("current");
		$("img#"+icon).addClass("current");
		$("ul.cats").fadeOut(500, function(e){
			$("#extender_bar").animate({"width": "15px"},600);
			$("#right_bracket").animate({"right": "278px"},600);
			$("h1.name").hide("drop", { direction: "left" }, 300);
			$("#left_bracket").animate({"left": "-35px","opacity":"0.0"},600);
			$("#work_examples").stop(true, true).show("clip", { direction: "horizontal" }, 500);
			$("#frame."+icon).stop(true, true).fadeIn(500);
			$("#frame."+icon).first().children("#details").delay(1500).fadeIn(800).delay(3000).fadeOut();
			$("#work_examples").hover(
				function(arrows){
					$("#arrow.up").stop(true, true).animate({"top": "0px"},100);
					$("#arrow.down").stop(true, true).animate({"top": "580px"},100);						
				},
				function(arrows){
					$("#arrow.up").stop(true, true).animate({"top":"-50px"}, 100);
					$("#arrow.down").stop(true, true).animate({"top":"630px"}, 100);
				}
			);
		});

		$("#exhibit").hover(
			function(close){
				if ( !$("img#connor").hasClass("current") ){
					$("img.current").stop(true, true).fadeOut(400);
					$("img#close").stop(true, true).fadeIn(800);
				};
			},
			function(close){
				if ( !$("img#connor").hasClass("current") ){
					$("img.current").stop(true, true).fadeIn(600);
					$("img#close").stop(true, true).fadeOut(600);
				};
			}
		);
		$("img#close").live('click', function(e){
			$("img").removeClass("current");
			$("img#close").stop(true, true).fadeOut(600);
			$("#work_examples").stop(true, true).hide("clip", { direction: "horizontal" }, 300);
			$("#work_examples").children("#frame").stop(true, true).fadeOut(500);
			$("img#connor").stop(true, true).fadeIn(600).addClass("current");
			$("#extender_bar").animate({"width": "150px"},600);
			$("#right_bracket").animate({"right": "413px"},600);
			$("#left_bracket").animate({"left": "250px","opacity":"1.0"},600);
			$("h1.name").stop(true, true).delay(100).show("drop", { direction: "left" }, 500, function(e){
				$("ul.cats").fadeIn(600);
			});
			$("#work_examples").children("#frame").hide();
			first = null;
			last = null;
			icon = null;
			$("#details").fadeOut(0);
			$("#work_examples").html(reset);
		});
		$("body").keyup(function(e){
			if(e.keyCode == 27 && !$("img#connor").hasClass("current")){
				$("#exhibit img").removeClass("current");
				$("#exhibit img").stop(true, true).fadeOut(600);
				$("#work_examples").stop(true, true).hide("clip", { direction: "horizontal" }, 300);
				$("#work_examples").children("#frame").stop(true, true).fadeOut(500);
				$("img#connor").stop(true, true).fadeIn(600).addClass("current");
				$("#extender_bar").animate({"width": "150px"},600);
				$("#right_bracket").animate({"right": "413px"},600);
				$("#left_bracket").animate({"left": "250px","opacity":"1.0"},600);
				$("h1.name").stop(true, true).delay(100).show("drop", { direction: "left" }, 500, function(e){
					$("ul.cats").fadeIn(600);
				});
				$("#work_examples").children("#frame").hide();
				first = null;
				last = null;
				icon = null;
				$("#details").fadeOut(0);
				$("#work_examples").html(reset);
			}
		});
		$("#arrow").live('click', function(e){

			$("#details").fadeOut(0);
			var first= $("#frame."+icon).first();
			var last= $("#frame."+icon).last();

			if ( $(this).hasClass("down") ){
				last.remove().clone().hide().insertBefore(first).slideDown(400, function(e){
					$(this).children("#details").fadeTo(800, 1.0).delay(3500).fadeTo(800, 0.0);
				});
			}
			else{
				first.slideUp(400, function(e){
					first.clone().insertAfter(last).show();
					first.remove();
				});
				first.next().children("#details").delay(1500).fadeTo(800, 1.0).delay(3000).fadeTo(800, 0.0);
			}
		});
		$("body").keyup(function(event){
			var first= $("#frame."+icon).first();
			var last= $("#frame."+icon).last();

			$("#details").fadeOut(0);
			if (event.keyCode == 40 && !$("img#connor").hasClass("current")){
				event.preventDefault();
				last.remove().clone().hide().insertBefore(first).slideDown(400, function(e){
					$(this).children("#details").delay(1500).fadeTo(800, 1.0).delay(3000).fadeTo(800, 0.0);
				});
			}
			if (event.keyCode == 38 && !$("img#connor").hasClass("current")){
				event.preventDefault();
				first.slideUp(400, function(e){
					first.clone().insertAfter(last).show();
					first.remove();
				});
				first.next().children("#details").delay(1500).fadeTo(800, 1.0).delay(3000).fadeTo(800, 0.0);
			}
		});
	});
	
	// Info Page
	$("ul.nav li a").hover(
		function(e){
			var icon = $(this).attr("id");
			$("#exhibit img").stop(true, true).fadeOut(600);
			$("img#"+icon).stop(true, true).fadeIn(600);
		},
		function(e){
			$("#exhibit img").not("img.current").stop(true, true).fadeOut(600);
			$("img.current").stop(true, true).delay(400).fadeIn(600);
		}
	);
	
	$(".icons").live('mouseover', function(e){
		var hovered = $(this).attr("id");
		$(".var_content#default").removeClass("current");
		$(".var_content").stop(true, true).fadeOut(600);
		$(".var_content#"+hovered).delay(500).stop(true, true).fadeIn(600);
		$(".icons").not(this).stop(true, true).animate({"opacity": ".75"},250);
		$(this).stop(true, true).animate({"opacity": "1.0"},250);
		
		$("#exhibit").live('mouseover', function(e){
			if(!$(".var_content#default").hasClass("current")){
			
				$(".var_content").stop(true, true).fadeOut(600);
				$(".var_content#default").delay(500).stop(true, true).fadeIn(600);
				$(".icons").stop(true, true).animate({"opacity": ".75"},250);
				$(".var_content#default").addClass("current");
			}
		});
	});
	
});
