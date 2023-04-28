// import { FunctionComponent, SVGAttributes } from 'react';

// TODO Для scss module. Уточнить!
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  // TODO разобраться, почему глобальный импорт не работает
  import React from 'react';

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
// or
// declare module "*.svg" {
//   import React from "react";

//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
// eslint-disable-next-line no-underscore-dangle
declare const __IS_DEV__: boolean;
