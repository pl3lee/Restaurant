export default function() {
    let mainContent = document.querySelector('.main-content');
    mainContent.replaceChildren();
    // about us
    let aboutUsContent = document.createElement('div');
    aboutUsContent.classList.add('content-section');
    aboutUsContent.setAttribute('id', 'about-us');

    let contentSectionHeader = document.createElement('div');
    contentSectionHeader.classList.add('content-section-header');
    contentSectionHeader.setAttribute('id', 'about-us');
    contentSectionHeader.textContent = "About Us!";
    aboutUsContent.appendChild(contentSectionHeader);

    let contentSectionText = document.createElement('div');
    contentSectionText.classList.add('content-section-text');
    contentSectionText.setAttribute('id', 'about-us');
    contentSectionText.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ratione nihil officia, placeat iure similique, dolorum minus ex, nesciunt animi inventore eos temporibus. Nulla officia aliquam et velit? Vitae?\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ratione nihil officia, placeat iure similique, dolorum minus ex, nesciunt animi inventore eos temporibus. Nulla officia aliquam et velit? Vitae?\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ratione nihil officia, placeat iure similique, dolorum minus ex, nesciunt animi inventore eos temporibus. Nulla officia aliquam et velit? Vitae?";
    aboutUsContent.appendChild(contentSectionText);
    mainContent.appendChild(aboutUsContent);

    // hours
    let hoursContent = document.createElement('div');
    hoursContent.classList.add('content-section');
    hoursContent.setAttribute('id', 'hours');

    contentSectionHeader = document.createElement('div');
    contentSectionHeader.classList.add('content-section-header');
    contentSectionHeader.setAttribute('id', 'hours');
    contentSectionHeader.textContent = "Hours";
    hoursContent.appendChild(contentSectionHeader);

    contentSectionText = document.createElement('div');
    contentSectionText.classList.add('content-section-text');
    contentSectionText.setAttribute('id', 'hours');
    let contentSectionUL = document.createElement('ul');

    let contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Monday: 6am - 11pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Tuesday: 6am - 11pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Wednesday: 6am - 11pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Thursday: 6am - 11pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Friday: 6am - 11pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Saturday: 6am - 8pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionLi = document.createElement('li');
    contentSectionLi.textContent = "Sunday: 6am - 8pm";
    contentSectionUL.appendChild(contentSectionLi);

    contentSectionText.appendChild(contentSectionUL);
    hoursContent.appendChild(contentSectionText);
    mainContent.appendChild(hoursContent);


    // location
    let locationContent = document.createElement('div');
    locationContent.classList.add('content-section');
    locationContent.setAttribute('id', 'location');

    contentSectionHeader = document.createElement('div');
    contentSectionHeader.classList.add('content-section-header');
    contentSectionHeader.setAttribute('id', 'location');
    contentSectionHeader.textContent = "Location";
    locationContent.appendChild(contentSectionHeader);

    contentSectionText = document.createElement('div');
    contentSectionText.classList.add('content-section-text');
    contentSectionText.setAttribute('id', 'location');
    contentSectionText.textContent = "123 Totally Real Road, Antarctica";
    locationContent.appendChild(contentSectionText);
    mainContent.appendChild(locationContent);
    
}