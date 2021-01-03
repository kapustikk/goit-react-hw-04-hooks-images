import PropTypes from 'prop-types';
import s from '../Components.module.css';

export default function Button({ onClick }) {
  return (
    <div className={s.buttonDiv}>
      <button type="button" onClick={onClick} className={s.Button}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
