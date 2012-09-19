/*
 * jQuery Templates 0.1
 *
 * http://www.collectivecognition.com
 *
 * Copyright (c) 2012 William Blanchette, wb@collectivecognition.com
 *
 * APPEND:
 * $(el).template("<h1>${album}</h1><h2>${artist}</h2><img src='images/${cover}", 
 * {album: "Dark Side Of The Moon", artist: "Pink Floyd", "dark-side-of-the-moon.png"});
 *
 * INSERT: 
 * $(el).template("${foo}", {foo: "bar"}, true);
 */

(function($){
	$.fn.template = function(string, obj, overwrite){
		return $(this)[overwrite ? "html" : "append"](string.replace(/\${(.*?)\}/ig, function(match){
			return obj[match.replace(/[\${\}]/g, "")];
		}));
	}
})(jQuery);