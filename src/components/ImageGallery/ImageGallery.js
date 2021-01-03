import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../Components.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ webformatURL, tags, largeImageURL, id }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImageURL={largeImageURL}
          // id={id}
          alt={tags}
          getLargeImageURL={onImageClick}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
