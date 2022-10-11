let carouselNameArray = [
    "Vitória",
    "Tiago",
    "Carlos",
    "Maria",
    "Renata",
    "Vitor"
];

let carouselTitleArray = [
    '(Mãe do Tiago - 1° ano do Ensino fundamental)',
    '(Pai da Carla - 3° ano do Ensino fundamental)',
    '(Pai do Lucas - 6° ano do Ensino fundamental)',
    '(Mãe da Esther - 2° ano do Ensino fundamental)',
    '(Mãe do Tiago - 5° ano do Ensino fundamental)',
    '(Pai do Pedro - 8° ano do Ensino fundamental)'
];

let carouselDescripitionArray = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...',
    'Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.',
    'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.',
    'Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.',
    'Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.'
];

const nameCarousel = document.getElementById('depoiments-card-name');
const title = document.getElementById('depoiments-card-title');
const description = document.getElementById('depoiments-card-description');

let index = 0;

function changeDepoiments(btnNumber) {

    if (btnNumber === 1) {
        index = index - 1;
	    nameCarousel.innerText = carouselNameArray[index]; 
	    title.innerText = carouselTitleArray[index]; 
	    description.innerText = carouselDescripitionArray[index]; 
        
        if (index < 0) {
            index = index + 6;
            nameCarousel.innerText = carouselNameArray[index]; 
	        title.innerText = carouselTitleArray[index]; 
	        description.innerText = carouselDescripitionArray[index];
        }
    }

    if (btnNumber === 2) {
        index = index + 1;
        nameCarousel.innerText = carouselNameArray[index]; 
	    title.innerText = carouselTitleArray[index]; 
	    description.innerText = carouselDescripitionArray[index];  
        
        if (index > 5) {
            index = index - 6;
            nameCarousel.innerText = carouselNameArray[index]; 
	        title.innerText = carouselTitleArray[index]; 
	        description.innerText = carouselDescripitionArray[index];
        }    
    }

};