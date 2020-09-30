export type OptionType = {
  isDisabled: boolean;
  label: string;
  tooltipText?: string;
  value: string;
  /* Additional data carried with each option */
  data?: { [key: string]: any };
  /**
   * JSX element to be rendered as option
   * If defined, `PriusMultipleSelect` will ignore the `label` props
   * and render `labelElement` instead
   */
  labelElement?: JSX.Element;
  /* Contain hex value of the color variant */
  color?: string;
};
