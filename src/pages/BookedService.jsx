import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookedService = () => {
  const initialBookedData = useLoaderData();
  const [bookedData, setBookedData] = useState(initialBookedData);
  const [status, setStatus] = useState(true);
  const handleStatus = () => {
    setStatus(false);
  };
  const handleBookingDelete = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        setBookedData((prevData) =>
          prevData.filter((booked) => booked._id !== id)
        );
      });
  };

  return (
    <div>
      <h2 className="text-2xl border-l text-center">Your Booked Services</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Customer Name</th>
              <th>Service Name</th>
              <th>price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookedData?.map((booked) => (
              <tr key={booked._id}>
                <th
                  onClick={() => handleBookingDelete(booked._id)}
                  className="btn btn-circle"
                >
                  X
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booked.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booked.customerName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{booked.serviceName}</td>
                <td>{booked.price}</td>
                <td>{booked.date}</td>
                <th>
                  <button
                    onClick={() => handleStatus(booked._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    {status ? "pending" : "confirmed"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedService;
