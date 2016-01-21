$(document).ready(function(){

	var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
	var android = (android)/i.test(navigator.userAgent);
 	if(iOS===true || android===true)
 	{
 		$('body').css("background","url(http://i.imgur.com/OHghIbe.jpg)")
		$('body').css("background-attachment","fixed")
		$('body').css("background-size","100% 100%")
		$('.fa-android').css("margin-top","100px")
 	}
	
});

$(document).ready(function(){
	

	(function($){
    $.fn.extend({ 
        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 5000,
                pauseSpeed: 6000,
				child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                  var o =options;
                  var obj = $(this);                
                  var items = $(obj.children(), obj);
				  items.each(function() {$(this).hide();})
				  if(!o.child){var next = $(obj).children(':first');
				  }else{var next = o.child;
				  }
				  $(next).fadeIn(o.fadeSpeed, function() {
						$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
							var next = $(this).next();
							if (next.length == 0){
									next = $(obj).children(':first');
							}
							$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
						})
					});
            });
        }
    });
})(jQuery);

 $(document).ready(function() {
 	
        $('#welcome').rotaterator({fadeSpeed:1000, pauseSpeed:1000});
 });

});
