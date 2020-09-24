import React, { Component } from "react";
declare type priusAddColumnState = {
    data: Array<any>;
};
export declare type priusAddColumnProps = {
    inputElement: React.ReactElement;
    removeIcon?: React.ReactElement;
    className?: string;
    onChangeValue: (value: Array<any>) => void;
};
export default class PriusAddColumn extends Component<priusAddColumnProps, priusAddColumnState> {
    state: priusAddColumnState;
    addColumn: (event: any, index: number, row: number) => void;
    setValue: (event: any, index: number, row: number) => void;
    setNewValue: () => void;
    generateNewRow: (row: number) => any;
    remove(row: number): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
