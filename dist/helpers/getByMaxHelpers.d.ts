export declare type getByMaxLengthType = {
    text: string;
    tooltipText?: string;
};
/**
 * Get text from array of strings by passing max data,
 * Return text with "+ [remaining data length] more"
 * @param texts
 * @param maxWord
 */
export declare const getByMaxIndex: (texts: string[], maxIndex?: number | undefined) => getByMaxLengthType;
/**
 * Get text from array of strings by passing max length,
 * Return text with "..." if exceeds maxChar
 * @param texts
 * @param maxChar
 */
export declare const getByMaxCharacter: (texts: string[], maxChar: number) => getByMaxLengthType;
