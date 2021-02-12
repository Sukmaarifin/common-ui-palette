import React, { useState } from 'react';

import MultipleSelect from './MultipleSelect';
import { OptionType } from './types';

export const ControlledComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState<Array<OptionType>>([]);

  const handleOnChange = (selectedOption: OptionType[]) => {
    setSelectedOptions(selectedOption);
  };

  return (
    <MultipleSelect
      placeholder="Enter to create option"
      options={[
        { label: 'Option 1', value: '1', isDisabled: false },
        { label: 'Option 2', value: '2', isDisabled: false },
        { label: 'Option 3', value: '3', isDisabled: true },
        { label: 'Option 4', value: '4', isDisabled: false },
      ]}
      selectedData={selectedOptions}
      onChange={handleOnChange}
    />
  );
};
