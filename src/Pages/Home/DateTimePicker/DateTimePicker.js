import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const DateTimePicker = ({selected,selectedTimezone}) => {
  
  
   const [selectedTime, setSelectedTime] = useState([]);

  useEffect(()=>{
      fetch('/time.json')
      .then(res => res.json())
      .then(data => setSelectedTime(data))
  },[])
  console.log(selectedTime)
  return (
    <div className='m-7'>
        {/* {<p>{selected && format(selected, "eeee, LLLL q")}</p>}
        {selectedTimezone && <p>{selectedTimezone}</p>} */}

        <div>
            {
              selectedTime?.length && selectedTime?.map(time =>(
                <p className='p-3 my-2 px-7 border-[1px] rounded-md  cursor-pointer text-center  text-blue-600 border-blue-500 font-bold hover:border-blue-700 hover:border-[2px]'  id={time.id}>{time.time}</p>
              ))
            }
        </div>
    </div>
  );
};

export default DateTimePicker;