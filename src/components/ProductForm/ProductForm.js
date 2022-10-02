import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';
const ProductForm = ({
  sizes,
  colors,
  currentColor,
  currentSize,
  setCurrentSize,
  setAdditionalPrice,
  setCurrentColor,
  showSummary,
}) => {
  return (
    <form>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        setAdditionalPrice={setAdditionalPrice}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <Button className={styles.button} onClick={(e) => showSummary(e)}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};
ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setAdditionalPrice: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  showSummary: PropTypes.func.isRequired,
};
export default ProductForm;
