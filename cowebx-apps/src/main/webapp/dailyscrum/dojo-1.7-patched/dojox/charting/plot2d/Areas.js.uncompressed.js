/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/declare", "./Default"], function(Default){

return dojo.declare("dojox.charting.plot2d.Areas", dojox.charting.plot2d.Default, {
	//	summary:
	//		Represents an area chart.  See dojox.charting.plot2d.Default for details.
	constructor: function(){
		this.opt.lines = true;
		this.opt.areas = true;
	}
});
});
