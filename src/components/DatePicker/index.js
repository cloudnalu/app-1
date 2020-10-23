import * as React from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";

/**
 * Custom date picker to match chakra uis design
 */
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

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  handleChange: PropTypes.func,
};

export default DatePicker;
