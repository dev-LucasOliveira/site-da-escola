const modal = document.getElementById('modal');

let showModal = false;

function toggleModal() {

    showModal = !showModal;

    if (showModal === true) {

        modal.style.display = 'flex';
        
    }else {
    
        modal.style.display = 'none';
    
    };

}