import React, { useState, useEffect } from 'react';
import { Button, Chip, Grid, Icon, IconButton } from '@material-ui/core';

import { AddCircleOutlinedIcon } from '../../icons';
import DatePicker from '../PriusDatePicker';
import Backdrop from '../Backdrop';

import { DateRangeType } from '../../typings';
import { FilterItemType, FilterProps } from './types';

import { FilterCss } from './PriusFilterCss';

const PriusFilter = ({
  date,
  displayDate = false,
  filterData,
  onFilter,
  inputId,
}: FilterProps) => {
  const classes = FilterCss();

  const [filters, setFilters] = useState<Array<FilterItemType>>([]);
  const [activeFilters, setActiveFilters] = useState<Array<FilterItemType>>([]);
  const [displayChipDate, setDisplayChipDate] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<DateRangeType>();

  // update `filters` if `filterData` is changed
  useEffect(() => {
    if (date && displayDate) {
      if (date?.from instanceof Date && date?.to instanceof Date) {
        setDateRange(convertDate(date));
        setDisplayChipDate(true);
      } else {
        setDateRange(undefined);
      }
    }

    if (filterData) {
      setFilters(filterData);
      const selectedFilters = filterData.filter(
        (filterItem: FilterItemType) => filterItem.active === true
      );
      setActiveFilters(selectedFilters);
    }
  }, [filterData, date, displayDate]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    // `checked`: filter item's checked state
    // `value`: filter item's label
    const { checked, value } = event.currentTarget;

    // set `active=true` if filter is checked, otherwise set `active=false`
    const newFilterData = filters.map((filterItem: FilterItemType) => {
      // check selected field
      if (filterItem.field === field) {
        if (filterItem.label === value) {
          return { ...filterItem, active: checked };
        }

        // if `isMulti` is not found or true this wouldn't be called
        if (filterItem.isMulti === false) {
          return { ...filterItem, active: false };
        }
      }

      return filterItem;
    });

    setFilters(newFilterData);
  };

  const handleDateClick = (from: Date, to: Date) => {
    setDateRange(convertDate({ from, to }));
  };

  const handleActiveFiler = (
    currentActiveFilters: Array<FilterItemType>,
    currentDateRange: DateRangeType | undefined
  ) => {
    const selectedFilters = currentActiveFilters.filter(
      (filterItem: FilterItemType) => filterItem.active === true
    );
    setActiveFilters(selectedFilters);

    if (currentDateRange) {
      setDisplayChipDate(true);
      onFilter(filters, currentDateRange);
    } else {
      setDisplayChipDate(false);
      onFilter(filters, undefined);
    }
  };

  const handleFilterDelete = (label: string) => {
    // set `active=false` for the deleted filter item
    const newFilterData = filters.map((filterItem: FilterItemType) => {
      if (filterItem.label === label) {
        filterItem.active = false;
      }
      return filterItem;
    });

    setFilters(newFilterData);

    if (label === 'filtered_date') {
      setDateRange(undefined);
      handleActiveFiler(newFilterData, undefined);
    } else {
      handleActiveFiler(newFilterData, dateRange);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default form submission that will trigger reload
    event.preventDefault();
    handleActiveFiler(filters, dateRange);
  };

  return (
    <div>
      <span>Filter dengan:</span>

      {
        /**
         * render active filter item as Chip
         */
        activeFilters.map((item: FilterItemType, index: number) => {
          return (
            <Chip
              key={`filtered_${item.field}_${index}`}
              label={item.label}
              onDelete={() => handleFilterDelete(item.label)}
              deleteIcon={
                <Icon
                  data-identity={
                    inputId && `${inputId}-iconButton-deleteFilter${item.label}`
                  }
                >
                  clear
                </Icon>
              }
              className={classes.chip}
            />
          );
        })
      }

      {
        /**
         * render selected date as Chip
         */
        displayChipDate && dateRange ? (
          <Chip
            key="filtered_date"
            label={`${dateRange.from.getDate()}/${
              dateRange.from.getMonth() + 1
            }/${dateRange.from.getFullYear()} -
            ${dateRange.to.getDate()}/${
              dateRange.to.getMonth() + 1
            }/${dateRange.to.getFullYear()}`}
            onDelete={() => handleFilterDelete('filtered_date')}
            deleteIcon={<Icon>clear</Icon>}
            className={classes.chip}
          />
        ) : null
      }

      <Backdrop
        popperId={'dummy_prius_popper'}
        placement={'top-start'}
        renderTrigger={(anchorRef: any, handleToggle: () => void) => (
          <IconButton
            aria-label="add"
            data-identity={inputId && `${inputId}-iconButton-addFilter`}
            size="small"
            ref={anchorRef}
            onClick={handleToggle}
          >
            <AddCircleOutlinedIcon fontSize="inherit" />
          </IconButton>
        )}
        renderChildren={(onClose: any) => (
          <>
            <form onSubmit={handleSubmit}>
              {displayDate && (
                <div className={classes.filterList}>
                  <div style={{ display: 'block' }}>
                    <strong>Tanggal</strong>
                  </div>
                  <div style={{ display: 'block' }}>
                    <DatePicker
                      selectedDays={dateRange}
                      onDayClick={handleDateClick}
                    />
                  </div>
                </div>
              )}
              {
                /**
                 * render each filter fields
                 */
                generateFilterFields(filters).map(
                  (field: string, index: number) => (
                    <ul key={index} className={classes.filterList}>
                      <li className={classes.filterListItem}>
                        <strong>{field}</strong>
                      </li>

                      {
                        /**
                         * render each filter item related to the field
                         */
                        filters
                          .filter(
                            (item: FilterItemType) => item.field === field
                          )
                          .map((item: FilterItemType, itemIndex: number) => (
                            <li
                              key={itemIndex}
                              className={classes.filterListItem}
                            >
                              <div className={classes.filterCheckbox}>
                                <input
                                  name="checkbox_option"
                                  value={item.label}
                                  data-identity={
                                    inputId &&
                                    `${inputId}-input-filter${item.label}`
                                  }
                                  type="checkbox"
                                  checked={item.active}
                                  id={`checkbox_${item.field}_${itemIndex}`}
                                  onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                  ) => handleCheckboxChange(event, item.field)}
                                />
                                <label
                                  htmlFor={`checkbox_${item.field}_${itemIndex}`}
                                >
                                  {item.label}
                                </label>
                              </div>
                            </li>
                          ))
                      }
                    </ul>
                  )
                )
              }
              <Grid
                container
                className={classes.filterActions}
                alignContent="flex-end"
              >
                <Button
                  data-identity={inputId && `${inputId}-button-closeFilter`}
                  variant="contained"
                  type="button"
                  color="default"
                  onClick={(event) => {
                    onClose(event);
                  }}
                >
                  Tutup
                </Button>
                <Button
                  data-identity={inputId && `${inputId}-button-processFilter`}
                  variant="contained"
                  type="submit"
                  color="primary"
                  onClick={onClose}
                >
                  Proses
                </Button>
              </Grid>
            </form>
          </>
        )}
      />
    </div>
  );
};

export default PriusFilter;

const generateFilterFields = (
  filterItems: Array<FilterItemType>
): Array<string> => {
  return filterItems.reduce(
    (fields: Array<string>, filterItem: FilterItemType) => {
      if (!fields.find((field) => field === filterItem.field)) {
        fields.push(filterItem.field);
      }

      return fields;
    },
    []
  );
};

const convertDate = (date: DateRangeType) => {
  const convertedDate = {
    from: new Date(date.from.setHours(0, 0, 0, 0)),
    to: new Date(date.to.setHours(23, 59, 59, 59)),
  };
  return convertedDate;
};
