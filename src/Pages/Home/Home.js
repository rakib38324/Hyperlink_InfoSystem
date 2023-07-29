import React, { useState } from "react";
import logo from "../MainLayer/Navbar/Flag/logo.svg";
import { FaArrowLeftLong, FaCalendarDays, FaEarthAmericas, FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import TimezoneSelect from "react-timezone-select";
import DateTimePicker from "./DateTimePicker/DateTimePicker";
import ScheduleForm from "./ScheduleForm/ScheduleForm";

const Home = () => {
  const [selected, setSelected] = useState();
  const [clickTime, setClickTime] = useState(``);
  const [meetStartTime, setMeetStartTime] = useState(``);
  const [meetEndTime, setMeetEndTime] = useState(``);
  const [backButton, setBackButton] = useState(false);

  // Function to disable previous dates (earlier than today) and dates more than two months ahead
  const isDisabled = (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() - 1); // Adding one day to today's date
    const maxAllowedDate = new Date();
    maxAllowedDate.setMonth(maxAllowedDate.getMonth() + 2); // Adding two months to today's date

    return date < tomorrow || date > maxAllowedDate || date.getDay() === 0;
  };

  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    color: white;
    background-color: blue;
    
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
    background-color: blue;
  }
  .my-today { 
    color: black;
    font-weight: bold; 
  }
  .disabled {
    color: black;
  }
  
  
`;

  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const handleClickTime = (id) => {
    const clickId = id.toString();
    setClickTime(clickId);
  };

  const handleTakeTimeSlot = (time) => {
    setMeetStartTime(time);
    getTimeRange(time);
    setBackButton(true);
  };

  // time conversion with 30 plus

  function getTimeRange(inputTime) {
    const [time, ampm] = inputTime.split(" ");
    const [hour, minute] = time.split(":");

    let hourValue = parseInt(hour, 10);
    let minuteValue = parseInt(minute, 10);

    // Add 30 minutes and handle the rollover
    minuteValue += 30;
    if (minuteValue >= 60) {
      minuteValue %= 60;
      hourValue = (hourValue + 1) % 12;
      if (hourValue === 0) hourValue = 12;
    }

    // Adjust AM/PM indication
    const adjustedAmPm = hourValue < 12 ? ampm : ampm === "am" ? "pm" : "am";

    // Create the new time string
    const newTime = `${hourValue}:${minuteValue.toString().padStart(2, "0")}`;

    // Maintain AM and PM indication
    const newTimeWithAmPm = `${newTime} ${adjustedAmPm}`;

    setMeetEndTime(newTimeWithAmPm);
  }

  const handleBackButton = () => {
    setBackButton(false);
  };

  return (
    <div>
      <p className="text-5xl text-center font-bold mt-20">Schedule Call</p>

      <div className="overflow-y-auto  w-full border-b-2 h-[570px] mt-5">
        <div
          className={` ${
            selected ? "lg:w-3/4" : "lg:w-1/2"
          } h-[700px] border-spacing-1.5 border-2 rounded-xl shadow-xl mx-auto lg:flex m-5`}
        >
          <div className={` border-r-2 lg:w-1/2`}>
            {
            
            backButton === true && 
            
            <p className="w-1/12 pl-2 py-2 m-4 rounded-full border-2  text-xl text-blue-600 font-bold cursor-pointer hover:bg-blue-200" onClick={handleBackButton}><FaArrowLeftLong></FaArrowLeftLong></p>
            
            }


            <img className={`w-1/2 ${backButton === true && 'my-0'} my-14 mx-auto`} src={logo} alt="logo" />

            <div className="border-t-2 mt-4 p-5">
              <p className="text-slate-600 font-semibold text-lg">
                Hyperlink Infosystem
              </p>
              <p className="text-3xl font-bold">
                Introduction Call With <br /> Hyperlink Infosystem
              </p>

              <p className="flex gap-2 font-bold text-slate-600 my-6">
                <FaRegClock className="text-xl"></FaRegClock> 30 min
              </p>

              {meetStartTime && backButton === true ? (
                <div className="mb-2">
                  <div className="flex gap-2  text-slate-700 font-semibold">
                    <FaCalendarDays className="my-auto"></FaCalendarDays>
                    <p>
                      {meetStartTime} - {meetEndTime},{" "}
                      {selected && format(selected, "eeee, LLLL d, u")}
                    </p>
                  </div>
                  <div className="flex gap-2  text-slate-700 font-semibold">
                    <FaEarthAmericas className="my-auto"></FaEarthAmericas>
                    <p>{selectedTimezone}</p>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="text-slate-700">
                <p>Agenda:</p>
                <p>1. Introduction of Hyperlink infosystem</p>
                <p>2. Requirement understanding</p>
                <p>3. Similar work showcase</p>
                <p>4. Next actions</p>
              </div>
            </div>

            <div className="hidden lg:block lg:mt-14 ml-5 ">
              <span className="p-3">
                <Link to="/" className="text-blue-600">
                  Cookie Setting
                </Link>
              </span>
              <span>|</span>
              <Link to="/" className="text-blue-600 m-2">
                Report abuse
              </Link>
            </div>
          </div>

          {/* calender */}

          {backButton=== true ? (
            <>

            <div className="lg:w-1/2 mt-44 lg:mt-0">
            <ScheduleForm setBackButton={setBackButton}></ScheduleForm>
            </div>
            
            
            </>
          ) : (
            <>
              <div>
                <p className="hidden lg:block text-xl p-8 font-bold">
                  Select a Date & Time
                </p>
                <p className="lg:hidden text-xl p-8 font-bold mt-20 text-center">
                  Select a Date
                </p>

                <div className="">
                  <div className="lg:flex ">
                    <div>
                      <style>{css}</style>
                      <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        disabled={isDisabled}
                        modifiersClassNames={{
                          selected: "my-selected",
                          today: "my-today",
                          isEnabled: "my-today",
                          disabled: "disabled",
                        }}
                      ></DayPicker>

                      <div className="w-2/3 ml-5">
                        <blockquote className="font-semibold">
                          Time Zone
                        </blockquote>
                        <div className="select-wrapper">
                          <TimezoneSelect
                            value={selectedTimezone}
                            onChange={setSelectedTimezone}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      {
                        <p className="mb-5 text-lg text-center mt-10 lg:0 font-semibold">
                          {selected && format(selected, "eeee, LLLL d")}
                        </p>
                      }
                      <div className="lg:overflow-y-auto lg:h-[400px]">
                        {selected && (
                          <DateTimePicker
                            handleClickTime={handleClickTime}
                            clickTime={clickTime}
                            handleTakeTimeSlot={handleTakeTimeSlot}
                          ></DateTimePicker>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
