import './card.js';

const modalHide = document.querySelector('.modal-hide');

const btnOpenOne = document.querySelector('#buttonOpenTaskOne');
const btnOpenTwo = document.querySelector('#buttonOpenTaskTwo');

const btnCloseOne = document.querySelector('#btnCloseOne');
const btnCloseTwo = document.querySelector('#btnCloseTwo');

const modals = document.querySelectorAll('.modal');

btnOpenOne.addEventListener('click', openModal);
btnOpenTwo.addEventListener('click', openModal);

btnCloseOne.addEventListener('click', closeModal);
btnCloseTwo.addEventListener('click', closeModal);

function openModal() {
    modals.forEach(modal => {

        if (this.getAttribute('data-btn-number') == modal.getAttribute('data-modal-number')) {
            modalHide.classList.add('modal-hide_on')
            modal.classList.remove('modal_none')
            return
        }
    })
};

function closeModal() {
    modals.forEach(modal => modal.classList.add('modal_none'))
    modalHide.classList.remove('modal-hide_on')
};