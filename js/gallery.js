/**
 * @type {HTMLElement}
 */
const gallery = document.querySelector('.pictures');

/**
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');

/**
 * @param {PictureState} data
 * @return {HTMLAnchorElement}
 */
const createPicture = (data) => {
  const picture =
  /**
   * @type {HTMLAnchorElement}
   */
  (pictureTemplate.content.querySelector('.picture').cloneNode(true));

  picture.querySelector('.picture__img').setAttribute('src', data.url);
  picture.querySelector('.picture__comments').textContent = String(data.comments.length);
  picture.querySelector('.picture__likes').textContent = String(data.likes);

  return picture;
};

/**
 * @param {PictureState[]} data
 */
const renderPictures = (data) => {
  const pictures = gallery.querySelectorAll('.picture');
  const newPictures = data.map(createPicture);

  pictures.forEach((picture) => picture.remove());
  gallery.append(...newPictures);
};

/**
 * @param {PictureState[]} data
 */
const initGallery = (data) => {
  // TODO: Сортировка

  renderPictures(data);
};

export default initGallery;
