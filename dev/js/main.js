;( function($, _, undefined){
  "use strict";

  ips.controller.register('plugins.scrollUpDown', {

    initialize: function () {
			var lastPosition;
			var scrollSidebarWidth = ($(document).width() - $('#ipsLayout_body').width())/2;

			if (scrollSidebarWidth > 100) {
				scrollSidebarWidth = 100;
			}

			$('.scroll_sidebar').css('width', scrollSidebarWidth);
			$('.scroll_sidebar').css('font-size', scrollSidebarWidth + 'px');

			this.on( document, 'mouseover', '.scroll_sidebar', this.showScrollSidebar );
			this.on( document, 'mouseleave', '.scroll_sidebar', this.hideScrollSidebar );
      this.on( document, 'click', '.scroll_sidebar', this.scrollUpDown );
    },

		showScrollSidebar: function () {
			if ($(window).scrollTop() > 350) {
				this.scope.html('<i class="fa fa-angle-up"></i>');
				this.scope.css('opacity', '0.1');
				this.scope.css('cursor', 'pointer');
			} else if (this.lastPosition) {
				this.scope.html('<i class="fa fa-angle-down"></i>');
				this.scope.css('opacity', '0.1');
				this.scope.css('cursor', 'pointer');
			}
		},

		hideScrollSidebar: function () {
			this.scope.css('opacity', '0');
		},

    scrollUpDown: function () {
			var self = this;

			if ($(window).scrollTop() > 350) {
				this.lastPosition = $(window).scrollTop();

				$("html, body").animate({ scrollTop: 0 }, 600, function () {
					self.scope.html('<i class="fa fa-angle-down"></i>');
				});
			} else if (this.lastPosition) {
				$("html, body").animate({ scrollTop: this.lastPosition }, 600, function () {
					self.scope.html('<i class="fa fa-angle-up"></i>');
				});
			}
    }

  });
}(jQuery, _));
