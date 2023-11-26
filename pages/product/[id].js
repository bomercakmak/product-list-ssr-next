import React from "react";
import Head from "next/head";
import styles from "../../styles/ProductDetail.module.css";

export async function getServerSideProps({ params }) {
  const resp = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await resp.json();

  return {
    props: {
      product,
    },
  };
}

const ProductDetail = ({ product }) => {
  const handleBuyClick = () => {
    alert(`You have bought ${product.title}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className={styles.productDetail}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h2>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}>Category: {product.category}</p>
          <div className={styles.rating}>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <button className={styles.buyButton} onClick={handleBuyClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
