import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Corrigido para usar Routes ao invés de Switch
import Home from './pages/Home';
import Checklist from './pages/Checklist';
import Checklist2 from './pages/Checklist2';
import Checklist3 from './pages/Checklist3';
import Checklist4 from './pages/Checklist4';
import Conclusao from './pages/Conclusao';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envolva com BrowserRouter */}
      <Routes> {/* Use Routes para definir as rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/checklist2" element={<Checklist2 />} />
        <Route path="/checklist3" element={<Checklist3 />} />
        <Route path="/checklist4" element={<Checklist4 />} />
        <Route path="/conclusao" element={<Conclusao />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);



