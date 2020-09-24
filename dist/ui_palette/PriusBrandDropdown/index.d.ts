/**
 * @todo
 * [ ] Unit test
 */
/// <reference types="react" />
import { OptionType } from "../PriusMultipleSelect";
export declare const GET_BRANDS: import("graphql").DocumentNode;
export declare type PriusBrandDropdownProps = {
    id?: string;
    placeholder?: string;
    isMulti?: boolean;
    isClearable?: boolean;
    selectedData?: Array<OptionType>;
    onChangeSelect: (data: Array<OptionType>) => void;
    isWithLogo?: boolean;
};
declare function PriusBrandDropdown({ id, placeholder, isMulti, isClearable, selectedData, onChangeSelect, isWithLogo, }: PriusBrandDropdownProps): JSX.Element;
export default PriusBrandDropdown;
