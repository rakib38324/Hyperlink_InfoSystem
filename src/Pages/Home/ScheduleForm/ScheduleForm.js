import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ScheduleForm = ({setBackButton}) => {
  const [addGuest, setGuest] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSchedule = (data) => {
    const info = {
        name: data.Name,
        email: data.email,
        guest_email: data.guest_email,
        phone_number: data.phone_number,
        preferred_contact: data.preferred_contact,
        phone_number_message: data.phone_number_message,
    }

    console.log(info);
    setBackButton(false);
    toast.success("Your Information Added");
  };


  return (
    <div className="m-5">
      <p className="text-lg font-bold">Enter Details</p>

      <form onSubmit={handleSubmit(handleSchedule)}>
        <div className="w-full">
          <div className="">
            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Name *</span>
              </label>
              <input
                type="text"
                {...register("Name", {
                  required: "Name is required",
                })}
                className="input input-bordered rounded-md py-2 pl-3 text-sm  w-full"
              />
              {errors.Name && (
                <p className="text-red-600">{errors.Name?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Email *</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                })}
                className="input input-bordered rounded-md py-2 pl-3 text-sm  w-full"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            {addGuest === true ? (
              <>
                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text font-bold">Guest Email(s)</span>
                  </label>

                  <textarea
                    className="textarea textarea-bordered textarea-sm w-full "
                    type="textarea"
                    {...register("guest_email",)}
                  ></textarea>
                  <p>Notify up to 10 additional guests of the scheduled event.</p>
                  

                </div>
              </>
            ) : (
              <>
                <p
                  onClick={() => setGuest(true)}
                  className="px-3 py-1 w-1/4 text-blue-600 hover:bg-blue-100 border-[1px] border-blue-600 my-2 rounded-2xl"
                >
                  Add Guests
                </p>
              </>
            )}

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Phone Number *</span>
              </label>
              <input
                type="text"
                {...register("phone_number", {
                  required: "Phone Number is required",
                })}
                className="input input-bordered rounded-md text-xs  w-full"
              />
              {errors.phone_number && (
                <p className="text-red-600">{errors.phone_number?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text font-bold">
                  Preferred Contact Mode *
                </span>
              </label>
              <select
                type="text"
                {...register("preferred_contact", {
                  required: "Preferred Contact is required",
                })}
                className="input input-bordered  rounded-lg py-2   w-full"
              >
                {" "}
                <option selected disabled value="">
                  Select...
                </option>
                <option className="text-lg" value="Zoom Conference Call">
                  Zoom Conference Call
                </option>
                <option className="text-lg" value="Phone Call">
                  Phone Call
                </option>
                <option className="text-lg" value="WhatsApp Call">
                  WhatsApp Call
                </option>
              </select>
              {errors.preferred_contact && (
                <p className="text-red-600">{errors.preferred_contact?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text font-bold">
                  Send text messages to *
                </span>
              </label>
              <input
                type="text"
                {...register("phone_number_message", {
                  required: "Phone Number is required",
                })}
                className="input input-bordered rounded-md text-xs  w-full"
              />
              {errors.phone_number_message && (
                <p className="text-red-600">
                  {errors.phone_number_message?.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <button className="bg-blue-600 py-2 w-full lg:w-1/3 font-bold rounded-3xl  mb-2 mt-5 text-white border-none ">
            Schedule Event
          </button>
        </div>
      </form>


      <div className="lg:hidden lg:mt-14 ml-5 ">
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
  );
};

export default ScheduleForm;
