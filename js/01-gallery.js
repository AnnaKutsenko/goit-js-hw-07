import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = galleryItems
    .map(({ preview, original, description }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`
        )
    .join(' ');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

galleryContainer.addEventListener('click', onClick)
function onClick(evt) {
    if (evt.target.classList.contains('gallery__image')) {
        evt.preventDefault();
        basicLightbox.create(`<img width="1400" height="900" src="${evt.target.dataset.source}">`).show();
    }
}