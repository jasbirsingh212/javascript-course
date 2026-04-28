const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtns = document.querySelectorAll('.show-modal');
const showModalParent = document.querySelector('.show-modal-parent');

const handleModalShow = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const handleModalClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModalBtns.forEach(btn => {
  btn.addEventListener('click', handleModalShow);
});

//========================================================
// performance optimization: event delegation

// showModalParent.addEventListener('click', e => {
//   if (e.target.classList.contains('show-modal')) {
//     handleModalShow();
//   }
// });

//========================================================

btnClose.addEventListener('click', handleModalClose);
overlay.addEventListener('click', handleModalClose);
