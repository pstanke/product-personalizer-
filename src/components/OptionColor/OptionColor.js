import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
const OptionColor = ({ colors, setCurrentColor, currentColor }) => {
  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color) => (
          <li key={color}>
            <button
              onClick={() => setCurrentColor(color)}
              type='button'
              className={clsx(
                prepareColorClassName(color),
                color === currentColor && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};
export default OptionColor;
