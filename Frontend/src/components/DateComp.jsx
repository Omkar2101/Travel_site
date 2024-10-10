import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function DateComp() {
  const [selectDate, setSelectDate] = useState(dayjs(null)); // Use a valid format like "YYYY-MM-DD"

  const handleChange = (date) => {
    setSelectDate(date); // Directly set the date
    console.log(selectDate.$d);
  };

  return (
    <div className="p-4">
      <label className="block text-lg font-medium text-gray-700 mb-1">
        Choose Date For Bookings
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={selectDate}
          onChange={handleChange}
          slotProps={{
            textField: {
              className: "mt-1 p-2 block w-full border rounded-md shadow-sm",
              required: true,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DateComp;
