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
const kittenDescriptionTwo = '<p class="card_description">Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo. </p>';
const kittenRaceTwo = '<h4 class="card_race">Sphynx</h4>';

const kittenImageThree = '<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp"   alt="maine-coon-cat" />';
const kittenNameThree = '<h3 class="card_title">Cielo</h3>';
const kittenDescriptionThree = '<p lass="card_description"> Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.   </p>';
const kittenRaceThree = '<h4 class="card_race">Maine Coon</h4>';

const kittenOne = `<li>${kittenImageOne} ${kittenNameOne.toUpperCase()} ${kittenRaceOne} ${kittenDescriptionOne}</li>`;
const kittenTwo = `<li>${kittenImageTwo} ${kittenNameTwo.toUpperCase()} ${kittenRaceTwo} ${kittenDescriptionTwo}</li>`;
const kittenThree = `<li>${kittenImageThree} ${kittenNameThree.toUpperCase()} ${kittenRaceThree} ${kittenDescriptionThree}</li>`;

kitten.innerHTML=kittenOne + kittenTwo + kittenThree;

//MUESTRA Y OCULTA FORMULARIO DE INSERCION DE GATO
let formElement = document.querySelector(".js-new-form");
let formCollapsed = document.querySelector(".js-new-form1");


formElement.addEventListener('click', (event)=>{
    if (formCollapsed.classList.contains('collapsed')) {
        formCollapsed.classList.remove('collapsed');
    } else {
        formCollapsed.classList.add('collapsed');
    }
});

//AÑADIR GATO

let buttonAdd = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

buttonAdd.addEventListener('click', (event)=>{
    event.preventDefault();
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;

    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
        labelMessageError.innerHTML="Uy, parece que has olvidado algo!";
    } else {
        
    }
});

//CANCELAR FORMULARIO