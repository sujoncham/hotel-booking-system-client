import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const datas = [
    {
      id: 1,
      city: "New York",
      totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      img: "https://i.ibb.co/6yMdQV2/furniture9.jpg",
    },
    {
      id: 2,
      city: "London",
      totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      img: "https://i.ibb.co/fv0jgPM/furniture3.jpg",
    },
    {
      id: 3,
      city: "Bei jing",
      totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      img: "https://i.ibb.co/1spDqCj/furniture11.jpg",
    },
    {
      id: 4,
      city: "Delhi",
      totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      img: "https://i.ibb.co/1spDqCj/furniture9.jpg",
    },
    {
      id: 5,
      city: "Mosco",
      totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      img: "https://i.ibb.co/1spDqCj/furniture3.jpg",
    },
  ];

const ExploreLocation = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(datas);
  }, []);

  return (
    <div className="container mx-auto p-10">
        <div className="mb-10">
            <h1 className="text-center text-3xl">Explore Your favourite Location</h1>
            <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {cities.map((city) => (
            <div
                key={city.id}
                class="card card-compact w-96 bg-base-100 shadow-xl"
            >
                <figure>
                    <img className="w-[400px] h-[300px]" src={city.img} alt={city.bed} />
                </figure>
                <div class="card-body">
                    <h2 class="text-xl font-bold">{city.city}</h2>
                    <p>{city.totalProperty.length} properties</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">procced to booking</button>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default ExploreLocation;
