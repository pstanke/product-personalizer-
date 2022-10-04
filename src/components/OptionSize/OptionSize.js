import clsx from 'clsx';
import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
const OptionSize = ({ sizes, setCurrentSize, currentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        <li>
          {sizes.map(({ name }) => (
            <button
              onClick={() => {
                setCurrentSize(name);
              }}
              type='button'
              key={name}
              className={clsx(
                styles.button,
                name === currentSize && styles.active
              )}
            >
              {name}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
};
OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,

  currentSize: PropTypes.string.isRequired,
};
export default OptionSize;
