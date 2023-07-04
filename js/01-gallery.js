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

galleryContainer.onclick = (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const instance = basicLightbox.create(`<img width="1400" height="900" src="${evt.target.dataset.source}">`,
        {
            onShow: () => {
                window.addEventListener('keydown', onEscape);
            },
            onClose: () => {
                window.removeEventListener('keydown', onEscape);
            },
        }
    );
    
    function onEscape(evt) {
       if (evt.key === 'Escape') {
            instance.close();
        }
    }

    instance.show(evt);
}
