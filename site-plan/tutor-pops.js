const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  function handleResize() {
    if (window.innerWidth <= 1100) {
      menuBtn.style.display = 'block';
      navLinks.style.display = 'none';
    } else {
      menuBtn.style.display = 'none';
      navLinks.style.display = 'flex';
    }
  }

  window.addEventListener('resize', handleResize);
  window.addEventListener('load', handleResize);

  menuBtn.addEventListener('click', () => {
    if (navLinks.style.display === 'none') {
      navLinks.style.display = 'flex';
    //   navLinks.style.flexDirection = 'column';
    } else {
      navLinks.style.display = 'none';
    }
  });