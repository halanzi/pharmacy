import React from "react";

// Styling
import { ListWrapper } from "../styles.js";

// styling every product "item"
const Pharmaitem = (props) => {
  const pharma = props.med;
  return (
    <ListWrapper>
      <img alt={pharma.name} src={pharma.image} />
      <p>{pharma.name}</p>
      <p className="pharma-price">{pharma.price} KD</p>
    </ListWrapper>
  );
};
export default Pharmaitem;

// <div style={styles.pharmas} key={pharma.id}>
// <img style={styles.pharmaImage} alt={pharma.name} src={pharma.image} />
// <p style={styles.text}>{pharma.name}</p>
// <p style={styles.text}>{pharma.price} KD</p>
// </div>
