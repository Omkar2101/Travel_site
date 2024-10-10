import { createContext, useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const datecontext = createContext();

export function DateProviser({ children }) {
  const [selectedDate, setSelectedDate] = useState(dayjs(""));

  const handleChange=()=>{
    setSelectedDate(dayjs(event.target.value));
  }

  return (
    <div className="p-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Birth Date
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dayjs(selectedDate)}
          onChange={handleChange}
          slotProps={{
            textField: {
              className:
                "mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500", // Tailwind CSS classes
              placeholder: "MM/DD/YYYY", // Optional placeholder for better UX
              required: true,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}
