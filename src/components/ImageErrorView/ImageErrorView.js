import PropTypes from 'prop-types';

export default function ImageErrorView({ message }) {
  return (
    <div role="alert">
      <p>Something wrong:( Error: {message}</p>
    </div>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
