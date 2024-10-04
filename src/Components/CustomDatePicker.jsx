import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { MdCalendarToday } from 'react-icons/md';

// Note: You would need to import the CSS for react-day-picker
import 'react-day-picker/dist/style.css';

const CustomDatePicker = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDayClick = (day) => {
    setSelected(day);
    setIsOpen(false);
  };

  const toggleCalendar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          readOnly
          required
          placeholder="mm/dd/yyyy"
          value={selected ? format(selected, 'MM/dd/yyyy') : ''}
          className="px-4 py-2 text-2xl text-white bg-black border-2 outline-none sm:text-3xl accent-white placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue"
          onClick={toggleCalendar}
        />
        {/* <MdCalendarToday 
          className="ml-2 text-3xl text-white cursor-pointer" 
          onClick={toggleCalendar}
        /> */}
      </div>
      {isOpen && (
        <div className="absolute top-0 z-10 mt-1 bg-white rounded-md shadow-lg">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDayClick}
            className="p-2"
            classNames={{
              day_selected: "bg-blue-600 text-white",
              day_today: "font-bold",
              day: "text-gray-800 hover:bg-blue-100",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;