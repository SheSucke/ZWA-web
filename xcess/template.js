function back(){
    const element = document.querySelector('#back');

    element.setAttribute('href', document.referrer);
    element.onclick = function() {
    history.back();
    return false;
    }
}
function hover(){
    const js = document.querySelectorAll("#back");
    for(var i = 0 ; i < js.length; i++){
      js[i].addEventListener('mouseover', changeDefOver);
      js[i].addEventListener('mouseout', changeDefOut);
    }
    function changeDefOver(e) {
      e.target.classList.toggle("js-style");
      //e.target.style.backgroundColor = "var(--a-hover-color)";
      //e.target.style.color = "beige";
    }
      
    function changeDefOut(e) {
      e.target.classList.toggle("js-style");
      //e.target.style.backgroundColor = "var(--a-color)";
      //e.target.style.color = "initial";
    }
}