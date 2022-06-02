import { galleryItems } from './gallery-items.js';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
function htmlImg({ preview, original, description }) {
    return `
  <a class="gallery__item" href=${original} onclick="return false;">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}

const htmlImgs = (Imgs) => Imgs.reduce((acc, img) => acc + htmlImg(img), "")

const gallery = document.querySelector(".gallery")

gallery.innerHTML += htmlImgs(galleryItems)


var lightbox = new SimpleLightbox('.gallery a', {
    captions:true,captionPosition:'bottom',captionSelector:'img',
   captionType: 'atrr', captionsData:"alt",captionDelay:250,})
