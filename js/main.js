'use strict';
/*
const form=document.querySelector('.js-new-form');
form.classList.remove("collapsed");*/

/*const kitten=document.querySelector('.js-list');
const kittenOne = '<li class="card"><article>  <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="gatito"/>  <h3 class="card_title">Anastacio</h3> <h4 class="card_race">Siamés</h4> <p class="card_description">Porte elegante, su patrón de color tan característico y sus ojos           de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente. (Imagen no correspondiente)</p> </article></li>';

const kittenTwo = '<li class="card"><img class="card_img"src="https://dev.adalab.es/sphynx-gato.webp"      alt="sphynx-cat"/> <h3 class="card_title">Fiona</h3> <h4 class="card_race">Sphynx</h4> <p class="card_description">Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. </p></li>';

const kittenThree = '<li class="card"><img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp"   alt="maine-coon-cat" /> <h3 class="card_title">Cielo</h3> <h4 class="card_race">Maine Coon</h4> <p lass="card_description"> Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.   </p></li>';

kitten.innerHTML=kittenOne + kittenTwo + kittenThree;*/

const kitten=document.querySelector('.js-list');

const kittenImageOne = '<img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="gatito"/>' ;
const kittenNameOne = '<h3 class="card_title">Anastacio</h3>';
const kittenDescriptionOne = '<p class="card_description">Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente. (Imagen no correspondiente)</p>';
const kittenRaceOne = '<h4 class="card_race">Siamés</h4>';

const kittenImageTwo = '<img class="card_img"src="https://dev.adalab.es/sphynx-gato.webp"      alt="sphynx-cat"/>';
const kittenNameTwo = '<h3 class="card_title">Fiona</h3>';
const kittenDescriptionTwo = '<p class="card_description"> elegante Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. </p>';
const kittenRaceTwo = '<h4 class="card_race">Sphynx</h4>';

const kittenImageThree = '<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp"   alt="maine-coon-cat" />';
const kittenNameThree = '<h3 class="card_title">Cielo</h3>';
const kittenDescriptionThree = '<p lass="card_description"> Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.   </p>';
const kittenRaceThree = '<h4 class="card_race">Maine Coon</h4>';

const kittenOne = `<li>${kittenImageOne} ${kittenNameOne.toUpperCase()} ${kittenRaceOne} ${kittenDescriptionOne}</li>`;
const kittenTwo = `<li>${kittenImageTwo} ${kittenNameTwo.toUpperCase()} ${kittenRaceTwo} ${kittenDescriptionTwo}</li>`;
const kittenThree = `<li>${kittenImageThree} ${kittenNameThree.toUpperCase()} ${kittenRaceThree} ${kittenDescriptionThree}</li>`;

// kitten.innerHTML=kittenOne + kittenTwo + kittenThree;


//FILTRAR GATO VERSION BETA
// const input_search_desc = document.querySelector('.js_in_search_desc');
// const descrSearchText = input_search_desc.value;

// if( kittenDescriptionOne.includes(descrSearchText) ) {
//     kitten.innerHTML = kittenOne;
// }

// if( kittenDescriptionTwo.includes(descrSearchText) ) {
//     kitten.innerHTML += kittenTwo;
// }

// if( kittenDescriptionThree.includes(descrSearchText) ) {
//     kitten.innerHTML += kittenThree;
// }

//FALTA LA RAZA.
// const race = document.querySelectorAll('.card_race');
// let kittenRace = race.value;

// let html = '';

// if (kittenRace === "") {
//   html = `Uy que despiste, no sabemos su raza`;
//   console.log(html);
// } else {
//   html = kittenRace;
//   console.log(html);
// }


//MUESTRA Y OCULTA FORMULARIO DE INSERCION DE GATO
let formElement = document.querySelector(".js-new-form");
let formCollapsed = document.querySelector(".js-new-form1");

formElement.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formCollapsed.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        formCollapsed.classList.add('collapsed');
        hideNewCatForm();
    }
};

// formElement.addEventListener('click', () =>{
//     if (formCollapsed.classList.contains('collapsed')) {
//         showNewCatForm();
//     } else {
//         formCollapsed.classList.add('collapsed');
//         hideNewCatForm();
//     }
// });

function showNewCatForm() {
  formCollapsed.classList.remove('collapsed');
}
function hideNewCatForm() {
  formCollapsed.classList.add('collapsed');
}

//AÑADIR GATO

let buttonAdd = document.querySelector(".js-btn-add");

let inputDesc = document.querySelector('.js-input-desc');
let inputPhoto = document.querySelector('.js-input-photo');
let inputName = document.querySelector('.js-input-name');
let inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');

// buttonAdd.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const valueDesc = inputDesc.value;
//     const valuePhoto = inputPhoto.value;
//     const valueName = inputName.value;

//     if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//         labelMessageError.innerHTML="Uy, parece que has olvidado algo!";
//     } else {
        
//     }
// });

//modifica el evento para cumplir una función manejadora
buttonAdd.addEventListener('click', addNewKitten);



function addNewKitten(event) {
  //mueve el código que está dentro del evento
  event.preventDefault();
    let valueDesc = inputDesc.value;
    let valuePhoto = inputPhoto.value;
    let valueName = inputName.value;
    let valueRace = inputRace.value; 
   
   console.log(valueDesc);
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML="Uy, parece que has olvidado algo!";
    } else {
        renderKitten(valuePhoto, valueDesc, valueName, valueRace);
    }
}



//CANCELAR FORMULARIO Y VACIAR INPUTS

const btnCancel = document.querySelector('.js-btn-cancel');

const cancelNewKitten = (event) => {
  if(valueDesc !=='' || valuePhoto!== '' || valueName!==''){     valueDesc === '';
        valuePhoto === ''; 
        valueName === '';
        formCollapsed.classList.add('collapsed');

    }else{
        formCollapsed.classList.add('collapsed');
    }
};

btnCancel.addEventListener('click', cancelNewKitten);

// btnCancel.addEventListener('click', (event)=>{
//     if(valueDesc !=='' || valuePhoto!== '' || valueName!==''){
//         valueDesc === '';
//         valuePhoto === ''; 
//         valueName === '';
//         formCollapsed.classList.add('collapsed');

//     }else{
//         formCollapsed.classList.add('collapsed');
//     }
// });

//AÑADIR GATO: 

// let valueDesc = inputDesc.value;
// let valuePhoto = inputPhoto.value;
// let valueName = inputName.value;

function renderKitten(valuePhoto, valueDesc, valueName, valueRace) {
    // let newKitten = `<li>${valuePhoto} ${valueName.toUpperCase()} ${valueRace} ${valueDesc}</li>`;
    // kitten.innerHTML += newKitten;
    const race1 = `<h3 class="card_race">${valueRace}</h3>`;
    const race2 = `<p class="card_race">Uy que despiste, no sabemos su raza</p>`;

    if(valueRace!==''){
      let newKitten = `<li>${valuePhoto} ${valueName.toUpperCase()} ${race1} ${valueDesc}</li>`;
      kitten.innerHTML += newKitten;
    }else{
      let newKitten = `<li>${valuePhoto} ${valueName.toUpperCase()} ${race2} ${valueDesc}</li>`;
      kitten.innerHTML += newKitten;
    }
}

//FLITRAR GATO VERSION 2.0

const buttonSearch = document.querySelector('.js-btn-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js-type-cat');


const filterKitten = (event) => {
  event.preventDefault();  
  const descrSearchText = input_search_desc.value;
  const descrSearchRace= input_search_race.value;

  if(descrSearchText==='' && descrSearchRace=== ''){
    alert("TE FALTAN DATOS DE BÚSQUEDA");
  }
  
  if (kittenDescriptionOne.includes(descrSearchText)) {
    kitten.innerHTML += kittenOne;
  }
  if (kittenDescriptionTwo.includes(descrSearchText)) {
    kitten.innerHTML += kittenTwo;
  }
  if (kittenDescriptionThree.includes(descrSearchText)) {
    kitten.innerHTML += kittenThree;
  }  
};

buttonSearch.addEventListener('click', filterKitten);



