//form 
const newCardType = document.querySelector('#card-type');
const newCardTitle = document.querySelector('#title');
const newCardBody = document.querySelector('#text-body');
const addNewCard = document.querySelector('#add-btn');

//card
const cardTitle = document.querySelector('#card-title-text');
const cardTitleDate = document.querySelector('#card-title-data');
const cardBody = document.querySelector('.card-text-body');
const cardCompleteBtn = document.querySelector('#complete');
const cardDeleteBtn = document.querySelector('#delete');

addNewCard.addEventListener('click', (e) => {
    e.preventDefault();
})