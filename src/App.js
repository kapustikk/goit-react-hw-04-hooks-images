import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import api from './components/api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageErrorView from './components/ImageErrorView/ImageErrorView';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './components/Button/Button';
import Loader from 'react-loader-spinner';
import { animateScroll as scroll } from 'react-scroll';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  const handleFormSubmit = newQuery => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImage([]);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = () => {
      setStatus(Status.PENDING);

      api
        .fetchImg(query, page)
        .then(image => setImage(prevState => [...prevState, ...image]))
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        })
        .finally(() => setStatus(Status.RESOLVED));
    };

    fetchImages();
  }, [query, page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
    scroll.scrollToBottom();
  };
  return (
    <>
      <div>
        <SearchBar onSubmit={handleFormSubmit} />
        <ToastContainer autoClose={3000} />

        {status === Status.IDLE && (
          <p className="searchString">What are you searching?</p>
        )}

        {status === Status.PENDING && (
          <span className="loader">
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={80}
              width={80}
              timeout={3000} //3 secs
            />
          </span>
        )}

        {status === Status.REJECTED && (
          <ImageErrorView message={error.message} />
        )}
        {image.length > 0 && <ImageGallery images={image} />}

        {status === Status.RESOLVED && <Button onClick={onLoadMore} />}
      </div>
    </>
  );
}
