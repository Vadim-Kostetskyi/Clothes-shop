import { useEffect, useState } from 'react';

const useExtractFromPath = (delimiter: string) => {
  const [extractedValue, setExtractedValue] = useState('');

  useEffect(() => {
    const path = window.location.pathname.split(delimiter + '/');
    setExtractedValue(path[1]);
  }, [delimiter]);

  return extractedValue;
};

export default useExtractFromPath;
