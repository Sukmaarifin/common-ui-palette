import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../styles/material-ui-theme';
import TableRow, { TableRowProps } from './TableRow';
import FieldText from './components/FieldText';
import FieldNumber from './components/FieldNumber';

/**
 * Test Case
 *
 * 1. render all `fields` props
 * 2. render expand toggle button
 * 3. render checkbox if `isSelectable` = true
 * 4. render Collapse if:
 * 		- `collapsedRecordsPerRow.length` > 0
 * 		- `collapsedFields.length > 0` > 0
 *    - typeof `handleExpandToggle` = "function"
 * 5. render all collapsedRow
 * 6. render menu (PriusOption) if `menuData` is preserved
 * 7. snapshot
 * etc?
 */

describe('TableRow Testing', () => {
  // mock data for record
  const mockData = {
    site: { name: 'Dummy Site' },
    published: true,
    stock: 10,
  };

  const collapsedRecords = [
    {
      channel: 'Dummy Channel',
      price: 19000,
    },
  ];

  const props: TableRowProps = {
    collapsedFields: [
      <FieldText source="status" width="20%" />,
      <FieldText source="channel" width="20%" />,
    ],
    collapsedRecordsPerRow: collapsedRecords,
    fields: [
      <FieldText source="site.name" width="20%" />,
      <FieldNumber source="stock" width="20%" />,
    ],
    filterPublished: 'published',
    isExpanded: false,
    isSelected: false,
    menuData: [],
    record: mockData,
    type: 'card',
    handleExpandToggle: jest.fn(),
    handleSelectToggle: jest.fn(),
  };

  // snapshot
  it('render successfully', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <TableRow {...props} />
      </ThemeProvider>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
