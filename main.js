    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
      menuToggle.classList.toggle('open');
    });
    document.getElementById('homeLogo').addEventListener('click', () => {
      window.location.href = '/';
    });
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 50) header.classList.add('compact');
        else header.classList.remove('compact');
      }
    });