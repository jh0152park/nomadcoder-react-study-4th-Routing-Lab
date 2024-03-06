import App from "./App";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{ 
    background-color: #121212;
    color: whitesmoke;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
    /* overflow: hidden; */
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <GlobalStyle />
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </>
);
