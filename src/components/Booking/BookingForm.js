import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file


const BookingForm = () => {
 
  const handleForm = (event) =>{
    event.preventDefault();
  }

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });

  const handleOption = (name, operation) =>{
    setOptions(prev => {
      return{
        ...prev, 
        [name]:operation === 'increment'? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className="content-place-center">
        <div className="p-10 bg-slate-800">
            <h1 className="text-center text-5xl text-white">Make Your Reservation</h1>
            <p className="text-center text-2xl text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            <div className="border p-5 m-5 text-white">
                <form onSubmit={handleForm}>
                    <div className="flex justify-between items-center">
                        <div className="w-[22%]">
                            <input
                                type="text"
                                placeholder="Where are you going"
                                className="input input-bordered rounded-md px-3 py-2 w-full max-w-xs"
                            />
                        </div>
                        <div className="flex flex-col w-[22%] relative">
                            <span
                            className="border rounded-md p-2 cursor-pointer"
                            onClick={() => setOpenDate(!openDate)}
                            >
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                            date[0].endDate,
                            "MM/dd/yyyy"
                            )}`}
                            </span>
                            {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="absolute mt-10 z-40"
                            />
                            )}
                        </div>
                        <div className="w-[22%] relative">
                            <span
                            onClick={() => setOpenOptions(!openOptions)}
                            className="flex justify-between items-center border rounded-md p-2 cursor-pointer"
                            >
                            <span>{options.adult} Adult</span> <span>{options.children} Children</span> <span>{options.room} Room</span>
                            </span>
                            { openOptions && <div className="border p-2 absolute z-40 w-full bg-slate-100 text-black">
                            <div className="flex justify-between items-center">
                                <span>Adult</span>
                                <span>
                                <button onClick={()=>handleOption('adult', 'decrement')} disabled={options.adult <= 1} className="btn btn-sm">-</button> 
                                {options.adult} 
                                <button onClick={()=>handleOption('adult', 'increment')} className="btn btn-sm">+</button></span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Children</span>
                                <span>
                                <button onClick={()=>handleOption('children', 'decrement')} disabled={options.children <= 0}  className="btn btn-sm">-</button> 
                                {options.children}  
                                <button onClick={()=>handleOption('children', 'increment')} className="btn btn-sm">+</button></span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Rooms</span>
                                <span>
                                <button onClick={()=>handleOption('room', 'decrement')} disabled={options.room <= 1}  className="btn btn-sm">-</button> 
                                {options.room}  
                                <button onClick={()=>handleOption('room', 'increment')} className="btn btn-sm">+</button></span>
                            </div>
                            </div>}
                        </div>
                        <div className="w-[22%]">
                            <span className="border rounded-md p-2 cursor-pointer block">
                            <button className="btn btn-sm">search</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
   
    </div>
  );
};

export default BookingForm;
