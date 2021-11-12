let yr_name = document.getElementById('yrname')
let show_name = document.getElementById("showname")

function shownameAlert() {
    alert(yr_name.value)
}

function showName() {
    show_name.innerHTML = yr_name.value
}

function notshowname() {
    show_name.innerHTML = '???'
    
}

function alertAge() {
    let age = new Date().getFullYear() - Number(yr_byear.value)
    console.log(age);
    //alert(age)
}

let yr_byear = document.getElementById('yrbyear')
let show_age = document.getElementById('showage')
let click_B = document.getElementById('clickB')

click_B.addEventListener('click',()=>{
    let age = new Date().getFullYear() - Number(yr_byear.value)
    show_age.innerHTML = age
})
click_B.addEventListener('mouseover',alertAge)



let show_sex = document.getElementById('showsex')
let click_C = document.getElementById('clickC')
let yr_sexm = document.getElementById('yrsexm')
let yr_sexf = document.getElementById('yrsexf')
click_C.onmouseover = ()=>{
    if(yr_sexm.checked == true){
        alert('คุณเป็นเพศชาย')
    }
    if(yr_sexf.checked == true){
        alert('คุณเป็นเพศsหญิง')
    }    
}

function showPerson() {
    if(yr_sexm.checked == true){
       show_sex.innerHTML = 'ชาย'
    }
    if(yr_sexf.checked == true){
        show_sex.innerHTML = 'หญิง'
     }
} 
click_C.onclick = showPerson
   
