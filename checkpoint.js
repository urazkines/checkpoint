(function($) {
	var methods = {
		popmeup: function(w, h, url) {
			var left = (screen.width / 2) - (w / 2);
			var top = (screen.height / 2) - (h / 2);
			window.open(url, "_blank", "toolbar=0,width=" + w + ", height=" + h + ", location=0, directories=0, status=1, scrollbars=1, menubar=0, resizable=0, copyhistory=0, top=" + top + ", left=" + left);
		},
		facebook: function(title, text, url, image) {
			if (image == undefined) {
				var socialURL = "http://www.facebook.com/sharer.php" + "?s=100&p[title]=" + encodeURIComponent(title) + "&p[summary]=" + encodeURIComponent(text) + "&p[url]=" + encodeURIComponent(url);
			} else {
				var socialURL = "http://www.facebook.com/sharer.php" + "?s=100&p[title]=" + encodeURIComponent(title) + "&p[summary]=" + encodeURIComponent(text) + "&p[url]=" + encodeURIComponent(url) + "&p[images][0]=" + encodeURIComponent(image);
			}
			methods.popmeup(500, 500, socialURL);
		},
		linkedin: function(title, text, url) {
			if (text == undefined) {
				var socialURL = "http://www.linkedin.com/shareArticle?mini=true&" + "url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title);
			} else {
				var socialURL = "http://www.linkedin.com/shareArticle?mini=true&" + "url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title) + "&summary=" + encodeURIComponent(text);
			}
			methods.popmeup(500, 500, socialURL);
		},
		twitter: function(text, url) {
			if (url == undefined) {
				var socialURL = "http://twitter.com/home?status=" + encodeURIComponent(text);
			} else {
				var socialURL = "http://twitter.com/home?status=" + encodeURIComponent(text) + "+" + encodeURIComponent(url);
			}
			methods.popmeup(500, 500, socialURL);
		},
		google: function(url) {
			var socialURL = "https://plus.google.com/share?url=" + encodeURIComponent(url);
			methods.popmeup(500, 500, socialURL);
		}
	};

	$.fn.checkpoint = function(options) {
		options = $.extend({}, $.fn.checkpoint.defaults, options);
		if (!this.length) {
			return this;
		}
		this.each(function(e) {
			var $this = $(this);
			var title = $this.attr(options.title);
			var text = $this.attr(options.text);
			var url = $this.attr(options.url);
			var img = $this.attr(options.img);

			if (options[0] == "f") {
				$this.click(function() {
					methods.facebook(title, text, url, img);
				});
			} else if (options[0] == "t") {
				$this.click(function() {
					methods.twitter(text, url);
				});
			} else if (options[0] == "g") {
				$this.click(function() {
					methods.google(url);
				});
			} else if(options[0] == "l"){
				$this.click(function() {
					methods.linkedin(title, text, url);
				});
			}
		});
	};

	$.fn.checkpoint.defaults = {
		title: "data-title",
		text: "data-text",
		url: "data-url",
		img: "data-img"
	};

})(jQuery);