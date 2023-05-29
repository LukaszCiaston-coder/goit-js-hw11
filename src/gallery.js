import { createPhotoCard } from './photoCard.js';
import { initializeSimpleLightbox } from './lightbox.js';

const gallery = document.querySelector('.gallery');

export function appendImages(images) {
  const fragment = document.createDocumentFragment();

  images.forEach(image => {
    const card = createPhotoCard(image);
    fragment.appendChild(card);
  });

  gallery.appendChild(fragment);

  initializeSimpleLightbox();
}

export function showLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.classList.add('hidden');
}
