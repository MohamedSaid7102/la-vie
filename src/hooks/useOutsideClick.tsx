import { useEffect } from 'react';

/**
 * Use this hook to invoke a function 'perform a logic' on clicking outside passed ref object
 * @param ref
 * @param cb
 */
function useOutsideClickDetect(ref: any, cb: Function) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) cb();
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideClickDetect;
