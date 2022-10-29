import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Use this hook to invoke a function 'perform a logic' on:
 * 1. Clicking outside
 * 2. ESC Pressed
 * 3. Current location 'link | route' changed
 * @param ref Object
 * @param cb Function that will be invoked at any of the previour 3 cases
 */
function useOnLoseFocuse(ref: any, cb: Function) {
  // 1. Close on route change
  const location = useLocation();
  useEffect(() => cb(), [location]);

  // 2. Close on ESC Pressed
  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape') cb();
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, []);

  // 3. Close on Clicking outside
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) cb();
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);
}

export default useOnLoseFocuse;
