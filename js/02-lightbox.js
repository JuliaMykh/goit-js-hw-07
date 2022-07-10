import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryImg);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallery(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
      return  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    }).join('');
    
}

function onGalleryContainerClick(e){
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
    };
    
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
  
};


  


