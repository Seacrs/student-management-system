import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './Context/Providers/ThemeProvider.tsx'
import StudentProvider from './Context/Providers/StudentProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ThemeProvider>
  </StrictMode>,
)
