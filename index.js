
function aaa(){

	rh=(window.innerHeight-h)/2
	rw=(window.innerWidth-w)/2
	t=rh+rh*Math.sin((3*i/fps)*2*Math.PI)
	l=rw+rw*Math.cos((3*i/fps)*2*Math.PI)

	a.style.top=t
	a.style.left=l

	i++;
	olog=log
	log="("+r+","+window.innerWidth+","+window.innerHeight+","+a.style.width+","+a.style.height+")"
	if(log!=olog){
		console.log("(w,h)="+log);
	}

	setTimeout(aaa,1000/fps);
	b.innerHTML=Math.floor(1000/fps*i%1000%10)
	if(i>fps){
		i=i%fps
		console.log(j)
		j++
	}
}

fps=300
var i=0,j=0

var a=document.getElementById("ma-n");
var b=document.getElementById("ha");
a.style.position="relative"
a.style.backgroundColor="red"
//a.style.display=block
w=30
h=30
a.style.width=w
a.style.height=h

var w,h,t,l,log,olog,rw,rh
var r=100

a.innerHTML="<center>ww<br>ww</center>";
console.log("ha?");

aaa();