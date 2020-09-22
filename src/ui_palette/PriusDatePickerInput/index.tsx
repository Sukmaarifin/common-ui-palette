import React, { forwardRef, Ref } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";

import { REGEX_DATE } from "../../../constants";

import "./PriusDatePickerInput.css";
import "react-day-picker/lib/style.css";

export type DatePickerInputProps = {
  selectedDate: Date | string;
  onDayClick: (day: Date) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export default forwardRef((props: DatePickerInputProps, ref: Ref<any>) => {
  const { selectedDate, onDayClick, inputProps } = props;

  return (
    <DayPickerInput
      inputProps={inputProps}
      dayPickerProps={{
        month: new Date(),
        weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
      }}
      format="dd/MM/yyyy"
      formatDate={formatDate}
      parseDate={(value: string) => {
        /** Convert `dd/mm/yyyy` to `mm/dd/yyy` manually */
        const splitDate = value.split(/\//);
        const formattedDate = [splitDate[1], splitDate[0], splitDate[2]].join(
          "/"
        );

        if (
          REGEX_DATE.test(value) &&
          DateUtils.isDate(new Date(formattedDate))
        ) {
          return new Date(formattedDate);
        }
        return undefined;
      }}
      placeholder="DD/MM/YYYY"
      ref={ref}
      value={selectedDate}
      onDayChange={onDayClick}
    />
  );
});

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat(["ban", "id"], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};
