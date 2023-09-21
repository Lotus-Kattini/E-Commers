let signupbtn=document.querySelector('.signupbtn');
let closebtn=document.querySelector('.closebtn');
let body=document.querySelector('body');
let signup=document.querySelector('.signup')

signupbtn.addEventListener('click',()=>{
    body.classList.add('active');
})

closebtn.addEventListener('click',()=>{
    body.classList.remove('active');

})

// let cartlist=document.getElementById('test');
// console.log(cartlist)


let signinbtn=document.querySelector('.signinbtn');
let haveacc =document.querySelector('.haveacc');
let nameFiled=document.getElementById('nameFiled');
let confirmpass=document.querySelector('.confirmpass');
let createacc=document.querySelector('.createacc');
let signuptext=document.querySelector('.signuptext')
let signinbtnnew=document.querySelector('.signinbtnnew')


// signinbtn.onclick=function(){
//     nameFiled.style.maxHeight='0';
//     confirmpass.style.display='none'
//     haveacc.innerText='Dont Have an Account??'
//     signinbtn.innerHTML='Signup'
//     createacc.innerHTML='Sign in!'
//     signuptext.innerText='Welcome Back!'
//     signinbtn.onclick=function(){
//         nameFiled.style.maxHeight='';
//         confirmpass.style.display='inline-block'
//         haveacc.innerText='Already have an account..!'
//         signinbtn.innerHTML='Signin'
//         createacc.innerHTML='Create Your Account'
//         signuptext.innerText='Welcome to our website!'
//     }
// }

function signinhandler(){
    nameFiled.style.maxHeight='0';
    confirmpass.style.display='none'
    haveacc.innerText='Dont Have an Account??'
    signinbtn.style.display='none'
    signinbtnnew.style.display='inline-block'
    createacc.innerHTML='Sign in!'
    signuptext.innerText='Welcome Back!'
}

function signuphandler(){
    nameFiled.style.maxHeight='';
    confirmpass.style.display='inline-block'
    haveacc.innerText='Already have an account..!'
    signinbtn.innerHTML='Signin'
    createacc.innerHTML='Create Your Account'
    signuptext.innerText='Welcome to our website!'
    signinbtn.style.display='inline-block'
    signinbtnnew.style.display='none'
}
