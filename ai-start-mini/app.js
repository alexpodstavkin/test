(() => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('open-form');
  const form = document.getElementById('reg-form');
  const success = document.getElementById('reg-success');

  const open = () => {
    modal.hidden = false;
    document.body.classList.add('modal-open');
    setTimeout(() => modal.querySelector('input')?.focus(), 200);
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    form.hidden = false;
    success.hidden = true;
    form.reset();
  };

  openBtn.addEventListener('click', open);

  modal.addEventListener('click', (e) => {
    if (e.target.dataset.close !== undefined) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Registration submitted:', data);
    form.hidden = true;
    success.hidden = false;
  });

  // ===== Mobile carousel: soft loop back to first cell =====
  const carousel = document.querySelector('.utp-grid');
  if (carousel) {
    const isMobile = () => window.matchMedia('(max-width: 700px)').matches;
    let endTimer = null;
    let looping = false;

    carousel.addEventListener('scroll', () => {
      if (!isMobile() || looping) return;
      clearTimeout(endTimer);
      const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;
      if (atEnd) {
        endTimer = setTimeout(() => {
          looping = true;
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
          setTimeout(() => { looping = false; }, 800);
        }, 650);
      }
    }, { passive: true });
  }
})();
