const empty =""
const uCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase ="abcddefghijklmnopqrstuvwyz";
const number ="0123456789";
const symbol ="!@#$%^&*-_";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-upperCase");
const lowerCase = document.getElementById("p-lowerCase");
const pnumber = document.getElementById("p-number");
const psymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");


submit.addEventListener("click",() => {
    let initialpassword =  empty;
    (upperCase.checked) ?  initialpassword += uCase: "";
    (lowerCase.checked) ?  initialpassword += lCase: "";
    (pnumber.checked) ?  initialpassword += number: "";
    (psymbol.checked) ?  initialpassword += symbol: "";

    password.value = generatePasswword(pLength.value,initialpassword)


});

function generatePasswword(p,initialpassword){
    let pass = "";
    for(let i=0;i<p;i++){
    pass +=initialpassword.charAt(Math.floor(Math.random() * initialpassword.length));
    }
    return pass;

}
//copy password to clopboard
const copy  = document.getElementById("copy");
copy.addEventListener("click", () => {
    if(password.value == "")
    {
        alert("please generate the password")

    }
    else
    {
        password.select();
        document.execCommand("copy");
        alert("password has been copied to clipboard");
    }
});