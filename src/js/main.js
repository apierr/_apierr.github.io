/* global jQuery, setTimeout */
(function ($, setTimeout) {
    'use strict';

	$(function () {

		var origin = "src/templates/";
		var loadContent = function (selector, url) {
			$.ajax({
				url: origin + url
			}).done(function(content) {
				$(selector).html(content);
			});
		};
		var onHashChange = function () {
			setTimeout(function () {
				var url = window.location.hash || "#home.html";

				url = url.substring(1, url.length);
				loadContent('#main', url);
			}, 0);
		};

		loadContent('#navbar', 'navbar.html');
		loadContent('#main', 'home.html');
		$('#navbar.navbar').on('click', onHashChange);
	});
})(jQuery, setTimeout);
