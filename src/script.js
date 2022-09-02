let root = document.getElementById('wrapper-content');

let allParagraf = document.querySelectorAll('p');
let allHeading = document.querySelectorAll('h1');
let link = root.querySelectorAll('a');
let icon = root.querySelectorAll('i');


for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', function () {
        icon[i].classList.toggle('change');
    });

    link[i].addEventListener('mouseleave', function () {
        icon[i].classList.remove('change');
    });
};

function mode(isDark){
    if(isDark == 'true'){
        document.body.style.backgroundColor='rgba(0,0,0,0.7)';
        document.body.style.color='white';
        for(let i=0; i<allParagraf.length; i++){
            allParagraf[i].style.color='white';
        }
    }else {
        document.body.style.backgroundColor='rgba(0,0,0,0.01)';
        document.body.style.color='black';
        for(let i=0; i<allParagraf.length; i++){
            allParagraf[i].style.color='black';
        }
    }
}



// for(let i = 1; i <= link.length; i++) {
//     console.log(`test ${i}`);
// }

// root.forEach(function(el) {
//     el.addEventListener('mouseenter', function() {
//         for(let i = 0; i < textContent.length; i++) {
//                 console.log('test cuy');
//         }
//     });
// });



// console.log(link[0]);
// console.log(textContent[0]);
// console.log(icon[0]);