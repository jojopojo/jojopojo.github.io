const languageToggle = document.querySelector('.language-toggle');
const sections = document.querySelectorAll('section');

const translations = {
  en: {
    hero: {
      title: 'Welcome to our trendy website',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    about: {
      title: 'About Us',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    products: {
      title: 'Our Products',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    contact: {
      title: 'Contact Us',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    language: 'FI'
  },
  fi: {
    hero: {
      title: 'teretulemast',
      text: 'jee jee'
    },
    about: {
      title: 'tietoa meist',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    products: {
      title: 'tuotteet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    contact: {
      title: 'yhteystiedot',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eleifend velit, sed congue leo dignissim id.'
    },
    language: 'EN'
  }
}

// Language switching function
function toggleLanguage() {
  const currentLanguage = document.documentElement.lang;
  const newLanguage = currentLanguage === 'en' ? 'fi' : 'en';
  document.documentElement.lang = newLanguage;
}

// Smooth scrolling to section on click
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function updateTranslations(languageCode) {
  const langTranslations = translations[languageCode];
  
  // Find all elements with a "data-i18n" attribute
  const elements = document.querySelectorAll('[data-i18n]');
  
  // Loop through each element and update its text content
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langTranslations[key]) {
      element.textContent = langTranslations[key];
    }
  });
}

// Find the language switcher element(s) and add a click event listener
document.querySelectorAll('.lang-switcher').forEach(switcher => {
  switcher.addEventListener('click', () => {
    const langCode = switcher.getAttribute('data-lang');
    updateTranslations(langCode);
  });
});

//cookie consent
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}

var cookieConsent = document.getElementById("cookie-consent");
var cookieAccept = document.getElementById("cookie-accept");
var cookieReject = document.getElementById("cookie-reject");

cookieAccept.addEventListener("click", function() {
  setCookie("cookieConsent", "true", 365);
  cookieConsent.style.display = "none";
});

cookieReject.addEventListener("click", function() {
  setCookie("cookieConsent", "false", 365);
  cookieConsent.style.display = "none";
});

if (getCookie("cookieConsent") === "true") {
  // Run the code for accepting cookies.
} else if (getCookie("cookieConsent") === "false") {
  // Run the code for rejecting cookies.
} else {
  cookieConsent.style.display = "block";
}
