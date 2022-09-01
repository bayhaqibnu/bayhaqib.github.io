let root = document.getElementById('wrapper-content');

let link = root.querySelectorAll('a');
let textContent = root.querySelectorAll('p');
let icon = root.querySelectorAll('i');


for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', function () {
        icon[i].classList.toggle('change');
    });

    link[i].addEventListener('mouseleave', function () {
        icon[i].classList.remove('change');
    });
};



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