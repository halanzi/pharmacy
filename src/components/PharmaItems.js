import React from "react";

// products
// import product from "../products.js";

// Styling
import styles from "../styles.js";

// styling every product "item"
const Pharmaitem = (props) => {
  const pharma = props.med;
  return (
    <div style={styles.pharmas} key={pharma.id}>
      <img style={styles.pharmaImage} alt={pharma.name} src={pharma.image} />
      <p style={styles.text}>{pharma.name}</p>
      <p style={styles.text}>{pharma.price} KD</p>
    </div>
  );
};
export default Pharmaitem;
