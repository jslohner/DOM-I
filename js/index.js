const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// nav

// links
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('nav a');
let navContents = Object.values(siteContent['nav']);
navLinks.forEach((link, index) => link.textContent = navContents[index]);

// logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', navContents[navContents.length - 1]);

// new links
let justin = document.createElement('a');
justin.href = '#justin';
justin.textContent = 'Justin';
justin.style.color = 'green';
nav.appendChild(justin);

let lambda = document.createElement('a');
lambda.href = 'https://lambdaschool.com/';
lambda.textContent = 'Lambda School';
lambda.style.color = 'green';
nav.prepend(lambda);

// link styles
navLinks.forEach(link => link.style.color = 'green');


// cta

// title
let title = document.querySelector('.cta .cta-text h1');
let titleButton = document.querySelector('.cta .cta-text button');
titleButton.textContent = siteContent['cta']['button'];
let titleArray = siteContent['cta']['h1'].split(' ');
let newTitleArray = titleArray.map(str => document.createTextNode(str));
newTitleArray.splice(1, 0, document.createElement('br'));
newTitleArray.splice(3, 0, document.createElement('br'))
newTitleArray.forEach(element => title.appendChild(element));



// cta img
let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);



// main content

// text content
let mainContent = document.querySelectorAll('.main-content .text-content');
let mainContentTitles = document.querySelectorAll('.main-content .text-content h4');
let mainContentParagraphs = document.querySelectorAll('.main-content .text-content p');
let mainContentKeys = Object.keys(siteContent['main-content']);
let mainContentTitleValues = [];
let mainContentParagraphValues = [];
mainContentKeys.forEach((key, index) => {
	if (key.includes('h4')) {
		mainContentTitleValues.push(key)
	}
	else if (key.includes('content')) {
		mainContentParagraphValues.push(key);
	}
})
for (let i = 0; i < mainContent.length; i++) {
	mainContentTitles[i].textContent = siteContent['main-content'][mainContentTitleValues[i]];
	mainContentParagraphs[i].textContent = siteContent['main-content'][mainContentParagraphValues[i]];
}

// middle img
let mainContentImg = document.querySelector('img#middle-img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);



// contact section

// text content
let contactSection = document.querySelector('.contact').querySelectorAll('h4, p');
let contactSectionContent = Object.values(siteContent['contact']);
contactSection.forEach((value, index) => contactSection[index].textContent = contactSectionContent[index]);



// footer

// text content
let copyrightSection = document.querySelector('footer p');
copyrightSection.textContent = siteContent['footer']['copyright'];
