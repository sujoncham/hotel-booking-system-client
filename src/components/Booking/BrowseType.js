import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const datas = [
  {
    id: 1,
    type: "Hotels",
    totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    img: "https://i.ibb.co/6yMdQV2/furniture9.jpg",
  },
  {
    id: 2,
    type: "Resorts",
    totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    img: "https://i.ibb.co/fv0jgPM/furniture3.jpg",
  },
  {
    id: 3,
    type: "Appartments",
    totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    img: "https://i.ibb.co/1spDqCj/furniture11.jpg",
  },
  {
    id: 4,
    type: "Villas",
    totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    img: "https://i.ibb.co/1spDqCj/furniture9.jpg",
  },
  {
    id: 5,
    type: "Cabins",
    totalProperty: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    img: "https://i.ibb.co/1spDqCj/furniture3.jpg",
  },
];

const BrowseType = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        setProperties(datas);
    }, []);


    return (
        <div className="container mx-auto p-10">
            <div className="mb-10">
                <h1 className="text-center text-3xl">Browse Your favourite Property</h1>
                <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {properties.map((property) => (
                <div key={property.id} className="shadow-xl p-3 border-2 border-purple-300 rounded-lg"
                >
                    <img className="w-[350px] h-[150px]" src={property.img} alt={property.bed} />
                    
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">{property.type}</h2>
                        <p>{property.totalProperty.length} {property.type}</p>
                    <div className="card-actions justify-center">
                        <button className="bg-purple-500 rounded-md px-2 py-1">procced to booking</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
  );
};

export default BrowseType;
