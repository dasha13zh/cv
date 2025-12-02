import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import CV from './pages/cv/ui/CVPage';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CV />
  </StrictMode>
);
