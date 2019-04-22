
function aaa(){

	rh=(window.innerHeight-h)/2
	rw=(window.innerWidth-w)/2
	t=rh+rh*Math.sin((5*i/fps)*2*Math.PI)*0
	l=rw+rw*Math.cos((5*i/fps)*2*Math.PI)*0

	rad=1*360/fps*i
	a.style.transform=""

//	a.style.transform+="rotate("+(-45)+"deg)"
	a.style.webkitTransform+="rotateX("+rad/3+"deg)"
/*
	a.style.transform+="rotate("+45+"deg)"
	a.style.transform+="rotateX("+rad/3+"deg)"
	a.style.transform+="rotate("+15+"deg)"
	a.style.transform+="rotateX("+rad/3+"deg)"
	a.style.transform+="rotate("+15+"deg)"
	a.style.transform+="rotateX("+rad/3+"deg)"
	a.style.transform+="rotate("+15+"deg)"
	a.style.transform+="rotateX("+rad/3+"deg)"
	a.style.transform+="rotate("+15+"deg)"
	a.style.transform+="rotateX("+rad/3+"deg)"
	a.style.transform+="rotate("+15+"deg)"
	*/
	

	console.log(a.style.transform)

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
}

fps=600
var i=0,j=0

var c=document.getElementById("a");
//c.innerHTML=
c.style.perspective="300px"
var a=document.getElementById("ma-n");
var b=document.getElementById("ha");
c.style.webkitPerspective="100px"
a.style.position="relative"
b.style.position="relative"
b.style.top=-85
b.style.left=0
b.style.width=300
b.style.height=300
//a.style.padding=10
//b.style.backgroundColor="black"
a.style.backgroundColor="red"
a.style.transformOrigin="top"

a.style.transformStyle="preserve-3d"

//a.style.display=block
w=30
h=50
a.style.width=w
a.style.height=h
//a.style.borderRadius="50%"
a.style.transform="rotate(30deg)"


var w,h,t,l,log,olog,rw,rh
var r=100

a.innerHTML="<center>ab<br>cd</center>";
console.log("ha?");

aaa();