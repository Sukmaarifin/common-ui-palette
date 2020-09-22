/**
 * Compare 2 object with deep equal,
 * Return boolean true | false
 * @param firstObject
 * @param secondObject
 */
export const deepEqual = (firstObject: any, secondObject: any) => {
  const keys1 = Object.keys(firstObject);
  const keys2 = Object.keys(secondObject);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = firstObject[key];
    const val2 = secondObject[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
};

/**
 * Check if data is object,
 * Return boolean true | false
 * @param object
 */
export const isObject = (object: any) => {
  return object != null && typeof object === "object";
};
