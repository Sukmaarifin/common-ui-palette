/**
 * @todo:
 * [ ] unit test
 * [x] styling
 * [x] handle controlled component
 */
/// <reference types="react" />
import { ActionMeta } from 'react-select';
import { OptionType } from './types';
export declare type PriusCreatableSelectProps = {
    backspaceRemoveValue?: boolean;
    classes?: {
        [key: string]: string;
    };
    className?: string;
    components?: any;
    isClearable?: boolean;
    isDeletable?: boolean;
    isDisabled?: boolean;
    placeholder?: string;
    selectedData?: Array<OptionType>;
    onChange?: (value: any, actionMeta: ActionMeta) => void;
    onError?: (error: boolean) => void;
    id?: string;
    maxChar?: number;
};
declare function PriusCreatableSelect({ backspaceRemoveValue, classes, className, components, isClearable, isDeletable, isDisabled, placeholder, selectedData, onChange, onError, id, maxChar, }: PriusCreatableSelectProps): JSX.Element;
export default PriusCreatableSelect;
