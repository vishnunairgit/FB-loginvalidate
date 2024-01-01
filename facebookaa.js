function facebookaa() 
{
    const facebookaa = document.getElementById('facebookaa');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    facebookaa.style.display ="none";
    if (name.length == 0) {
        facebookaa.innerText = "please enter full name";
        facebookaa.style.display = "block";
        return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ .test (email) ==false) {
        facebookaa.innerText="please enter a valid email";
        facebookaa.style.display ="block"
        return false
    }
    if (password.length < 8){
        facebookaa.innerText = "enter proper password";
        facebookaa.style.display ="block";
        return false;
    }

    alert ("success");
    return false ;
}



// if (/^\w+([\.-]?\w+)*@\w+"([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ==false ) {
//     facebookaa.innerText = "please enter email";
//     facebookaa.style.display = "block";
//     return false;
// facebookaa.style.display="none"


// const Password = document.getElementById('Password').value ;
//     displayerroermes.style.display ="none"
//     if(Password.length < 8){
//         displayerroermes.innerText = "password should be in 8 letter";
//         displayerroermes.style.display ="block";
//         return false
//     }



    // const facebookaa = document.getElementById('facebookaa');
    // const name = document.getElementById('name').value;
    // displayerroermes.style.display="none"
    // if(name.length ==0 ) {
    //     facebookaa.innerText ="please enter your full name";
    //     facebookaa.style.display = "block";
    //     return false;

let student ={
    firstName: 'vishnu', 
    lastName: 'nair', 
    age: 31, 
    isPassed: 'yes',

};
const car = {
    model: 'nissan',
    colour: 'red',
    drive: function () {
        console.log("boooom");
    },


};

console.log(car);