/**
 * @todo
 * [ ] Unit Test
 * [ ] Storybook
 */
/// <reference types="react" />
import { ButtonProps } from '@material-ui/core/Button';
export declare type PriusConfirmDialogProps = Pick<ButtonProps, 'color' | 'variant'> & {
    id: string;
    isOpen: boolean;
    buttonActionTitle: string;
    buttonCancelTitle?: string;
    title: string;
    message: string | JSX.Element;
    onButtonClick: (value: boolean) => void;
};
declare const PriusConfirmDialog: ({ id, isOpen, buttonActionTitle, buttonCancelTitle, title, message, color, variant, onButtonClick, }: PriusConfirmDialogProps) => JSX.Element;
export default PriusConfirmDialog;
