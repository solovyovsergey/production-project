import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
// TODO почему не работает автокомплить для путей scss модулей и картинок?

import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const langToggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={langToggle}
    >
      {t("Язык")}
    </Button>
  );
};
