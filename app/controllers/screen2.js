var ezti=require('ezti');

function closeme(){
	ezti.alert('My Title','This is the message');
	ezti.closeWin($.screen2);
}

function showyellowview(){
	ezti.addView($.screen2,'yellowview');
}
