import React, { useEffect, useState } from 'react';

const rooms = [
    {
      id: 1,
      bed: "single bed",
      capacity: 5,
      coridor: "westside",
      category: "normal",
      facilities:
        "morning breakfast and evening tiffin are free. But you have to pay for Lunch and Dinner",
      Rent: 14500,
      nights: 5,
      img: "https://i.ibb.co/6yMdQV2/furniture9.jpg",
    },
    {
      id: 2,
      bed: "double bed",
      capacity: 3,
      coridor: "westside",
      category: "normal",
      facilities:
        "morning breakfast and evening tiffin are free. But you have to pay for Lunch and Dinner",
      Rent: 24500,
      nights: 10,
      img: "https://i.ibb.co/fv0jgPM/furniture3.jpg",
    },
    {
      id: 3,
      bed: "double bed",
      capacity: 2,
      coridor: "westside",
      category: "normal",
      facilities:
        "morning breakfast and evening tiffin are free. But you have to pay for Lunch and Dinner",
      Rent: 5500,
      nights: 2,
      img: "https://i.ibb.co/1spDqCj/furniture11.jpg",
    },
  ];

const BrowseProperty = () => {
    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(rooms);
  }, []);
    return (
        <div className="container mx-auto p-10">
            <div className="mb-10">
                <h1 className="text-center text-3xl">Browse Your Property</h1>
                <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {bookings.map((book) => (
                <div
                    key={book.id}
                    class="shadow-xl p-3 border-2 border-purple-300 rounded-lg"
                >
                    <figure>
                        <img className="w-[350px] h-[250px]" src={book.img} alt={book.bed} />
                    </figure>
                    <div class="card-body">
                        <h2 class="text-xl font-bold">{book.bed}</h2>
                        <p>{book.facilities}</p>
                        <div class="card-actions justify-center">
                            <button className="bg-purple-500 rounded-md px-2 py-1">procced to booking</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseProperty;