import { useEffect, useState } from 'react';
import { addToDegrees } from '../fn';

const useScrollDegrees = () => {
  const [scrollDegrees, setScrollDegrees] = useState(0);
  const adjuster = 20;

  useEffect(() => {
    function adjustRotation(e) {
      setScrollDegrees((old) => addToDegrees(old, e.deltaY / adjuster));
    }
    document.body.addEventListener('wheel', adjustRotation);
    return () => {
      document.body.removeEventListener('wheel', adjustRotation);
    };
  }, []);

  return scrollDegrees;
};

export default useScrollDegrees;
