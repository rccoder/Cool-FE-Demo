$(function() {
	$(window).scroll(function() {
		var top = $(document).scrollTop();

		var $menu = $("#menu");	
		var $item = $("#content").find(".item");
		
		var currentID = '';
		$item.each(function() {
			var $self = $(this);
			var itemTop = $self.offset().top;
			
			if(top > itemTop-200) {
				currentID = '#' + $self.attr('id');
			} else {
				return false;
			}
		})
		
		var $currentLink = $menu.find(".current");
		
		if(currentID && $currentLink.attr("href") != currentID) {
			currentLink.removeClass("current");
			$menu.find("[href=" + currentID + "]").addClass("current")
		}
	})
})
