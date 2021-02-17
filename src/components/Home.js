import React from "react";
// Styling
import { Description, ShopImage, Title } from "../styles.js";

function HomeComponents() {
  return (
    <div>
      <Title>Sustainable pharmacy</Title>
      <Description>
        The only pharmacy in Kuwait where production of medicine is taken into
        account
      </Description>
      <ShopImage
        src={"https://live.staticflickr.com/65535/49600621026_ff30bf7046_b.jpg"}
        alt="img"
      />
    </div>
  );
}

export default HomeComponents;
