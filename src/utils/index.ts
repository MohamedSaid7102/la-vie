import { hideNavbar } from '@redux/features/navbarSlice';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

function handleCloseNavbarDropdownCases() {
  const dispatch = useDispatch(); /** To dispatch an action in reduxToolkit */

  // 1. Close on route change
  const location = useLocation();
  // 2. Close on ESC Pressed
  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape') dispatch(hideNavbar());
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, []);

  useEffect(() => {
    dispatch(hideNavbar());
  }, [location]);
}

export { handleCloseNavbarDropdownCases };
