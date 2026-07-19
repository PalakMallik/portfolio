  // Mobile nav toggle
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '58px';
    navLinks.style.right = '20px';
    navLinks.style.background = 'var(--surface)';
    navLinks.style.border = '1px solid var(--line)';
    navLinks.style.borderRadius = '10px';
    navLinks.style.padding = '16px 22px';
    navLinks.style.gap = '16px';
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));
