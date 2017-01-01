var total;
var tags;
var zindex;

function add(){
	var x = document.getElementById("x");
	var y = document.getElementById("y");
	var notetext = document.getElementById("notetext");
	if(x.value > 450 || x.value < 50){
		window.alert("Invalid X Value!");
		return;
	}
	else if(y.value > 750 || y.value < 50){
		window.alert("Invalid Y Value!");
		return;
	}
	localStorage.setItem( total++ , x.value );
	localStorage.setItem( total++ , y.value );
	localStorage.setItem( total++ , notetext.value );
	notetext.value = "";
	refresh();
}

function refresh(){
	var string = "";
	var length = localStorage.length;
	tags = new Array();
	
	for ( var i = 0 ; i < length ; i++ ){
		tags[i] = localStorage[i];
	}
		
	for ( i = 0 ; i < length ; i++ ){
		string += "<img height='150' width='120' class='note' style='top: "
		string += tags[i];
		string += "px; left: ";
		string += tags[i+1];
		string += "px; z-index:";
		string += zindex++;
		string += ";' src='postIt.png' />";
		string += "<p class='notetext' style='top: "
		string += parseInt(tags[i])+10;
		string += "px; left:"; 
		string += tags[i+1];
		string += "px; z-index:";
		string += zindex++;
		string += ";'>"
		string += tags[i+2];
		string += "</p>";
		i += 2;
	}
	var show = document.getElementById("show");
	show.innerHTML = string;
}

function removeAll(){
	localStorage.clear();
	zindex = 2;
	total = 0;
	refresh();
	window.alert("移除所有便利貼");
}

function start() {
	var addButton = document.getElementById("addButton");
	var removeAllButton = document.getElementById("removeAllButton");
	addButton.addEventListener( "click", add , false );
	removeAllButton.addEventListener( "click", removeAll , false );
	total = 0;
	zindex = 2;
	refresh()
}

window.addEventListener("load", start, false );