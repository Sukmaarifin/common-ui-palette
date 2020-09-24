import React, { Component } from "react";

type priusAddColumnState = {
  data: Array<any>;
};

export type priusAddColumnProps = {
  inputElement: React.ReactElement;
  removeIcon?: React.ReactElement;
  className?: string;
  onChangeValue: (value: Array<any>) => void;
};

export default class PriusAddColumn extends Component<
  priusAddColumnProps,
  priusAddColumnState
> {
  state: priusAddColumnState = {
    data: [],
  };

  addColumn = (event: any, index: number, row: number) => {
    const { data } = this.state;

    this.setValue(event, index, row);

    const lastDataIsNotUndefined = Object.values(data[data.length - 1]).every(
      (val) => val !== undefined
    );

    if (lastDataIsNotUndefined) {
      this.setNewValue();
      this.generateNewRow(data.length + 1);
    }
  };

  setValue = (event: any, index: number, row: number) => {
    const { data } = this.state;
    let newState: any = data;
    let objColumn: any;

    objColumn = newState[row];
    objColumn[`${"column" + index}`] = event.target.value;
    newState[`${row}`] = objColumn;

    this.setState({
      data: newState,
    });

    return this.props.onChangeValue(newState);
  };

  setNewValue = () => {
    const { inputElement } = this.props;
    const { data } = this.state;

    let newData: any = {};
    let tempData: Array<any> = data;

    if (inputElement.props.children) {
      const child = inputElement.props.children;
      child.forEach((ch: any, index: number) => {
        newData[`${"column" + index}`] = undefined;
      });
    } else {
      newData["column0"] = undefined;
    }

    tempData.push(newData);

    this.setState({
      data: tempData,
    });
  };

  generateNewRow = (row: number) => {
    const { inputElement } = this.props;
    let input: any;

    if (inputElement.props.children) {
      const child = inputElement.props.children;
      let childElement: any = [];

      child.forEach((ch: any, index: number) => {
        childElement.push(
          React.cloneElement(
            ch,
            {
              onChange: (e: any) => this.addColumn(e, index, row),
              value: this.state.data[row]
                ? this.state.data[row][`${"column" + index}`]
                  ? this.state.data[row][`${"column" + index}`]
                  : ""
                : undefined,
            },
            ch.props.children ? [...ch.props.children] : null
          )
        );
      });

      input = childElement.map((el: any, index: number) => {
        return <span key={index}>{el}</span>;
      });
    } else {
      input = React.cloneElement(
        inputElement,
        {
          onChange: (e: any) => this.addColumn(e, 0, row),
          value: this.state.data[row]
            ? this.state.data[row]["column0"]
              ? this.state.data[row]["column0"]
              : ""
            : undefined,
        },
        null
      );
    }

    return input;
  };

  remove(row: number) {
    const { data } = this.state;

    const tempData = data;
    tempData.splice(row, 1);

    this.setState({
      data: tempData,
    });
  }

  componentDidMount() {
    this.setNewValue();
  }

  render() {
    const { data } = this.state;
    const { removeIcon, className } = this.props;

    return (
      <div>
        {data.map((dtRow: any, row: any) => {
          return (
            <div key={row} className={className ? className : ""}>
              {this.generateNewRow(row)}
              {row > 0 && removeIcon ? (
                <a onClick={() => this.remove(row)}>{removeIcon}</a>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
