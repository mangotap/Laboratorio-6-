const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

function setActiveLink(link) {
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
  });
  link.classList.add('active');
}

function highlightCurrentSection() {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(navLink => {
    if (navLink.getAttribute('href') === `#${currentSection}`) {
      setActiveLink(navLink);
    }
  });
}

navLinks.forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();
    const targetSectionId = navLink.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: 'smooth'
    });
    setActiveLink(navLink);
  });
});

window.addEventListener('scroll', highlightCurrentSection);
