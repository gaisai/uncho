
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