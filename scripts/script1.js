$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});

$(document).ready(function(){ /* to make sure the script runs after page load */

    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item1').find('.more_text').show(); /* show the .more_text span */
        $(this).parents('.item1').find('.read_more').hide();
	});

})
$(document).ready(function(){
	$('a.read_less').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item1').find('.more_text').hide(); /* show the .more_text span */
        $(this).parents('.item1').find('.read_more').show();
	});
});

$(document).ready(function(){ /* to make sure the script runs after page load */

    $('a.older_enteries').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $("li").parents('.item2').find('.more_text1').show(); /* show the .more_text span */
        $(this).parents('.item2').find('.older_enteries').hide();
	});

})

$(document).ready(function(){
	$('a.fewer_enteries').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $("li").parents('.item2').find('.more_text1').hide(); /* show the .more_text span */
        $("li").parents('.item2').find('.older_enteries').show();
	});
});