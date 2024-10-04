// import React, { useState } from 'react';

// const StyledSelect = () => {
//   const [selectedValue, setSelectedValue] = useState('');

//   return (
//     <select 
//       name="service" 
//       className="w-full px-4 py-2 text-3xl bg-black border-2 outline-none border-light-grey caret-blue focus:border-blue"
//       value={selectedValue}
//       onChange={(e) => setSelectedValue(e.target.value)}
//       style={{
//         color: selectedValue === '' ? '#808080' : 'white', // Light grey for placeholder, white for selected option
//       }}
//     >
//       <option value="" disabled>What do you need help with?</option>
//       <option value="it">IT</option>
//       <option value="digital-marketing">Digital Marketing</option>
//       <option value="artificial-intelligence">Artificial Intelligence</option>
//       <option value="automation">Automation</option>
//     </select>
//   );
// };

// export default StyledSelect;

import React, { useState } from 'react';

const StyledSelect = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <select 
      name="service" 
      className="w-full px-4 py-2 pr-8 text-2xl bg-black border-2 outline-none sm:text-3xl border-light-grey caret-blue focus:border-blue"
      value={selectedValue}
      required
      onChange={(e) => setSelectedValue(e.target.value)}
      style={{
        color: selectedValue === '' ? '#444444' : 'white',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23808080%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.7rem top 50%',
        backgroundSize: '0.65rem auto',
      }}
    >
      <option value="" disabled>What do you need help with?</option>
      <option value="it">IT</option>
      <option value="digital-marketing">Digital Marketing</option>
      <option value="artificial-intelligence">Artificial Intelligence</option>
      <option value="automation">Automation</option>
    </select>
  );
};

export default StyledSelect;