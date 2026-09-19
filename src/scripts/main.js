'use strict';

const dialog = document.querySelector('.video');

if (dialog) {
  const player = dialog.querySelector('.video__player');
  const closeButton = dialog.querySelector('.video__close');
  const buttons = document.querySelectorAll('.play-video');

  const open = (event) => {
    event.preventDefault();

    const url = new URL(event.currentTarget.href);
    const id = url.searchParams.get('v');

    player.src =
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

    dialog.showModal();
    document.body.classList.add('page--locked');
  };

  const close = () => {
    dialog.close();
  };

  buttons.forEach((button) => button.addEventListener('click', open));
  closeButton.addEventListener('click', close);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      close();
    }
  });

  dialog.addEventListener('close', () => {
    player.removeAttribute('src');
    document.body.classList.remove('page--locked');
  });
}

const form = document.querySelector('.form');

if (form) {
  form.addEventListener(
    'invalid',
    () => form.classList.add('form--checked'),
    true,
  );

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.reset();
    form.classList.remove('form--checked');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
