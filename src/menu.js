import Salmon from './images/salmon.jpg';
import Sardine from './images/sardines.jpg';
import PolarBear from './images/polar-bear.jpg';
import GreatWhite from './images/great-white.jpg';
import IceCream from './images/ice-cream.jpg';
import Snowball from './images/snowball.jpg';

function getDish(name, id, price, image) {
    let dish = document.createElement('div');
    dish.classList.add('dish');
    let dishName = document.createElement('div');
    dishName.classList.add('dish-description');
    dishName.textContent = name;
    dish.appendChild(dishName);
    let dishImage = document.createElement('img');
    dishImage.classList.add('dish-image');
    dishImage.setAttribute('alt', id);
    dishImage.setAttribute('id', id);
    dishImage.src = image;
    dish.appendChild(dishImage);
    let dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = '$' + price;
    dish.appendChild(dishPrice);
    return dish;
}

export default function () {
    let mainContent = document.querySelector('.main-content');
    mainContent.replaceChildren();

    // main dish
    let mainDishSection = document.createElement('div');
    mainDishSection.classList.add('content-section');
    mainDishSection.setAttribute('id', 'main-dish');
    let contentSectionHeader = document.createElement('div');
    contentSectionHeader.classList.add('content-section-header');
    contentSectionHeader.setAttribute('id', 'main-dish');
    contentSectionHeader.textContent = 'Main Dishes';
    mainDishSection.appendChild(contentSectionHeader);
    let contentSectionText = document.createElement('div');
    contentSectionText.classList.add('content-section-text');
    contentSectionText.setAttribute('id', 'main-dish');
    mainDishSection.appendChild(contentSectionText);
    contentSectionText.appendChild(getDish("Salmon", "salmon", 10, Salmon));
    contentSectionText.appendChild(getDish("Sardine", "sardine", 10, Sardine));
    contentSectionText.appendChild(getDish("Polar Bear", "polar-bear", 100, PolarBear));
    contentSectionText.appendChild(getDish("Great White Shark", "great-white-shark", 1000, GreatWhite));
    mainContent.appendChild(mainDishSection);

    // desserts
    let dessertsSection = document.createElement('div');
    dessertsSection.classList.add('content-section');
    dessertsSection.setAttribute('id', 'desserts');
    contentSectionHeader = document.createElement('div');
    contentSectionHeader.classList.add('content-section-header');
    contentSectionHeader.setAttribute('id', 'desserts');
    contentSectionHeader.textContent = 'Desserts';
    dessertsSection.appendChild(contentSectionHeader);
    contentSectionText = document.createElement('div');
    contentSectionText.classList.add('content-section-text');
    contentSectionText.setAttribute('id', 'desserts');
    dessertsSection.appendChild(contentSectionText);
    contentSectionText.appendChild(getDish("Ice Cream", "ice-cream", 10, IceCream));
    contentSectionText.appendChild(getDish("Snowball", "snowball", 5, Snowball));
    mainContent.appendChild(dessertsSection);

}