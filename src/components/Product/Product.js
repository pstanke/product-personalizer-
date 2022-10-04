import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
const Product = ({ colors, sizes, basePrice, title, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const size = sizes.find((element) => element.name === currentSize);
    return basePrice + size.additionalPrice;
  }, [currentSize]);

  const showSummary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name:', title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>

        <ProductForm
          sizes={sizes}
          colors={colors}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
          showSummary={showSummary}
        />
      </div>
    </article>
  );
};
Product.propTypes = {
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Product;
