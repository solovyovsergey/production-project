import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// TODO автозаполнение перевода
export const BugButton = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isError) throw Error('Test Error');
  }, [isError]);

  const throwError = () => {
    setIsError(true);
  };

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={throwError}>throw Error</Button>;
};
