import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../Shared/ConfirmationModal";
import Loading from "../Shared/Loading";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        console.log(data)
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){

            refetch()
            toast.success(`Doctor ${doctor.name} deleted successfully`)
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl mb-6 text-[#000000]  font-medium">
        Manage Doctor: {doctors?.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>AVATAR</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SPECIALITY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} alt={doctor.name} />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn bg-[#E11244] text-white rounded "
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deletingDoctor && (
          <div>
            <ConfirmationModal
              title={`Are you sure you want to delete`}
              message={`If you delete ${deletingDoctor.name}.`}
              successAction={handleDeleteDoctor}
              successButtonName="Delete"
              modalData={deletingDoctor}
              closeModal={closeModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageDoctor;
