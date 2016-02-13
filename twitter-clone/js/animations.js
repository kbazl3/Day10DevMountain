$(document).ready(function() {
	// $('[data-toggle="tooltip"]').tooltip();
	$(".stats").hide();
	$(".reply").hide();
	// $("time.timeago").timeago();
	// $('.avatar').tooltip({title: function() {
 //    return $(this).parents('.content').find('.fullname').text();
 //  }});

	


	$(".tweet-compose").on("click", function() {
		$(".tweet-compose").height("4em");
		$("#tweet-controls").css("display", "inherit");
	});
     // STEP 3: As the user types the character count should decrease. Once it hits 10 character or less the count should turn red -->
					// 	<!-- HINT: jQuery keypress events (keypress, keydown, keyup, etc) -->

					//end goal - get the charCount to decrement with every key press. events? keypress, 
					//

	
	
	$(".tweet-compose").keydown(function() {
		var charsInBox = $(".tweet-compose").val().length -1;
		$("#char-count").html(140 - charsInBox);
		if (charsInBox > 130) {
			$("#char-count").css("color", "red");
		} else if (charsInBox < 130) {
			$("#char-count").css("color", "black");
		}
		if (charsInBox > 140) {
			$("#tweet-submit").hide();
		} else {
			$("#tweet-submit").show();
		}

    });
    
    $("#tweet-submit").on("click", function() {
    	if ($(".tweet-compose").val()) {
    	$("#stream").prepend('<div class="tweet"><div class="content"><img class="avatar" src="http://127.0.0.1:8080/img/alagoon.jpg" /><strong class="fullname">Kyle Barlow</strong><span class="username"> @KyleBarl0w</span><p class="tweet-text">'+ $(".tweet-compose").val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">1 minute ago</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>');
    	};
	});


	$(".content").on("click", function() {
		$(this).find('.stats').toggle();
    	$(this).find('.reply').show();
	});




console.log("still-working");





});