/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/highlight/_base","dojox/highlight/languages/pygments/_html"], function(dojo, dijit, dojox){
dojo.getObject("dojox.highlight.languages.pygments.html", 1);
/* builder delete begin
dojo.provide("dojox.highlight.languages.pygments.html");


 builder delete end */
/* builder delete begin
dojo.require("dojox.highlight._base");

 builder delete end */
/* builder delete begin
dojo.require("dojox.highlight.languages.pygments._html");


 builder delete end */
(function(){
	var dh = dojox.highlight, dhl = dh.languages, tags = [],
		ht = dhl.pygments._html.tags;
	
	for(var key in ht){
		tags.push(key);
	}
	tags = "\\b(" + tags.join("|") + ")\\b";
	
	dhl.html = {
		case_insensitive: true,
		defaultMode: {
			contains: [
				"name entity",
				"comment", "comment preproc",
				"_script", "_style", "_tag"
			]
		},
		modes: [
			// comments
			{
				className: "comment",
				begin: "<!--", end: "-->"
			},
			{
				className: "comment preproc",
				begin: "\\<\\!\\[CDATA\\[", end: "\\]\\]\\>"
			},
			{
				className: "comment preproc",
				begin: "\\<\\!", end: "\\>"
			},

			// strings
			{
				className: "string",
				begin: "'", end: "'",
				illegal: "\\n",
				relevance: 0
			},
			{
				className: "string",
				begin: '"',
				end: '"',
				illegal: "\\n",
				relevance: 0
			},
			
			// names
			{
				className: "name entity",
				begin: "\\&[a-z]+;", end: "^"
			},
			{
				className: "name tag",
				begin: tags, end: "^",
				relevance: 5
			},
			{
				className: "name attribute",
				begin: "\\b[a-z0-9_\\:\\-]+\\s*=", end: "^",
				relevance: 0
			},
			
			{
				className: "_script",
				begin: "\\<script\\b", end: "\\</script\\>",
				relevance: 5
			},
			{
				className: "_style",
				begin: "\\<style\\b", end: "\\</style\\>",
				relevance: 5
			},
			
			{
				className: "_tag",
				begin: "\\<(?!/)", end: "\\>",
				contains: ["name tag", "name attribute", "string", "_value"]
			},
			{
				className: "_tag",
				begin: "\\</", end: "\\>",
				contains: ["name tag"]
			},
			{
				className: "_value",
				begin: "[^\\s\\>]+", end: "^"
			}
		]
	};
})();

});
require(["dojox/highlight/languages/pygments/html"]);
