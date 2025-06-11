import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span> ${likes}</span></p>
          <p class="info-item"><b>Views</b><span> ${views}</span></p>
          <p class="info-item"><b>Comments</b><span> ${comments}</span></p>
          <p class="info-item"><b>Downloads</b><span> ${downloads}</span></p>
        </div>
      </li>
    `)
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}