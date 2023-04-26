let tanitim = document.getElementById('tanitim')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let mainboxcontent = document.querySelector('.main-box-content')
let baza = [
    'WEB DESIGN',
    'CREATIVE DESIGN',
    'GRAPHIC DESIGN',
    'WEB DEVELOPER'
    
]

let i = 0;
setInterval(() => {
    if(i==0){
        tanitim.innerHTML = baza[0];
        tanitim.classList.add ("section1-div2-p2-copy")
    }
    else if(i==1){
        tanitim.innerHTML = baza[1];
        tanitim.classList.add ("section1-div2-p2-copy")
    }
    else if(i==2){
        tanitim.innerHTML = baza[2];
        tanitim.classList.add ("section1-div2-p2-copy")
    }
    else if(i==3){
        tanitim.innerHTML = baza[3];
        tanitim.classList.add ("section1-div2-p2-copy")
    }
    i++;
    if(i==4){
        i = 0;
    }
    
}, 1000);


btn2.addEventListener('click',function(e){
    mainboxcontent.classList.add('main-box-contentcopy')
})
btn1.addEventListener('click',function(e){
    mainboxcontent.classList.remove('main-box-contentcopy')
})




















// setInterval(() => {
//     tanitim.innerHTML = ""
// for(let i = 0; i < baza.length; i++){
//     if(i == 0){
//         tanitim.innerHTML += baza[0]
//     tanitim.classList.add ("section1-div2-p2-copy")
//     }
    

// }
// },1000);

// setInterval(() => {
    
// tanitim.innerHTML = ""
// for(let i = 0; i < baza.length; i++){
//     if(i == 1){
//         tanitim.innerHTML += baza[1]
//     tanitim.classList.add ("section1-div2-p2-copy")
//     }
    

// }
// }, 2000);
// // tanitim.classList.remove ("section1-div2-p2-copy")
// setInterval(() => {
    
//     tanitim.innerHTML = ""
//     for(let i = 0; i < baza.length; i++){
//         if(i == 2){
//             tanitim.innerHTML += baza[2]
//         tanitim.classList.add ("section1-div2-p2-copy")
//         }
        
    
//     }
//     }, 3000);
//     setInterval(() => {
    
//         tanitim.innerHTML = ""
//         for(let i = 0; i < baza.length; i++){
//             if(i == 3){
//                 tanitim.innerHTML += baza[3]
//                 tanitim.classList.add ("section1-div2-p2-copy")
//             }
           
        
//         }
//         }, 4000);






