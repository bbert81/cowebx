/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/kernel","../_DomTemplated"], function(dojo,dddt){
	dojo.getObject("dtl._HtmlTemplated", true, dojox);

	dojo.deprecated("dojox.dtl.html", "All packages and classes in dojox.dtl that start with Html or html have been renamed to Dom or dom");
	dojox.dtl._HtmlTemplated = dojox.dddt;
	dojox.dtl._HtmlTemplated.prototype.declaredClass = "dojox.dtl._HtmlTemplated";
	return dojox.dtl._HtmlTemplated;
});