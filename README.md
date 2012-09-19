jquery.template.js
==================

A ridiculously simple templating library for jQuery.

Usage:
======

USAGE:
$(el).template("<h1>${album}</h1><h2>${artist}</h2><img src='images/${cover}", 
{album: "Dark Side Of The Moon", artist: "Pink Floyd", "dark-side-of-the-moon.png"});