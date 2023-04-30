type Mod = Record<string, boolean | string>;

export function classNames(
  cls: string = '',
  mod: Mod = {},
  addition: string[] = [],
): string {
  const classes = [
    cls,
    ...Object.entries(mod)
      .filter(([, val]) => val)
      .map(([key]) => key),
    ...addition.filter((i) => i),
  ];

  return classes.join(' ');
}
