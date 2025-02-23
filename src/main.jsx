import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checklist1 from "./pages/Checklist/checklist1";
import Checklist2 from "./pages/Checklist/checklist2";
import Checklist3 from "./pages/Checklist/checklist3";
import Checklist4 from "./pages/Checklist/checklist4";
import Conclusao from "./pages/Conclusao";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { COLORS, FONT_SIZE } from "./constants/themes";

const theme = { COLORS, FONT_SIZE };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist/checklist1" element={<Checklist1 />} />
          <Route path="/checklist/checklist2" element={<Checklist2 />} />
          <Route path="/checklist/checklist3" element={<Checklist3 />} />
          <Route path="/checklist/checklist4" element={<Checklist4 />} />
          <Route path="/conclusao" element={<Conclusao />} />
        </Routes>
        <GlobalStyles />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
