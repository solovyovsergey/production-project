type Mod = Record<string, boolean | string>;

export function classNames(cls: string, mod: Mod, addition: string[]): string {
  const classes = [
    cls,
    ...addition,
    ...Object.entries(mod)
      .filter(([, val]) => val)
      .map(([key]) => key),
  ];

  return classes.join(" ");
}
