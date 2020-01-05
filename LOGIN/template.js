function back(){
    const element = document.querySelector('#back');

    element.setAttribute('href', document.referrer);
    element.onclick = function() {
    history.back();
    return false;
    }
}