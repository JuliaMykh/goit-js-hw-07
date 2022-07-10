import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(createGallery(galleryItems));

const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImg);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallery(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
      return  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    }).join('');
}

function onGalleryContainerClick(e){
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  };

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)
  instance.show()
  window.addEventListener('keydown', onEscapeCloseModal);

};

function onEscapeCloseModal(e) {
  instance.close();
};






