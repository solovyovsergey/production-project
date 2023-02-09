import { memo, Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={toggleTheme}>Btn</button>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default memo(App);