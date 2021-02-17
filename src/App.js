// Default
import "./App.css";

// Data
import HomeComponents from "../src/components/Home.js";
import PharmaList from "./components/Pharmalist.js";

//Theme
import GlobalStyle from "../src/styles.js";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#736d6d", // main font color
  backgroundColor: "#FDFFFD", // main background color
  blue: "#85ddff",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeComponents />
      <PharmaList />
    </ThemeProvider>
  );
}

export default App;
