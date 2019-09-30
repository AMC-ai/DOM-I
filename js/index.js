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
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street <br> Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// navigation bar 
const navigationItems = document.querySelectorAll('nav a');
// console.log(navigationItems)

for (let i = 0; i < navigationItems.length; i++) {
  navigationItems[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`];
  // console.log(siteContent.nav[`nav-item-${i + 1}`]);
}
// navigationItems[0].innerHTML = siteContent.nav["nav-item-1"];

// navigation img
document.getElementById("logo-img").src = siteContent.nav["img-src"];
// console.log(document.getElementById("logo-img"))

//nav color change
const secondaryNavColor = document.querySelectorAll('nav a');
secondaryNavColor.forEach(element => {
  // match headers with logo color
  element.style.color = "green";
});



//cta section

const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = siteContent.cta["h1"];
// console.log(ctaH1)

// const ctaButton = document.querySelectorAll('button');
// ctaButton[0].innerHTML = siteContent.cta["button"];
// const ctaH1 = document.querySelectorAll('cta-text');
// ctaH1[0].innerHTML = siteContent['cta']["h1"];
// console.log(ctaH1)

const Button = document.querySelector('.cta-text button');
Button.innerHTML = siteContent.cta["button"];
// console.log(Button)

// cta img
document.getElementById("cta-img").src = siteContent.cta["img-src"];
// console.log(document.getElementById("cta-img"))

// section main-content img
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];
// console.log(document.getElementById("middle-img"))

// section contact
// const Contact = document.getElementsByClassName('contact');
// Contact.innerHTML = siteContent.contact["contact-h4"];
// console.log(Contact)

//h4 elements
const titleH4 = document.querySelectorAll('h4');
// console.log(titleH4)
titleH4[0].innerHTML = siteContent['main-content']["features-h4"];
titleH4[1].innerHTML = siteContent['main-content']["about-h4"];
titleH4[2].innerHTML = siteContent['main-content']["services-h4"];
titleH4[3].innerHTML = siteContent['main-content']["product-h4"];
titleH4[4].innerHTML = siteContent['main-content']["vision-h4"];
titleH4[5].innerHTML = siteContent.contact["contact-h4"];

// p elements
const elementsP = document.querySelectorAll('p');
// console.log(elementsP)
elementsP[0].innerHTML = siteContent['main-content']["features-content"];
elementsP[1].innerHTML = siteContent['main-content']["about-content"];
elementsP[2].innerHTML = siteContent['main-content']["services-content"];
elementsP[3].innerHTML = siteContent['main-content']["product-content"];
elementsP[4].innerHTML = siteContent['main-content']["vision-content"];
elementsP[5].innerHTML = siteContent.contact["address"];
elementsP[6].innerHTML = siteContent.contact["phone"];
elementsP[7].innerHTML = siteContent.contact["email"];
elementsP[8].innerHTML = siteContent.footer["copyright"];

// footer 
// const divFooter = document.querySelector('footer p');
// divFooter.innerHTML = siteContent.footer["copyright"];
// console.log(divFooter)