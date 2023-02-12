import { memo, Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router";
import { useTheme } from "./providers/ThemeProvider"; // TODO подсвечивает при абсолютном импорте и нужен ли он здесь?
// TODO как сделать, чтобы vscode предлагал абсолютные импорты по ts конфигу?
// vscode внутри модуля делает относиетльные импорты, а между модулями обсолютный. Наверное так правильнее.

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default memo(App);
