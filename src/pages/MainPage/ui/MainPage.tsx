import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
  const { t } = useTranslation('main');

  // TODO remove BugButton
  return (
    <div>
      <div>{t('Главная страница')}</div>
      <BugButton />
    </div>
  );
};

export default memo(MainPage);
