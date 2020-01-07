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
function validate(udalost){
    var name = document.querySelector("#name");
    var password = document.querySelector("#password");

    validateName(udalost, name);
    validatePassword(udalost, password);

}
function validateName (event, element){
    if (!element){
        var element = event.target;
    }
    if (element.value.length < 5){
        element.className = 'error';
        event.preventDefault();
    }
    else{
        element.className = '';
    }
}
function validatePassword (event, element){
    if (!element){
        var element = event.target;
    }
    if (element.value.length < 5){
        element.className = 'error';
        event.preventDefault();
    }
    else{
        element.className = '';
    }
}
function init(){
    var formular = document.querySelector("body form#login");
    //console.log(formular);
    formular.addEventListener('submit', validate);
    //var name = document.querySelector("#name");
    //var email = document.querySelector("#email");
}