let Form = document.getElementsByClassName("Form");
let ExitBtn = document.getElementsByClassName("QuoteBTNExit");
let x = new Boolean(false);

function UpdateForm(){
    if(x==false){
        Form[0].style.display = "inline-block"
        ExitBtn[0].style.display = "inline-block"
        x=true;
    }
    else{
        Form[0].style.display = "none"
        ExitBtn[0].style.display = "none"
        x=false;
    }
}