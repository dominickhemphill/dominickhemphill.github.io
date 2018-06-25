var move-me = document.getElementById('move-me');

function move() {
	var position= 0;

	var thing= setInterval(frame, 20);


	function frame(){
		if(pos == 300){
			clearInterval(thing);

		}else{
			pos++;
			thing.style.left= pos + "pix";

		}
	}
}


move();