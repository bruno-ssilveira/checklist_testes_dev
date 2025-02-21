import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // Agora importando corretamente
import Home from "./pages/Home";
import Checklist from "./pages/Checklist";
import Checklist2 from "./pages/Checklist2";
import Checklist3 from "./pages/Checklist3";
import Checklist4 from "./pages/Checklist4";
import Conclusao from "./pages/Conclusao";
import GlobalStyles from "./styles/globalStyles";

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
