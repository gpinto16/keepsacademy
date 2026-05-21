import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";

import './styles.css';
import { KeepsApp } from './KeepsApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <KeepsApp />
    </BrowserRouter>
  </StrictMode>,
)
