// ==UserScript==
// @name          	TumblrImagePageAway
// @description     Changes from tumblr image page to fullscreen image
//
// @author			Ross Allan <ross@allan.scot>
// @namespace       http://github.com/nallar
// @downloadURL		https://raw.githubusercontent.com/nallar/TumblrImagePageAway/master/tumblrimage.user.js
//
// @license         GPLv3 - http://www.gnu.org/licenses/gpl-3.0.txt
// @copyright       Copyright (C) 2017, by Ross Allan <ross@allan.scot>
//
// @match			http://*.tumblr.com/image/*
//
// @version         1.0
// @updateURL		https://raw.githubusercontent.com/nallar/TumblrImagePageAway/master/tumblrimage.user.js
//
// @run-at			document-start|document-end
// @unwrap
// ==/UserScript==

/**
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * SCRIPT DESCRIPTION.
 *
 * @see http://wiki.greasespot.net/API_reference
 * @see http://wiki.greasespot.net/Metadata_Block
 */
(function() {	
	var imgHolder = document.getElementById("content-image");
  var target = imgHolder.getAttribute("data-src");
  if (target) {
    window.location = target;
  }
})();
