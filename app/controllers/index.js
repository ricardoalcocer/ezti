var ezti=require('ezti');

function doClick(e) {  
    ezti.openWin('screen2');
}

function onTableClick(e){
	// assumes that the row has a "eztiwin" property holding the name of the controller's XML file
	ezti.openWinFromRow(e.rowData);
}

$.index.open();
