import { useEffect } from 'react';

/**
 * Componente per forzare la rimozione delle frecce della scrollbar
 * Questo componente applica stili CSS aggressivi per nascondere i pulsanti di scroll
 */
export const ScrollbarFix = () => {
  useEffect(() => {
    // Funzione per rimuovere le frecce della scrollbar
    const removeScrollbarButtons = () => {
      // Crea un elemento style se non esiste già
      let styleElement = document.getElementById('scrollbar-fix');
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'scrollbar-fix';
        document.head.appendChild(styleElement);
      }

      // Stili CSS aggressivi per nascondere le frecce
      const css = `
        /* APPROCCIO RADICALE PER NASCONDERE LE FRECCE DELLA SCROLLBAR */
        *::-webkit-scrollbar-button {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          clip: rect(0, 0, 0, 0) !important;
          overflow: hidden !important;
        }
        
        *::-webkit-scrollbar-button:start,
        *::-webkit-scrollbar-button:end,
        *::-webkit-scrollbar-button:single-button,
        *::-webkit-scrollbar-button:double-button,
        *::-webkit-scrollbar-button:start:decrement,
        *::-webkit-scrollbar-button:end:increment,
        *::-webkit-scrollbar-button:start:increment,
        *::-webkit-scrollbar-button:end:decrement {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          clip: rect(0, 0, 0, 0) !important;
          overflow: hidden !important;
        }
        
        /* Nascondi anche i corner */
        *::-webkit-scrollbar-corner {
          background: #0F172A !important;
          display: none !important;
        }
        
        /* Forza la rimozione su elementi specifici */
        html::-webkit-scrollbar-button,
        body::-webkit-scrollbar-button,
        #root::-webkit-scrollbar-button {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          position: absolute !important;
          left: -9999px !important;
          top: -9999px !important;
          clip: rect(0, 0, 0, 0) !important;
          overflow: hidden !important;
        }
      `;

      styleElement.textContent = css;
    };

    // Applica immediatamente
    removeScrollbarButtons();

    // Applica dopo un breve delay per assicurarsi che il DOM sia pronto
    const timeoutId = setTimeout(removeScrollbarButtons, 100);
    const timeoutId2 = setTimeout(removeScrollbarButtons, 500);
    const timeoutId3 = setTimeout(removeScrollbarButtons, 1000);

    // Applica anche quando la finestra cambia dimensione
    const handleResize = () => {
      removeScrollbarButtons();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', removeScrollbarButtons);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', removeScrollbarButtons);
    };
  }, []);

  // Questo componente non renderizza nulla
  return null;
}; 