import { memo, useState } from "react";
import css from "./Test.module.scss";

const Test = () => {
  const [count, setCount] = useState(0);

  // TODO проблема с автокомплитом и ошибками при сборке несуществующих классов.
  // расширение css modules добавляет autocomplete, но разрешает вводить несуществующие классы.
  // возможно, плагин typescript-plugin-css-modules решает эту проблему
  return (
    <div className={css.test}>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </div>
  );
};

export default memo(Test);
