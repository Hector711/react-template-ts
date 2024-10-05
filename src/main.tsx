import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';

// CSS
import '@/css/reset/reset.scss';
import '@/css/init.scss';

// PAGES

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
