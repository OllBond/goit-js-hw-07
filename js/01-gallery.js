import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

function createPicturesMarkup (pictures) {
return pictures.map(({preview, original, description}) => {
return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
})
.join(''); 
}

// console.log(createPicturesMarkup);