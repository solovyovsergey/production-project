import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

// TODO автозаполнение перевода
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, { className })}>
      <span>{t('Произошла непредвиденная ошбика')}</span>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
