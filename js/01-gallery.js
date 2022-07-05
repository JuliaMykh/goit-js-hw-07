import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(createGallery(galleryItems));

const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImg);

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


