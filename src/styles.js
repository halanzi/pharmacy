// Global Style and Styled components
import styled, { createGlobalStyle } from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  img {
    width: 400px;
    height: 400px;
  }
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: inline-block;
  img {
    padding-left: 250px;
    padding-top: 20px;
    width: 225px;
    height: 225px;
  }

  p {
    text-align: center;
    padding-left: 200px;
    &.phrama-price {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export { Description, Title, ShopImage, ListWrapper };

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export default GlobalStyle;
