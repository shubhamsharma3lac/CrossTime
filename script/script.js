var person = 
{
    name : "Shubham Sharma",
    age : 24,
    interests : ['coding', 'ben10']
};


function init2(){
    var menuItem1 = document.querySelector("#goog");
    menuItem1.addEventListener('click', SetUserName, false);

    var menuItem2 = document.querySelector("#google");
    menuItem2.addEventListener('click', GetUserName, false);
}

function SetUserName(){
    var user = prompt('Enter username');
    localStorage.setItem('user', user);
}

function GetUserName(){
   /* if(!localStorage.getItem('user'))
    {
        SetUserName();
    }
    var user = localStorage.getItem('user');
    alert('Hello ' + user);*/

    alert("Hello " + person.interests[0]);
}