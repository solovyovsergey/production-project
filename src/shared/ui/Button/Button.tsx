import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

// TODO почитать про ButtonHTMLAttributes<HTMLButtonElement>
// TODO нужен ли index.ts для shared компонентов?
// TODO когда юзаем css module, а когда обычные классы?
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
  const { className, theme, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [cls[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
