/**
 * ezti - Easy Titanium
 * Developed by Ricardo Alcocer - ralcocer@appcelerator.com
 *
 * This module is a wrapper around Alloy.
 * It is designed to provide an abstraction layer for graphic artists, web developers and
 * light JavaScript coders, making it easier for them to work with Titanium and Alloy
 *
 */
var Alloy = require('alloy');
 
// open a window
exports.openWin=function(win){ 
	var w=Alloy.createController(win).getView(); 
	w.open(); 
}

// close a window 
exports.closeWin=function(win){ 
	win.close(); 
} 

// show alert box 
exports.alert=function(title,message){ 
	Titanium.UI.createAlertDialog({ 
		title : title, 
		message : message, 
		buttonNames : ['OK'] 
	}).show(); 
}

// gets a view from disk and adds it to the specified parent 
exports.addView=function(parent,view){ 
	//Ti.API.info(JSON.stringify(parent.children));
	var v=Alloy.createController(view).getView();
	parent.add(v); 
}

// removes the view from it's parent
exports.removeView=function(parent,view){
	parent.remove(view);
}

// hides an object..does not removes it, so careful
exports.hideMe=function(whoami){ 
	whoami.visible="false" 
}

// opens window from table row
// assumes that the row has a "win" property holding the name of the controller's XML file
exports.openWinFromRow=function(row){
	this.openWin(row.eztiwin);
}
