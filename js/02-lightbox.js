import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = galleryItems
    .map(({ preview, original, description }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`
        )
    .join(' ');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);
const lightbox = new SimpleLightbox('.gallery__item a', { animationSpeed: 250, captionsData: "alt" });