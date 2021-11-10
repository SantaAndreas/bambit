const contentCard = document.querySelector('.content-card');

const cards = [
    {
        title: 'Бесплатный',
        description: 'Начните работать и продавать больше с CRM',
        countUser: 'неограниченно',
        users: 'пользователей',
        newPrice: '',
        oldPrice: 'Бесплатно',
        sale: '20%',
        link: 'Узнать больше',
        size: '5 Гб',
        mod: true,
        fire: true,
    },
    {
        title: 'Базовый',
        description: 'Для эффективной работы небольших компаний и отдела продаж',
        countUser: '5',
        users: 'пользователей',
        newPrice: '1 990 Р/мес.',
        oldPrice: '2 490 Р/мес.',
        sale: '20%',
        link: 'за всех пользователей',
        size: '24 Гб',
        mod: false,
        fire: false,
    }
    ,
    {
        title: 'Стандартный',
        description: 'Для совсмествной работы всей компании',
        countUser: '50',
        users: 'пользователей',
        newPrice: '5 990 Р/мес.',
        oldPrice: '4 790 Р/мес.',
        sale: '20%',
        link: 'за всех пользователей',
        size: '100 Гб',
        mod: false,
        fire: false,
    },
    {
        title: 'Профессиональный',
        description: 'Для максимальной автоматизации всех процессов в компании',
        countUser: 'неограниченно',
        users: 'пользователей',
        newPrice: '11 990 Р/мес.',
        oldPrice: '9 590 Р/мес.',
        sale: '20%',
        link: 'за всех пользователей',
        size: '1024 Гб',
        mod: false,
        fire: true,
    }
];

function renderCard() {
    return cards.map(card => {
        return card.mod
            ? `
            <div class="card">
                <div class="${'card__header card__header_mod'}">
                    <h3 class="card__title">${card.title}</h3>
                    <h4 class="card__subtitle">${card.description}</h4>
                </div>
                <div class="${'card__content card__content_mod'}">
                    <div class="card__block-count">
                        <sapn class="card__count-number">${card.countUser}</sapn>
                        <span class="card__count-user">${card.users}</span>
                    </div>
                    <div class="card__block-price">
                        <a href="" class="${'card__price-link card__price-link_mod'}">${card.link}</a>
                        <p class='card__price-free'>Бесплатно</p>
                    </div>
                    <button class="${'card__button card__button_mod'}">Создать</button>
                    <span class="card__size">${card.size}</span>
                </div>
            </div>`
            :
            `<div class="card">
                <div class="card__header">
                    <h3 class="card__title">${card.title}</h3>
                    <h4 class="card__subtitle">${card.description}</h4>
                </div>
                <div class="card__content">
                    <div class="card__block-count">
                        <sapn class="card__count-number">${card.countUser}</sapn>
                        <span class="card__count-user">${card.users}</span>
                    </div>
                    <div class="card__block-price">
                        <span class="card__price-old"> ${card.oldPrice}</span>
                        <div class="card__wrapper-new-price">
                            <sapn class="card__price-new">${card.newPrice}</sapn>
                            <span class="card__price-sale">${card.sale}</span>
                        </div>
                        <a href="" class="card__price-link">${card.link}</a>
                    </div>
                    <button class="card__button">Купить</button>
                    <span class="card__size">${card.size}</span>
                </div>
            </div>`
    }).join('')
}

contentCard.innerHTML += renderCard();
