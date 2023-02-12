import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "app/App";
import ThemeProvider from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

const node = document.getElementById("root");

render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  node
);
