type CSSClassMap = {
  [key: string]: boolean | null | undefined | string;
}

type classNamesType = string | undefined | null | boolean | Array<undefined | string | null | boolean | CSSClassMap>;

const normalizeClass = (name: any, defaultValue: string = ""): string => {
  if (name === undefined || name === "undefined" || name === "null" || name === null ) {
    return defaultValue;
  }
  return name;
}

const isObject = (val: any): boolean => {
  return val && typeof val === "object" && !Array.isArray(val);
}

const handleClassMap = (cssMap: CSSClassMap): string => {
  const classNames: string[] = [];

  for (let key in cssMap) {
    const exp = cssMap[key];
    if (Boolean(exp)) {
      classNames.push(key);
    }
  }

  return classNames.join(' ').trim();
}

/**
 * `classnames` is a normalizing method for classNames. It will strip out null & undefined
 * values from your classNames, keeping them clean.
 * 
 * @param classNames - a single className or an array of classNames<string> or CSSClassMap of type { className: boolean }
 * @param defaultValue - Default value to be used if given className(s) are non-truthy
 * @returns string 
 */
export const classnames = (classNames: classNamesType, defaultValue: string = ""): string => {
  if (!Array.isArray(classNames)) {
    classNames = [classNames];
  }

  return classNames.map((className) => {
    if (isObject(className)) {
      return handleClassMap(className as CSSClassMap);
    }

    return normalizeClass(className);
  })
  .filter(name => name)
  .join(' ')
  .trim();
}