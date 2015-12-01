

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
var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
 $(document).ready(function() {
 	
 	if (iOS===true)
	{
		$('body').css("background","url(https://greenhatworld.com/wp-content/uploads/2015/05/Amazing-Wallpaper-For-Iphone-Hd.jpg)")
	}
        $('#welcome').rotaterator({fadeSpeed:1000, pauseSpeed:1000});
        
 });




