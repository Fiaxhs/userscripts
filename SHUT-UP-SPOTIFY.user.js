// ==UserScript==
// @name        SHUT UP SPOTIFY
// @namespace   com.fiaxhs
// @description Launch app, kill that web player
// @include     https://play.spotify.com*
// @include     https://open.spotify.com*
// @version     1
// @grant       none
// ==/UserScript==

// 1. open about:config
// 2. search "dom.allow_scripts_to_close_windows"
// 3. set it to true.


if (matches = /(album|track|user\/[^\/]*\/playlist)\/([^\?]*)/.exec(window.location)) {
    window.location = 'spotify:' + matches[1] + ':' + matches[2];
    window.close();
}