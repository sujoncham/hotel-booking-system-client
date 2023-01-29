import React from 'react';

const HotelsItem = () => {
    return (
       
        <div class="flex justify-between bg-base-100 shadow-xl mb-5">
            <div className='w-[30%]'>
                <img className='w-[100%] rounded-md' src="https://placeimg.com/400/400/arch" alt="Album" />
            </div>
            <div className='w-[30%] relative'>
                <h2 class="card-title">Family room with ac</h2>
                <div className='bottom-5 absolute flex justify-start gap-2'>
                    <p className='bg-slate-800 w-[20%] h-[20%] text-center text-white'>9.6</p>
                    <p>Wonderful review - 611 reviews</p>
                </div>
            </div>
            <div class="w-[30%] flex flex-col justify-between">
                <h2 class="text-xl font-bold">$98.00</h2>
                <div className='p-1'>
                    <p>Free wi-fi, Parking free</p>
                    <p>Breakfast free, Parking free</p>
                </div>
                <div class="card-actions justify-start mb-5">
                    <button class="btn btn-primary">Booking proceed</button>
                </div>
            </div>
        </div>
        
    );
};

export default HotelsItem;