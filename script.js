let carouselImgArray = [
    "https://i.im.ge/2022/10/04/1kP9t4.crianca-estudando.jpg",
    "https://i.im.ge/2022/10/04/1kPhYM.classe-grupo-roda.jpg",
    "https://i.im.ge/2022/10/04/1kPwOq.crianca-no-computador.jpg",
    "https://i.im.ge/2022/10/04/1kP6jp.crinaca-globo-terrestre.jpg",
    "https://i.im.ge/2022/10/04/1kPNWP.crincas-desenhando.jpg",
    "https://i.im.ge/2022/10/04/1kPto1.frente-da-escola.jpg"
];

let carouselTxtArray = [
    'Aprendedizagem e diversão!',
    'Acreditamos que o trabalho em grupo é a chave para a formação da criança na sociedade.',
    'Entendemos que o mundo é outro e a tecnologia faz parte da vida das nossas crianças.',
    'Valorizamos o processo de curiosidade e criatividade.',
    'O aluno Olariense aprende a expressar seus pensamentos em um ambiente seguro.',
    'A Escola Olaria preparando o seu filho para o mundo'
];

const imgCarousel = document.getElementById('img-carousel');
const txtCarousel = document.getElementById('txt-carousel');

let imageIndex = 0;

function changeCarousel(btnNumber) {

    if (btnNumber === 1) {
        imageIndex = imageIndex - 1;
	    imgCarousel.src = carouselImgArray[imageIndex]; 
	    txtCarousel.innerText = carouselTxtArray[imageIndex]; 
        
        if (imageIndex < 0) {
            imageIndex = imageIndex + 6;
            imgCarousel.src = carouselImgArray[imageIndex];
            txtCarousel.innerText = carouselTxtArray[imageIndex];
        }
    }

    if (btnNumber === 2) {
        imageIndex = imageIndex + 1;
        imgCarousel.src = carouselImgArray[imageIndex];
        txtCarousel.innerText = carouselTxtArray[imageIndex]; 
        
        if (imageIndex > 5) {
            imageIndex = imageIndex - 6;
            imgCarousel.src = carouselImgArray[imageIndex];
            txtCarousel.innerText = carouselTxtArray[imageIndex];
        }    
    }

};



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


const page = document.getElementById('page');

function  goTo(btnNumber) {

    if (btnNumber === 1) {
        window.scrollTo({
            top: 580,
            left: 0,
            behavior: 'smooth'
        });
    }

    if (btnNumber === 2) {
        window.scrollTo({
            top: 2125,
            left: 0,
            behavior: 'smooth'
        });
    }
    
}