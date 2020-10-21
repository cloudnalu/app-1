import * as React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

const DatePicker = ({ selectedDate, handleChange, ...props }) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={handleChange}
      showPopperArrow={false}
      {...props}
    />
  );
};

export default DatePicker;
