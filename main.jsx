import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // Agora importando corretamente
import Home from "./src/pages/Home";
import Checklist from "./src/pages/Checklist";
import Checklist2 from "./src/pages/Checklist2";
import Checklist3 from "./src/pages/Checklist3";
import Checklist4 from "./src/pages/Checklist4";
import Conclusao from "./src/pages/Conclusao";
import GlobalStyles from "./src/styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> {/* Substituído BrowserRouter por HashRouter */}
      <Routes> {/* Mantendo as rotas dentro de Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/checklist2" element={<Checklist2 />} />
        <Route path="/checklist3" element={<Checklist3 />} />
        <Route path="/checklist4" element={<Checklist4 />} />
        <Route path="/conclusao" element={<Conclusao />} />
      </Routes>
      <GlobalStyles />
    </HashRouter>
  </StrictMode>
);
