
function aaa(){

	rh=window.innerHeight/4
	rw=window.innerWidth/4
	t=rh+rh*Math.sin(i*5/360)
	l=rw+rw*Math.cos(i*5/360)

	a.style.top=t
	a.style.left=l

	i++;
	olog=log
	log="("+r+","+window.innerWidth+","+window.innerHeight+","+a.style.width+","+a.style.height+")"
	if(log!=olog){
		console.log("(w,h)="+log);
	}

	setTimeout(aaa,3);
}

i=0
var a=document.getElementById("ma-n");
a.style.position="relative"
a.style.backgroundColor="red"
//a.style.display=block
a.style.width="50%"
a.style.height="50%"

var w,h,t,l,log,olog,rw,rh
var r=100

var a=document.getElementById("ma-n");
a.innerHTML="<center>ww<br>ww</center>";
console.log("ha?");

aaa();