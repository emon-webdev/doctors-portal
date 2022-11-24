import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: imgData.data.url,
          };
          //save information to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.name} is added successfully`)
              navigate('/dashboard/manageDoctor')
            });
        }
      });
  };

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-16 text-center h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl mb-6 text-[#000000]  font-medium">
        Add a New Doctor
      </h2>
      <div className="bg-[#fff] rounded-[10px] p-[20px] md:p-[50px]  md:max-w-[540px] ">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full  mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-4">
            <label className="label py-1">
              {" "}
              <span className="label-text font-semibold mb-[10px] text-[#383838] text-[14px]">
                Email
              </span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-4">
            <label className="label py-1">
              {" "}
              <span className="label-text font-semibold mb-[10px] text-[#383838] text-[14px]">
                Specialty
              </span>
            </label>
            <select
              {...register("specialty", {
                required: "Specialty Address is required",
              })}
              className="select select-bordered w-full"
            >
              {specialties?.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full  mb-2">
            <label className="label py-1">
              {" "}
              <span className="label-text font-semibold text-[#383838] mb-[10px] text-[14px]">
                Photo
              </span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.img && (
              <p className="text-red-600">{errors.img?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent text-white w-full"
            value="Add"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
