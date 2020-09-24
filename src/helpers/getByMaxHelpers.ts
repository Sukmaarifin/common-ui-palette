export type getByMaxLengthType = {
  text: string;
  tooltipText?: string;
};

/**
 * Get text from array of strings by passing max data,
 * Return text with "+ [remaining data length] more"
 * @param texts
 * @param maxWord
 */
export const getByMaxIndex = (
  texts: Array<string>,
  maxIndex?: number
): getByMaxLengthType => {
  let shownText: string = '';

  // Distinct array texts
  const uniqueTexts = texts.filter((item: string, idx: number) => {
    return texts.indexOf(item) === idx;
  });

  shownText = uniqueTexts.join(', ');

  if (maxIndex && uniqueTexts.length > maxIndex) {
    shownText = `${uniqueTexts.slice(0, maxIndex).join(', ')}, +${
      uniqueTexts.length - maxIndex
    } more`;
  }

  return {
    text: shownText,
    tooltipText:
      maxIndex && uniqueTexts.length > maxIndex
        ? uniqueTexts.join(', ')
        : undefined,
  };
};

/**
 * Get text from array of strings by passing max length,
 * Return text with "..." if exceeds maxChar
 * @param texts
 * @param maxChar
 */
export const getByMaxCharacter = (
  texts: Array<string>,
  maxChar: number
): getByMaxLengthType => {
  let shownText: string = '';

  // Distinct array texts
  const uniqueTexts = texts.filter((item: string, idx: number) => {
    return texts.indexOf(item) === idx;
  });

  shownText = uniqueTexts.join(', ');

  if (shownText.length > maxChar) {
    shownText = `${shownText.substring(0, maxChar)}...`;
  }

  return {
    text: shownText,
    tooltipText: uniqueTexts.join(', '),
  };
};
