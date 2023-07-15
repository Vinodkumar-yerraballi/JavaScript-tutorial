// input element
let inputElement=document.getElementById("InputElement");
let SignIntext=document.getElementById("SiginText");

function SignIn(){
    let inputValue=inputElement.value;
    let VerifyText='Hi' + inputValue + ", Verifying your text...";
    SignIntext.textContent=VerifyText;
}