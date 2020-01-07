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
    window.warningDiv = document.querySelector(".warning"); //global variable
    warningDiv.innerHTML = ""; //clears the red output

    var name = document.querySelector("#name");
    var password = document.querySelector("#password");
    var email = document.querySelector("#email");
    var password_again = document.querySelector("#password_again");

    validateName(udalost, name);
    validateEmail(udalost, email);
    validatePassword(udalost, password);
    validatePasswordAgain(udalost, password_again);
}
function validateName (event, element){
    if (!element){
        var element = event.target;
    }
    if (element.value.length < 5){
        element.className = 'error';
        event.preventDefault();
        warningDiv.innerHTML += "<p>Krátké jméno</p>";
        
    }
    else{
        element.className = '';
    }
}
function validateEmail (event, element){
    if (!element){
        var element = event.target;
    }
    if (element.value.indexOf('@') == -1){
        element.className = 'error';
        event.preventDefault();
        warningDiv.innerHTML += "<p>Špatně zadaný email</p>";
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
        warningDiv.innerHTML += "<p>Krátké heslo</p>";
    }
    else{
        element.className = '';
    }
}
function validatePasswordAgain (event, element){
    if (!element){
        var element = event.target;
    }
    if (element.value.length != password.value.length){
        element.className = 'error';
        event.preventDefault();
        warningDiv.innerHTML += "<p>Neshodují se hesla</p>";
    }
    else if (password.value.length == 0){
        element.className = 'error';
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
