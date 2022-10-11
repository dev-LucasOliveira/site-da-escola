let carousel2 = document.getElementById('card-value-div');

let dataArray2 = [
    {
        'image': 'https://i.im.ge/2022/10/04/1kPwOq.crianca-no-computador.jpg',
        'title': 'PENSAMENTO CRÍTICO',
        'content': 'As novas tecnologias têm provocado automação de vários processos, e apenas nós podemos pensar sobre quais são as melhores soluções. Na Escola Olariense utilizamos o aprendizado investigativo estimulando a autonomia crítica.'
    },

    {
        'image': 'https://i.im.ge/2022/10/04/1kPwOq.crianca-no-computador.jpg',
        'title': 'PENSAMENTO CRÍTICO',
        'content': 'As novas tecnologias têm provocado automação de vários processos, e apenas nós podemos pensar sobre quais são as melhores soluções. Na Escola Olariense utilizamos o aprendizado investigativo estimulando a autonomia crítica.'
    },

    {
        'image': 'https://i.im.ge/2022/10/04/1kPwOq.crianca-no-computador.jpg',
        'title': 'PENSAMENTO CRÍTICO',
        'content': 'As novas tecnologias têm provocado automação de vários processos, e apenas nós podemos pensar sobre quais são as melhores soluções. Na Escola Olariense utilizamos o aprendizado investigativo estimulando a autonomia crítica.'
    },

    {
        'image': 'https://i.im.ge/2022/10/04/1kPwOq.crianca-no-computador.jpg',
        'title': 'PENSAMENTO CRÍTICO',
        'content': 'As novas tecnologias têm provocado automação de vários processos, e apenas nós podemos pensar sobre quais são as melhores soluções. Na Escola Olariense utilizamos o aprendizado investigativo estimulando a autonomia crítica.'
    }
]

function renderCarouselCard(dataArray2) {

    const cardHTML = `
        <div class="section-card-content-div">

            <div class="section-card-content">

                <div class="section-card-content-img-div">
                    
                    <img src="${dataArray2.image}" alt="" class="section-card-content-img">

                </div>

                <p class="section-card-content-title">${dataArray2.title}</p>
                
                <p class="section-card-content-text">${dataArray2.content}</p>

            </div>

        </div>
    `;

    const newCard = document.createElement('div');
    newCard.innerHTML = cardHTML;
    newCard.className = 'card-value-div-content';
    carousel2.appendChild(newCard);
};

dataArray2.forEach((card) => renderCarouselCard(card));