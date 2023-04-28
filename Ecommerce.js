//First Name
function firstName(){
    var fb = document.getElementById('firstBack')
    const regex = /^[^0-9]$/
    

    if (regex.test(fn.value)){
        fb.textContent = ''
    } else{
        fb.textContent = 'Invaild Name'

    }
}
var fn = document.getElementById('fName')
fn.addEventListener('blur', firstName)


//User Name
function checkUser(){
    var b= document.getElementById('feedback')

    if (a.value.length < 8){
        b.textContent = 'Username must be 8 characters or more'
    } else {
        b.textContent = ''
    }
}
var a = document.getElementById('usern')
a.addEventListener('blur', checkUser)


//Password
function checkPass(){
    var d= document.getElementById('feedBack')

    if (c.value.length < 12){
        d.textContent = 'Password must be 12 characters or more'
    } else {
        d.textContent = ''
    }
}
var c = document.getElementById('passw')
c.addEventListener('blur', checkPass)

//Text Area
var sub = document.getElementById('sub2')
sub.addEventListener('click', changeColor)

function changeColor(){
    var area = document.getElementById('area')
    
    area.style.backgroundColor = '#656176'
}