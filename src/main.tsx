import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/queryClient.ts';
import AuthProvider from './provider/AuthProvider.tsx';
import { ThemeProvider } from "@/context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
         <ThemeProvider>
        <App />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
