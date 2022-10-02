import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
const Button = ({ className, children, onClick }) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
