import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function initializeSimpleLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: 'p.info',
  });
}

