/**
 * According to [this issue](https://github.com/storybookjs/storybook/issues/8428),
 * the current version of @storybook/addon-docs is not supporting class component
 * so the type and docgen description of `PriusTable` wont appear via `Props`.
 *
 * In order to show the type and description of `PriusTable`,
 * we need wrap and reexport it as function component.
 * This hacky implementation still has a limitation which can't shows the docgen description
 */
/// <reference types="react" />
import { PriusTableProps } from "../PriusTable";
export declare type ShadowPriusTableProps = PriusTableProps;
declare function ShadowPriusTable(props: ShadowPriusTableProps): JSX.Element;
export default ShadowPriusTable;
