"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var PriusAddColumn = /** @class */ (function (_super) {
    __extends(PriusAddColumn, _super);
    function PriusAddColumn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
        };
        _this.addColumn = function (event, index, row) {
            var data = _this.state.data;
            _this.setValue(event, index, row);
            var lastDataIsNotUndefined = Object.values(data[data.length - 1]).every(function (val) { return val !== undefined; });
            if (lastDataIsNotUndefined) {
                _this.setNewValue();
                _this.generateNewRow(data.length + 1);
            }
        };
        _this.setValue = function (event, index, row) {
            var data = _this.state.data;
            var newState = data;
            var objColumn;
            objColumn = newState[row];
            objColumn["" + ("column" + index)] = event.target.value;
            newState["" + row] = objColumn;
            _this.setState({
                data: newState,
            });
            return _this.props.onChangeValue(newState);
        };
        _this.setNewValue = function () {
            var inputElement = _this.props.inputElement;
            var data = _this.state.data;
            var newData = {};
            var tempData = data;
            if (inputElement.props.children) {
                var child = inputElement.props.children;
                child.forEach(function (ch, index) {
                    newData["" + ("column" + index)] = undefined;
                });
            }
            else {
                newData["column0"] = undefined;
            }
            tempData.push(newData);
            _this.setState({
                data: tempData,
            });
        };
        _this.generateNewRow = function (row) {
            var inputElement = _this.props.inputElement;
            var input;
            if (inputElement.props.children) {
                var child = inputElement.props.children;
                var childElement_1 = [];
                child.forEach(function (ch, index) {
                    childElement_1.push(react_1.default.cloneElement(ch, {
                        onChange: function (e) { return _this.addColumn(e, index, row); },
                        value: _this.state.data[row]
                            ? _this.state.data[row]["" + ("column" + index)]
                                ? _this.state.data[row]["" + ("column" + index)]
                                : ""
                            : undefined,
                    }, ch.props.children ? __spreadArrays(ch.props.children) : null));
                });
                input = childElement_1.map(function (el, index) {
                    return react_1.default.createElement("span", { key: index }, el);
                });
            }
            else {
                input = react_1.default.cloneElement(inputElement, {
                    onChange: function (e) { return _this.addColumn(e, 0, row); },
                    value: _this.state.data[row]
                        ? _this.state.data[row]["column0"]
                            ? _this.state.data[row]["column0"]
                            : ""
                        : undefined,
                }, null);
            }
            return input;
        };
        return _this;
    }
    PriusAddColumn.prototype.remove = function (row) {
        var data = this.state.data;
        var tempData = data;
        tempData.splice(row, 1);
        this.setState({
            data: tempData,
        });
    };
    PriusAddColumn.prototype.componentDidMount = function () {
        this.setNewValue();
    };
    PriusAddColumn.prototype.render = function () {
        var _this = this;
        var data = this.state.data;
        var _a = this.props, removeIcon = _a.removeIcon, className = _a.className;
        return (react_1.default.createElement("div", null, data.map(function (dtRow, row) {
            return (react_1.default.createElement("div", { key: row, className: className ? className : "" },
                _this.generateNewRow(row),
                row > 0 && removeIcon ? (react_1.default.createElement("a", { onClick: function () { return _this.remove(row); } }, removeIcon)) : null));
        })));
    };
    return PriusAddColumn;
}(react_1.Component));
exports.default = PriusAddColumn;
