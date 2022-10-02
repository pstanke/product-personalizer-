import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import { useState } from 'react';
const Product = ({ colors, sizes, basePrice, title, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [additionalPrice, setAdditionalPrice] = useState(
    sizes[0].additionalPrice
  );

  const getPrice = () => {
    return basePrice + additionalPrice;
  };
  const showSummary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name:', title);
    console.log('Price:', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor} />

      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {getPrice()}$</span>
      </header>

      <ProductForm
        sizes={sizes}
        colors={colors}
        currentColor={currentColor}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        setAdditionalPrice={setAdditionalPrice}
        setCurrentColor={setCurrentColor}
        showSummary={showSummary}
      />
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
