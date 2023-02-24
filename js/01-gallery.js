import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);
galleryContainer.addEventListener('keydown', onEscKeyPress);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// modal

const instance = basicLightbox.create(
  ` <img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);
function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const dataSource = evt.target.dataset.source;
  if (!dataSource) {
    return;
  }
  instance.element().querySelector("img").src = dataSource;
  instance.show();
}

function onEscKeyPress(evt) {
    if (evt.code === 'Escape') {
        instance.close();

  } 
}
