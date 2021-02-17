import React from "react";

// Pharma products
import product from "../products.js";
import Pharmaitem from "./PharmaItems.js";

const PharmaList = () => {
  const pharmaList = product.map((meds) => (
    <Pharmaitem med={meds} key={meds.id} />
  ));
  return pharmaList;
};

export default PharmaList;
