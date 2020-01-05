function hover(){
    const js = document.querySelectorAll(".nav-top a, .nav-left a");
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
  function navTransition(){
    window.onscroll = function() {scrollFunction()};
    const nav_top = document.querySelector('.nav-top');
    const nav_left = document.querySelector('.nav-left');
    const div_left = document.querySelector('.div-left');
    const logo = document.querySelector('.logo');
    const header = document.querySelector('.header');
    const button = document.querySelector('.btn-to-top');
  
    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        //document.documentElement.style.setProperty('--hover-color', '#66666666');
        logo.classList.add("scrolled");
        nav_top.classList.add("scrolled");
        div_left.classList.add("scrolled");
        nav_left.classList.add("scrolled");
        header.classList.add("scrolled");
        button.classList.add("scrolled");
        //button.style.right = "20px";
      } else {
        //document.documentElement.style.setProperty('--hover-color', '#69696969');
        logo.classList.remove("scrolled");
        nav_top.classList.remove("scrolled");
        div_left.classList.remove("scrolled");
        nav_left.classList.remove("scrolled");
        header.classList.remove("scrolled");
        button.classList.remove("scrolled");
        //button.style.right = "-100px";
      }
    }
  }
  function buttonUp(){
    const but = document.querySelector(".btn-to-top");
  
    but.addEventListener('mouseover', function(){but.classList.toggle("js-style")});
    but.addEventListener('mouseout', function(){but.classList.toggle("js-style")});
  
    but.addEventListener("click", function(){
      window.scrollTo(0, 0);
    })
  }  