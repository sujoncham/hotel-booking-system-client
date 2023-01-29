import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

const SearchBar = () => {

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
    
      const [options, setOptions] = useState();
    
 

    return (
        <div className='w-[25%] border p-10'>
            <h1 className='text-5xl'>Search Bar</h1>
            <div className="divider"></div>
            <div>
                <form onSubmit={handleForm}>
                    <div className="flex flex-col">
                        <div className="w-[100%]">
                            <label htmlFor="">Location search</label>
                            <input
                            type="text"
                            placeholder="Where are you going"
                            class="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="w-[100%]">
                            <label htmlFor="">Min Price</label>
                            <input
                            type="text"
                            placeholder="min price"
                            class="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="w-[100%]">
                            <label htmlFor="">Max Price</label>
                            <input
                            type="text"
                            placeholder="max price"
                            class="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="flex flex-col w-[100%] relative">
                        <label htmlFor="">Check in Date</label>
                            <span
                            className="border rounded-md p-2 mb-10 cursor-pointer"
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
                                className="absolute z-40 mt-16"
                            />
                            )}
                        </div>
                        <div className="w-[100%] relative">
                            <div className="adult">
                                <label>Adult</label>
                                <input type="number" placeholder="adult" class="input input-bordered w-full max-w-xs" />
                                
                            </div>
                            <div className="children">
                                <label>Children</label>
                                <input type="number" placeholder="children" class="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="room">
                                <label>Rooms</label>
                                <input type="number" placeholder="room" class="input input-bordered w-full max-w-xs" />
                            </div>
                           
                        </div>
                        <div className="w-[100%]">
                            <span className="border rounded-md p-2 w-full cursor-pointer block">
                            <button className="btn btn-sm">search</button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;