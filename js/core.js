function hover(){
    const js = document.querySelectorAll(".nav-links-top a");
    for(var i = 0 ; i < js.length; i++){
      js[i].addEventListener('mouseover', changeDefOver);
      js[i].addEventListener('mouseout', changeDefOut);
    }
    function changeDefOver(e) {
      e.target.classList.toggle("js-style");
      //e.target.style.backgroundColor = "var(--hover-color)";
      //e.target.style.color = "beige";
    }
    function changeDefOut(e) {
      e.target.classList.toggle("js-style");
      //e.target.style.backgroundColor = "initial";
      //e.target.style.color = "initial";
    }
}