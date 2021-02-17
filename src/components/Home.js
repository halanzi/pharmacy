import React from "react";
// Styling
import styles from "../styles.js";

function HomeComponents() {
  return (
    <div style={styles.body}>
      <h1 style={styles.text}>Sustainable pharmacy</h1>
      <h3 style={styles.text}>
        The only pharmacy in Kuwait where production of medicine is taken into
        account
      </h3>
      <img
        src={"https://live.staticflickr.com/65535/49600621026_ff30bf7046_b.jpg"}
        alt="img"
        style={styles.shopImage}
      />
    </div>
  );
}

export default HomeComponents;
