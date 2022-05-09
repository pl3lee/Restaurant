import Pingu from './images/pingu-icon.png';
function getPerson(name, id, role, phone, image) {
    let contentSection = document.createElement('div');
    contentSection.classList.add('content-section');
    contentSection.id = id;
    let contentSectionHeader = document.createElement('div');
    contentSectionHeader.classList.add('content-section-header');
    contentSectionHeader.id = id;
    contentSectionHeader.textContent = name;
    contentSection.appendChild(contentSectionHeader);
    
    let contentSectionText = document.createElement('div');
    contentSectionText.classList.add('content-section-text');
    contentSectionText.id = id;
    contentSection.appendChild(contentSectionText);
    let person = document.createElement('div');
    person.classList.add('person');
    contentSectionText.appendChild(person);
    let imgContainer = document.createElement('div');
    let img = new Image();
    img.classList.add('person-image');
    img.setAttribute('alt', id);
    img.src = image;
    imgContainer.appendChild(img);
    person.appendChild(imgContainer);
    let roleContainer = document.createElement('div');
    let roleTxt = document.createElement('p');
    roleTxt.textContent = 'Role: ' + role;
    roleContainer.appendChild(roleTxt);
    person.appendChild(roleContainer);
    let phoneContainer = document.createElement('div');
    let phoneTxt = document.createElement('p');
    phoneTxt.textContent = 'Phone Number: ' + phone;
    phoneContainer.appendChild(phoneTxt);
    person.appendChild(phoneContainer);
    return contentSection;
}

export default function() {
    let mainContent = document.querySelector('.main-content');
    mainContent.replaceChildren();
    mainContent.appendChild(getPerson("Pingu", 'pingu', 'Owner and Chef', '123456789', Pingu));
}