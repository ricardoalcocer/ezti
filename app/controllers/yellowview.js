var ezti=require('ezti');

function hideme(e){
	e.cancelBubble=true; // this is required here so the event is not sent to the parent object
	ezti.removeView(e.source.parent,$.yellowview);
}
