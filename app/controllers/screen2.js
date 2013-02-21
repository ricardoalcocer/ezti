var ezti=require('ezti');

function closeme(){
	ezti.alert('My Title','This is the message');
	ezti.closeWin($.screen2);
}

function showyellowview(){
	ezti.showView($.screen2,'yellowview');
}

function hideyellowview(){
	ezti.hideView($.screen2,'yellowview')
}
