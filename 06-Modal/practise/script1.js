const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModalElements = document.querySelectorAll('.show-modal');

const handleModal = () => {
  modalElement.classList.toggle('hidden');
  overlayElement.classList.toggle('hidden');
};

overlayElement.addEventListener('click', handleModal);
closeModal.addEventListener('click', handleModal);

showModalElements.forEach(item => {
  item.addEventListener('click', handleModal);
});
