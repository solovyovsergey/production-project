import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
// ? Почему не оборачиваем в memo?

interface LoaderProps {
  className?: string;
}

export function Loader({ className }:LoaderProps) {
  return (
    <div className={classNames('lds-ellipsis', { className })}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
