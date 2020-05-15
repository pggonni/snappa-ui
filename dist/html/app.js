const addPlayerA = document.querySelector('#add-player-a');
const addPlayerB = document.querySelector('#add-player-b');
const a3Group = document.querySelector('#a3-form-group');
const a4Group = document.querySelector('#a4-form-group');
const b3Group = document.querySelector('#b3-form-group');
const b4Group = document.querySelector('#b4-form-group');

// Add players in team A
let counterA = 1;
addPlayerA.addEventListener('click', function() {
    if (counterA <= 1){
        a3Group.classList.remove('hidden');
        counterA++;
    } else {
        a4Group.classList.remove('hidden');
        counterA--
        addPlayerA.style.display = 'none';
        a3Exit.style.display = 'none';
    }
});

// Add players in team B
let counterB = 1;
addPlayerB.addEventListener('click', function() {
    if (counterB <= 1){
        b3Group.classList.remove('hidden');
        counterB++;
    } else {
        b4Group.classList.remove('hidden');
        counterB--
        addPlayerB.style.display = 'none';
        b3Exit.style.display = 'none';
    }
});

// // Form Validation attempt
// const fields = document.querySelectorAll('.form-control');
// const note = document.querySelector('#note')

// console.log(fields)

// for (let field of fields) {
//     if (field.value === "") {
//       note.style.display = 'block';
//     } else {
//         note.style.display = 'hidden';
//     }
// }

const a3Exit = document.querySelector('#a3-x');
const a4Exit = document.querySelector('#a4-x');
const b3Exit = document.querySelector('#b3-x');
const b4Exit = document.querySelector('#b3-x');

const closeParent = function(el) {
    el.parentElement.parentElement.classList.add('hidden');
}

a3Exit.addEventListener('click', function(){
    closeParent(a3Exit);
    counterA--
});

a4Exit.addEventListener('click', function(){
    closeParent(a4Exit);
    counterA--
    addPlayerA.style.display = 'flex';
    a3Exit.style.display = 'block';
});

b3Exit.addEventListener('click', function(){
    closeParent(b3Exit);
    counterB--
});

b4Exit.addEventListener('click', function(){
    closeParent(b4Exit);
    counterB--
    addPlayerB.style.display = 'flex';
    b3Exit.style.display = 'block';
});