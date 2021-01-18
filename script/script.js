var x=0;
var y=0;

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut(6000);
  });

function changeTheme() {
    if(x==0)
    {
        p=document.getElementById("para");
        p.style.color ="black";
        document.getElementById("head").style.color="black";
        document.getElementById("body").style.backgroundColor="#f5f4f4";
        document.getElementById("credits").style.color="black";
        document.getElementById("profile").src="Photos/circle-cropped-2.png";
        document.getElementById("cross1").src="Photos/image.png";
        document.getElementById("cross2").src="Photos/image.png";
        img=document.getElementById("geek1");
        img.src="Photos/image 2.png";
        img.style.margintop="-20px";
        x=x+1;
    }
    else
    {
        p=document.getElementById("para");
        p.style.color ="white";
        document.getElementById("head").style.color="white";
        document.getElementById("body").style.backgroundColor="#1D1E20";
        document.getElementById("geek1").src="Photos/GH_logo.png";
        document.getElementById("profile").src="Photos/Untitled-1 2.png";
        document.getElementById("credits").style.color="white";
        document.getElementById("cross1").src="Photos/Vector-3.png";
        document.getElementById("cross2").src="Photos/Vector-3.png";
        x=x-1;
    }

}
function changeIcon() {
    if (y==0) {

        document.getElementById("menu").className="fa fa-times";
        y=y+1;

        
    } 
    
    else {
        document.getElementById("menu").className="fa fa-bars";
        y=y-1;

        
    }
    
}
