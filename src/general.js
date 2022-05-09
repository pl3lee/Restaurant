import loadHome from './home.js';
export default function() {
    let contentDiv = document.querySelector("div#content");
    contentDiv.replaceChildren();
    // header
    let headerContainer = document.createElement('div');
    headerContainer.classList.add("header-container");
    let pinguIcon = document.createElement('img');
    // pinguIcon.src = pinguIconIMG;
    headerContainer.textContent = "Antarctic Restaurant";
    headerContainer.appendChild(pinguIcon);
    contentDiv.appendChild(headerContainer);

    // nav
    let nav = document.createElement('div');
    nav.classList.add("nav");
    let navUL = document.createElement('ul');

    let liHome = document.createElement('li');
    let divHome = document.createElement('div');
    divHome.classList.add("nav-button");
    divHome.setAttribute("id", "home");
    divHome.textContent = "Home";
    liHome.appendChild(divHome);

    let liMenu = document.createElement('li');
    let divMenu = document.createElement('div');
    divMenu.classList.add("nav-button");
    divMenu.setAttribute("id", "menu");
    divMenu.textContent = "Menu";
    liMenu.appendChild(divMenu);

    let liContact = document.createElement('li');
    let divContact = document.createElement('div');
    divContact.classList.add("nav-button");
    divContact.setAttribute("id", "contact");
    divContact.textContent = "Contact";
    liContact.appendChild(divContact);
    
    navUL.appendChild(liHome);
    navUL.appendChild(liMenu);
    navUL.appendChild(liContact);
    
    nav.appendChild(navUL);
    contentDiv.appendChild(nav);

    // main
    let mainDiv = document.createElement('div');
    mainDiv.classList.add("main");
    let mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add("main-content");  
    mainDiv.appendChild(mainContentDiv);
    contentDiv.appendChild(mainDiv);

    loadHome();

    divHome.addEventListener('click', () => loadHome());
}