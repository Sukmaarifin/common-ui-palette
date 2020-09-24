import React, { useState } from "react";
import PriusMultipleSelect from "./PriusMultipleSelect";
export var ControlledComponent = function () {
    var _a = useState([]), selectedOptions = _a[0], setSelectedOptions = _a[1];
    var handleOnChange = function (selectedOption) {
        setSelectedOptions(selectedOption);
    };
    return (React.createElement(PriusMultipleSelect, { placeholder: "Enter to create option", options: [
            { label: "Option 1", value: "1", isDisabled: false },
            { label: "Option 2", value: "2", isDisabled: false },
            { label: "Option 3", value: "3", isDisabled: true },
            { label: "Option 4", value: "4", isDisabled: false },
        ], selectedData: selectedOptions, onChange: handleOnChange }));
};
