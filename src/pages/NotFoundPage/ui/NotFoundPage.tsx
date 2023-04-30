import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
// TODO не работает автокомплит и подсветка несуществующего файла стилей

const NotFoundPage = () => {
  const { t } = useTranslation();
  return <div className={cls.notFoundPage}>{t('Страница не найдена')}</div>;
};

export default memo(NotFoundPage);
