import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';

// CSS
import '@/styles/reset/reset.scss';
import '@/styles/init.scss';

// PAGES

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h2 id='suspense'>LOADING...</h2>}>
      <App />
    </Suspense>
  </StrictMode>,
);
