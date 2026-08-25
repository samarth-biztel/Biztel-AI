'use client';

import { useCallback } from 'react';

export function useSiteNavigation() {
  return useCallback((path: string) => {
    const [pathname, hash] = path.split('#');
    const targetPath = pathname || window.location.pathname;

    if (targetPath === window.location.pathname && hash) {
      const target = document.getElementById(hash);
      if (target) {
        window.history.replaceState({}, '', path);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    window.location.assign(path);
  }, []);
}
