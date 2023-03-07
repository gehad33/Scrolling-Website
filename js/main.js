let stars =document.getElementById("stars")
let moon =document.getElementById("moon")
let mountains3 =document.getElementById("mountains3")
let mountains4 =document.getElementById("mountains4")
let river =document.getElementById("river")
let boat =document.getElementById("boat")
let logoname =document.querySelector('.logoname')

window.onscroll=(function(){
    let value= scrollY;
    stars.style.left= value+'px';
    moon.style.top= value*4+'px';
    mountains3.style.top= value*2 + 'px';
    mountains4.style.top= value* 1.5+'px';
    river.style.top= value + 'px';
    boat.style.top= value + 'px';
    boat.style.left= value *3+ 'px';
    logoname.style.fontSize= value +'px';
    if(scrollY >= 67){
        logoname.style.fontSize= 67 +'px';
        logoname.style.position= 'fixed';
        if (scrollY>= 426){
            logoname.style.display= 'none';
        }
        else{
            logoname.style.display= 'block';
        }
        if(scrollY>=128){
            document.querySelector('.content').style.background='linear-gradient(#376281,#10001f)'

        }else{
            document.querySelector('.content').style.background='linear-gradient(#200016,transparent)'

        }
    }


})