

let GrunedaEl = document.querySelector('.Gruneda');
let NoManLandEl = document.querySelector('.NoManLand');
let AshtalEl = document.querySelector('.Ashtal');
let GrunedaIndepthEl = document.querySelector('.Gruneda-indepth');
let NoManLandIndepthEl = document.querySelector('.NoManLand-indepth');
let AshtalIndepthEl = document.querySelector('.Ashtal-indepth');
let PageHeaderEl = document.querySelector('.page-header');

GrunedaEl.addEventListener('click', ()=>{
    GrunedaEl.style.display = 'none';
    NoManLandEl.style.display = 'none';
    AshtalEl.style.display = 'none';
    GrunedaIndepthEl.style.display = 'block';
    PageHeaderEl.style.display = 'none';
});

NoManLandEl.addEventListener('click', ()=>{
    GrunedaEl.style.display = 'none';
    NoManLandEl.style.display = 'none';
    AshtalEl.style.display = 'none';
    NoManLandIndepthEl.style.display = 'block';
    PageHeaderEl.style.display = 'none';
});

AshtalEl.addEventListener('click', ()=>{
    GrunedaEl.style.display = 'none';
    NoManLandEl.style.display = 'none';
    AshtalEl.style.display = 'none';
    AshtalIndepthEl.style.display = 'block';
    PageHeaderEl.style.display = 'none';
});
