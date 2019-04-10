
i=0
var a=document.getElementById("ma-n");
a.style.position="relative"
a.style.width=100
a.style.height=100
var w,h,t,l,log,olog
var r=100

function aaa(){

	t=r+r*Math.sin(i*5/360)
	l=r+r*Math.cos(i*5/360)
	a.style.top=t
	a.style.left=l

/*
	if( i%2 == 1){
//		a.innerHTML="oppai";
		a.innerHTML="w="+window.innerWidth
		w=a.innerHTML
		a.style.color="red"
		a.style.width=300
		a.style.height=500
		a.style.backgroundColor="blue"
		a.style.top=300
		a.style.left=500
	}else{
//		a.innerHTML="oma-n";
		a.innerHTML="h="+window.innerHeight
		h=a.innerHTML
		a.style.color="blue"
		a.style.width=500
		a.style.height=300
		a.style.backgroundColor="red"
		a.style.top=500
		a.style.left=300
	}
*/
	i++;
	olog=log
	log="("+w+","+h+")"
	if(log!=olog){
		console.log("(w,h)="+log);
	}
	setTimeout(aaa,3);
}


var a=document.getElementById("ma-n");
a.innerHTML="ww<br>ww";
console.log("ha?");

aaa();