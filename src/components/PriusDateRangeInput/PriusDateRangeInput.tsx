import React, { useState, useCallback } from 'react';

import PriusInput from '../PriusInputNew';
import DatePicker from '../DatePicker';

import { convertDateUTC } from '../../helpers';
import { DateRangeType } from '../../typings';

export type DataDateType = {
  from: string;
  to: string;
};

export type DateType = {
  from: Date;
  to: Date;
};

export type PriusDateColumnProps = {
  id?: string;
  data?: DataDateType;
  onChange?: Function;
};

const PriusDateColumn: React.FC<PriusDateColumnProps> = ({
  id,
  data,
  onChange,
}) => {
  const initialDateState = {
    from: new Date(
      new Date(
        parseInt(
          data?.from
            ? data.from
            : convertDateUTC(new Date().toString()).toString()
        ) * 1000
      ).setHours(0, 0, 0, 0)
    ),
    to: new Date(
      new Date(
        parseInt(
          data?.to ? data.to : convertDateUTC(new Date().toString()).toString()
        ) * 1000
      ).setHours(23, 59, 59, 59)
    ),
  };

  // Generate Date Range to display to Date Input Column
  const generateDateRange = (dateRange: DateRangeType) => {
    if (dateRange.from && dateRange.to) {
      const dateFrom = dateRange.from;
      const dateTo = dateRange.to;

      let startDate: string = `${dateFrom.getDate()}/${
        dateFrom.getMonth() + 1
      }/${dateFrom.getFullYear()}`;
      let endDate: string = `${dateTo.getDate()}/${
        dateTo.getMonth() + 1
      }/${dateTo.getFullYear()}`;

      return startDate + ' - ' + endDate;
    }
    return '';
  };

  const [selectedDateRange, setSelectedDateRange] = useState(
    generateDateRange(initialDateState)
  );
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<DateType>(initialDateState);

  const handleDateRangeValue = useCallback(
    (from: Date, to: Date) => {
      const dateRange = {
        from: new Date(from.setHours(0, 0, 0, 0)),
        to: new Date(to.setHours(23, 59, 59, 59)),
      };

      if (isNaN(convertDateUTC(from.toString()))) dateRange.to = dateRange.from;

      setDate(dateRange);
      const selectedRange = generateDateRange(dateRange);
      setSelectedDateRange(selectedRange);

      //onChange will pass the value to its parent
      const convertedDate = {
        from: convertDateUTC(dateRange.from.toString()),
        to: convertDateUTC(dateRange.to.toString()),
      };
      if (onChange) onChange(convertedDate);
    },
    [onChange]
  );

  const handleCalendarToggle = () => {
    setOpenCalendar(!openCalendar);
  };

  return (
    <>
      <PriusInput
        required
        name="date-range"
        id={id ? id : 'input-date-range'}
        inputProps={{ 'data-identity': id && `${id}` }}
        type="text"
        value={selectedDateRange}
        readOnly
        placeholder="DD/MM/YYYY - DD/MM/YYYY"
        onClick={handleCalendarToggle}
        onKeyDown={handleCalendarToggle}
      />
      {openCalendar && (
        <DatePicker
          selectedDays={date}
          onDayClick={handleDateRangeValue}
        />
      )}
    </>
  );
};

export default PriusDateColumn;
