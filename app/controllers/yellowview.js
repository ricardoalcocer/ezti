var ezti=require('ezti');

function hideme(e){
	e.cancelBubble=true;
	ezti.hideMe($.yellowview);
}
