const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldEffect = `  // Sync with URL Hash on Mount & Popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const validPages = ['home', 'projects', 'services', 'simulations', 'infrastructure', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === 'case-studies' || hash === 'virtual-tour-section' || hash === 'virtual-tour') {
        setCurrentPage('projects');
      } else if (hash === 'interactive-3d-lab') {
        setCurrentPage('simulations');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);`;

const newEffect = `  // Sync with URL Hash on Mount & Popstate
  useEffect(() => {
    // Force home page on reload
    if (window.location.hash !== '' && window.location.hash !== '#home') {
      window.history.replaceState(null, '', '#home');
    }
    setCurrentPage('home');

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      const validPages = ['home', 'projects', 'services', 'simulations', 'infrastructure', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === 'case-studies' || hash === 'virtual-tour-section' || hash === 'virtual-tour') {
        setCurrentPage('projects');
      } else if (hash === 'interactive-3d-lab') {
        setCurrentPage('simulations');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);`;

content = content.replace(oldEffect, newEffect);

fs.writeFileSync('src/App.tsx', content);
