/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const resp = await fetch("https://fakestoreapi.com/products");

  return {
    props: {
      products: await resp.json(),
    },
  };
}

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products List</title>
      </Head>
      <h2 className={styles.h2}>Products List</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3 className={styles.h3}>{product.title}</h3>
            <div className={styles.category}>Category: {product.category}</div>
            <p className={styles.price}>${product.price}</p>
            <Link legacyBehavior href={`/product/${product.id}`}>
              <button className={styles.button}>Go to details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
