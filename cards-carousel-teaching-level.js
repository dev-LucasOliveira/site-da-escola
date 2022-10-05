let carousel = document.getElementById('card-teaching-level-carousel');

let dataArray = [
    {
        'image': 'https://i.im.ge/2022/10/05/1kvXTX.boy-4241717-1920.jpg',
        'title': 'Educação infantil',
        'index': '3'
    },

    {
        'image': 'https://i.im.ge/2022/10/05/1zIIs1.girl-998988-1920.jpg',
        'title': 'Ensino fundamental',
        'index': '4'
    },

    {
        'image': 'https://i.im.ge/2022/10/05/1zILtf.students-1807505-1920.jpg',
        'title': 'Ensino médio',
        'index': '5'
    }
]

function renderCarouselCard(dataArray) {

    const cardHTML = `
        <div class="card-teaching-level" onclick="goTo(${dataArray.index})">

            <div class="card-teaching-level-title-div">

                <p class="card-teaching-level-title">

                    ${dataArray.title}

                </p>

            </div>
            
            <div class="card-teaching-level-img-div">
            
                <img class="card-teaching-level-img" src="${dataArray.image}" alt="">
            
            </div>

        </div>
    `;

    const newCard = document.createElement('div');
    newCard.innerHTML = cardHTML;
    carousel.appendChild(newCard);
};

dataArray.forEach((card) => renderCarouselCard(card));