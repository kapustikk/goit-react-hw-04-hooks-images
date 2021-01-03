import { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../Components.module.css';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ src, alt, id, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        className={s.ImageGalleryItemImage}
        src={src}
        alt={alt}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageURL} alt={alt} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
