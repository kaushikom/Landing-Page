// import React, { useState, useEffect, useRef } from 'react';
// import { DayPicker } from 'react-day-picker';
// import { format, parse, set, isEqual } from 'date-fns';
// import { MdCalendarToday } from 'react-icons/md';

// // Note: You would need to import the CSS for react-day-picker
// import 'react-day-picker/dist/style.css';

// const CustomDateTimePicker = () => {
//   const [selected, setSelected] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [time, setTime] = useState('');
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     if (selected) {
//       setTime(format(selected, 'HH:mm'));
//     }
//   }, [selected]);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);

//   const handleDayClick = (day) => {
//     if (day) {
//       const newDateTime = time
//         ? set(day, {
//             hours: parseInt(time.split(':')[0], 10),
//             minutes: parseInt(time.split(':')[1], 10),
//           })
//         : set(day, { hours: 0, minutes: 0 });
      
//       // Only update if the date has actually changed
//       if (!selected || !isEqual(selected, newDateTime)) {
//         setSelected(newDateTime);
//       }
//     } else {
//       setSelected(null);
//     }
//     setIsOpen(false);
//   };

//   const handleTimeChange = (e) => {
//     const newTime = e.target.value;
//     setTime(newTime);
//     if (selected && newTime) {
//       const [hours, minutes] = newTime.split(':');
//       const newDateTime = set(selected, {
//         hours: parseInt(hours, 10),
//         minutes: parseInt(minutes, 10),
//       });
//       setSelected(newDateTime);
//     }
//   };

//   const toggleCalendar = () => setIsOpen(!isOpen);

//   const formatDateTime = (date) => {
//     if (!date) return '';
//     return format(date, "MM/dd/yyyy HH:mm");
//   };

//   return (
//     <div className="relative sm:w-[45%]" ref={wrapperRef}>
//       <div className="relative">
//         <input
//           readOnly
//           required
//           placeholder="Select date and time to contact"
//           value={selected ? formatDateTime(selected) : ''}
//           className="w-full px-4 py-2 pr-10 text-lg text-white bg-black border-2 outline-none sm:text-xl accent-white placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue"
//           onClick={toggleCalendar}
//         />
//         <MdCalendarToday 
//           className="absolute text-2xl transform -translate-y-1/2 cursor-pointer text-light-grey right-3 top-1/2" 
//           onClick={toggleCalendar}
//         />
//       </div>
//       {isOpen && (
//         <div className="absolute left-0 z-10 mt-1 rounded-md shadow-lg bg-grey text-off-white border-[1px] border-light-grey top-full">
//           <DayPicker
//             mode="single"
//             selected={selected}
//             onSelect={handleDayClick}
//             className="p-2"
//             classNames={{
//               day_selected: "bg-blue-600 text-white",
//               day_today: "font-bold",
//               day: "text-gray-800 hover:bg-blue-100",
//             }}
//           />
//           <div className="flex items-center justify-center p-2 border-t">
//             <input
//               type="time"
//               value={time}
//               onChange={handleTimeChange}
//               className="px-2 py-1 font-bold text-black border rounded"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomDateTimePicker;

import React, { useState, useEffect, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, parse, set, isEqual } from 'date-fns';
import { MdCalendarToday } from 'react-icons/md';

// Note: You would need to import the CSS for react-day-picker
import 'react-day-picker/dist/style.css';

const CustomDateTimePicker = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (selected) {
      setTime(format(selected, 'HH:mm'));
    }
  }, [selected]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleDayClick = (day) => {
    if (day) {
      const newDateTime = time
        ? set(day, {
            hours: parseInt(time.split(':')[0], 10),
            minutes: parseInt(time.split(':')[1], 10),
          })
        : set(day, { hours: 0, minutes: 0 });
      
      // Update the selected date, even if it's the same as before
      setSelected(newDateTime);
    }
    // We're not setting selected to null here anymore
    setIsOpen(false);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (selected && newTime) {
      const [hours, minutes] = newTime.split(':');
      const newDateTime = set(selected, {
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
      });
      setSelected(newDateTime);
    }
  };

  const toggleCalendar = () => setIsOpen(!isOpen);

  const formatDateTime = (date) => {
    if (!date) return '';
    return format(date, "MM/dd/yyyy HH:mm");
  };

  return (
    <div className="relative sm:w-[45%] w-full" ref={wrapperRef}>
      <div className="relative">
        <input
          readOnly
          required
          placeholder="Select date and time to contact"
          value={selected ? formatDateTime(selected) : ''}
          className="w-full px-4 py-2 pr-10 text-lg text-white bg-black border-2 outline-none sm:text-xl accent-white placeholder:text-light-grey sora border-light-grey caret-blue focus:border-blue"
          onClick={toggleCalendar}
        />
        <MdCalendarToday 
          className="absolute text-2xl transform -translate-y-1/2 cursor-pointer text-light-grey right-3 top-1/2" 
          onClick={toggleCalendar}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-1 rounded-md shadow-lg bg-grey text-off-white border-[1px] border-light-grey top-full">
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
          <div className="flex items-center justify-center p-2 border-t">
            <input
              type="time"
              value={time}
              onChange={handleTimeChange}
              className="px-2 py-1 font-bold text-black border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDateTimePicker;