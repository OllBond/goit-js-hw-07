import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

galleryContainer.addEventListener('click', handleGetUrlPicture);

function handleGetUrlPicture (e) {
    // e.currentTarget;
    console.log(e.currentTarget);
//   e.currentTarget = galleryContainer.original; 1.11.32
}


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

function handleGetUrlPictureClick (e) {
  const isGallaryRef = e.target.classList.contains('.gallery');
   if(!isGallaryRef) {
 return
 }
  // console.log(e.target.dataset.original);
  console.log(e.target.dataset.source)
 }