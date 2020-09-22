import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";

import { DateRangeType } from "../../../typings";

import "react-day-picker/lib/style.css";

export type DatePickerProps = {
  selectedDays?: DateRangeType;
  onDayClick: (from: Date, to: Date) => void;
};

function PriusDatePicker({ selectedDays, onDayClick }: DatePickerProps) {
  return (
    <React.Fragment>
      <DayPicker
        numberOfMonths={1}
        selectedDays={
          selectedDays ? [selectedDays.from, selectedDays] : undefined
        }
        weekdaysShort={["S", "M", "T", "W", "T", "F", "S"]}
        onDayClick={(day) => {
          let dateFrom = day;
          let dateTo = addDays(day, 1);

          if (selectedDays) {
            dateFrom = selectedDays.from;
            dateTo = selectedDays.to;
          }

          selectedDays = {
            from: dateFrom,
            to: dateTo,
          };

          const range = DateUtils.addDayToRange(day, selectedDays);

          const { from, to } = range;
          if (from && to) onDayClick(from, to);
        }}
        fixedWeeks={true}
      />
      <Helmet>
        <style>{`
            .DayPicker-Caption {
              font-size: 13px;
              text-align: center;
              margin-bottom: 1rem;
            }
            .DayPicker-NavButton--prev {
              left: 0;
            }
            .DayPicker-Weekdays {
              border-bottom: solid 1px #f3f3f3;
              border-top: solid 1px #f3f3f3;
            }
            .DayPicker-Day {
              border-radius: 0 !important;
            }
            .DayPicker-Day--today {
              font-weight: normal;
              color: #000;
            }
            .DayPicker-Day--selected {
              font-weight: 700;
              color: black !important;
              background: #f4f4f4 !important;
              border-radius: 0 !important;
            }
            .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background-color: #f0f8ff !important;
              color: #3F4FA2;
            }
          `}</style>
      </Helmet>
    </React.Fragment>
  );
}

export default PriusDatePicker;

const addDays = (date: Date, days: number) => {
  var dt = new Date();
  dt.setDate(dt.getDate() + days);
  return dt;
};
