function validate(udalost){
    window.warningDiv = document.querySelector(".warning"); //global variable
    warningDiv.innerHTML = ""; //clears the red output

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
        warningDiv.innerHTML += "<p>Krátké jméno</p>";
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
function init(){
    var formular = document.querySelector("body form#login");
    //console.log(formular);
    formular.addEventListener('submit', validate);
    //var name = document.querySelector("#name");
    //var email = document.querySelector("#email");
}