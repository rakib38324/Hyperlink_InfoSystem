
import React, { useEffect, useState } from 'react';

const DateTimePicker = ({clickTime,handleClickTime,handleTakeTimeSlot}) => {
  
  
   const [selectedTime, setSelectedTime] = useState([]);
   

  useEffect(()=>{
      fetch('/time.json')
      .then(res => res.json())
      .then(data => setSelectedTime(data))
  },[])
  
  


  return (
    <div className='m-2'>
        {/* {<p>{selected && format(selected, "eeee, LLLL q")}</p>}
        {selectedTimezone && <p>{selectedTimezone}</p>} */}

        <div>
            {
              selectedTime?.length && selectedTime?.map(time =>(
                // <p onClick={()=>handleClickTime(time.id)} className='p-3 my-2 px-7 border-[1px] rounded-md  cursor-pointer text-center  text-blue-600 border-blue-500 font-bold hover:border-blue-700 hover:border-[2px]'  id={time.id}>{time.time}</p>

                <div id='time?.id'>
                        {clickTime === `${time?.id}` ? (
                          <>
                            <div className="flex gap-1 ">
                              <p className="w-full lg:w-1/2 p-1 my-auto py-3 px-[2px] border-[1px] rounded-md  text-center bg-slate-700 text-white font-bold">
                                {time.time}
                              </p>

                              <p onClick={()=>handleTakeTimeSlot(time?.time)} className="w-full  lg:w-1/2 p-3  px-5 border-[1px] rounded-md  text-center bg-blue-600 text-white font-bold cursor-pointer">
                                Next
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <p
                              onClick={() => handleClickTime(time?.id)}
                              className="p-3 my-2 px-7 border-[1px] rounded-md  cursor-pointer text-center  text-blue-600 border-blue-500 font-bold hover:border-blue-700 hover:border-[2px]"
                            >
                              {time?.time}
                            </p>
                          </>
                        )}
                        </div>
                
              ))


            }
        </div>
    </div>
  );
};

export default DateTimePicker;