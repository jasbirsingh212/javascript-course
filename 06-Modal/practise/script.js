// @ts-nocheck
'use strict';

const handleShowModal = () => {
    document.querySelector('.modal').style.display='block'
    document.querySelector('.overlay').style.display='block'
}

const handleCloseModal = () => {
    document.querySelector('.modal').style.display='none'
    document.querySelector('.overlay').style.display='none'
}
const btnOpenModal = document.querySelectorAll('.show-modal');

btnOpenModal.forEach((item) => {
    item.addEventListener('click', handleShowModal);
})

document.querySelector('.close-modal').addEventListener('click', handleCloseModal);
document.querySelector('.overlay').addEventListener('click', handleCloseModal);