function validate(udalost){
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");

    validateName(udalost, name);
    validateEmail(udalost, email);

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
function validateEmail (event, element){
    if (!element){
        var element = event.target;
    }
    if (element.value.indexOf('@') == -1){
        element.className = 'error';
        event.preventDefault();
    }
    else{
        element.className = '';
    }
}
function init(){
    var formular = document.querySelector("body form#registrace");
    //console.log(formular);
    formular.addEventListener('submit', validate);
    //var name = document.querySelector("#name");
    //var email = document.querySelector("#email");
}
