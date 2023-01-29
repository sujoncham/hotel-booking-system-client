import { useEffect, useState } from 'react';

const datas = [
    {
        id: 1,
        client: "Orene Stane",
        position: "CEO",
        texty: "Lorem ipsum dolor, sit amet consectetur adipisicing elero inventore odit rerum, fuga iure",
        image: "./image/orene.png",
    },
    {
        id: 2,
        client: "millan Jane",
        position: "Manager",
        texty: "Lorem ipsum dolor, sit amet consectetur adipisicing elero inventore odit rerum, fuga iure",
        image: "./image/millan.png",
    },
    {
        id: 3,
        client: "Smith Lorene",
        position: "Director",
        texty: "Lorem ipsum dolor, sit amet consectetur adipisicing elero inventore odit rerum, fuga iure",
        image: "./image/smith.png",
    },
]

const Testimonials = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        setProperties(datas);
    }, []);
    return (
        <div className='container mx-auto px-10 py-20'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl font-bold'>Testimonials</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elero inventore odit rerum, fuga iure.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 content-center'>
                {properties.map(test=><div key={test.id} className="bg-base-100 shadow-xl border-2 border-purple-300 rounded-md p-2">
                    <div className="flex justify-start items-center gap-5">
                        <img src={test.image} alt="client" className="rounded-full w-16 border-2 border-purple-300" />
                        <div>
                            <h1 className='text-xl font-bold'>{test.client}</h1>
                            <p>{test.position}</p>
                        </div>
                    </div>
                    <div className="card-body items-center">
                        <p>{test.texty}</p>
                        <div className="card-actions">
                            <button className="bg-purple-500 rounded-md px-2 py-1">see details</button>
                        </div>
                    </div>
                </div>)}
             
            </div>
        </div>
    );
};

export default Testimonials;