//      <----Navbar Section Start---->
window.addEventListener("scroll",function()
{
      var header =document.querySelector("header");
      header.classList.toggle("sticky",window.scrollY > 0);
}
//      <----Navbar Section END---->






//  /*<-------MAIN SECTION START---------->*/


// /*<-----MAIN CONTAINER START----->*/

// /*<-----MAIN CONTAINER END----->*/


//  /* <----ASIDE-----> */
const text = ["Welcome to One of the Largest One-One Interaction Community!!"]
let count=0;
let index=0;
let currentText="";
let letter="";

(function type(){

    if (count === text.length){
        count=0;
    }
    currentText=text[count]
    letter = currentText.slice(0,++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){

        index=0;
    }
    setTimeout(type,250);
})();
//  /* <----ASIDE END-----> */

//  /*<-------MAIN SECTION START END---------->*/










// var final = 100;
// var intial = 0;
// undefined
// var setInterval = setInterval(function(){
//     if (final < intial){
//         clearInterval(setInterval);
//     }intial  += 50;
//     window.scrollBy(0, 50);
// }, 50);

var footer = document.getElementById("footer");
var coordinates = footer.getBoundingClientRect();
console.log(coordinates);


var links = document.querySelectorAll('header nav ul li a');

for(var i = 0; i < links.length; i++ ){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetId = this.textContent.trim().toLowerCase();
        var target = document.getElementById(targetId)
        var interval = setInterval(function(){
            var coordinate = target.getBoundingClientRect();
            if(coordinate.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    })
}