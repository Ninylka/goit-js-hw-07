import { galleryItems } from './gallery-items.js';


const containerGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item =>
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`).join('');
  containerGallery.innerHTML = galleryMarkup;
 
  containerGallery.addEventListener('click', event =>{
    event.preventDefault();
    if (event.target.tagName === 'IMG'){
      
        const imageLarge = event.target.getAttribute('data-source');

        const lightbox = basicLightbox.create(
            `<img src="${imageLarge}" alt="${event.target.alt}"
          />`
        )
      lightbox.show()
    }
 
  });
  

 

























