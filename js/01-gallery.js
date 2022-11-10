import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const picturesMarkup = createPicturesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

galleryContainer.addEventListener('click', handleGetUrlPictureClick);

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
  console.log(e.target.dataset.source);
 }

 const instance = basicLightbox.create(
  `<img src="${e.target.dataset.source}" width="800" height="600">`,
  {
    onShow: instance => {
     //......
    },
    onClose: instance => {
     //........
    },
  }
);

instance.show();