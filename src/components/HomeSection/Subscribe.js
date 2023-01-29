import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex justify-center items-center p-20 bg-sky-800'>
            <div className='text-center'>
                <h1 className="text-3xl">Newsletter</h1> 
                <div className="form-control w-80">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label> 
                <div className="relative">
                    <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 px-3 py-2 border-2 border-purple-400 rounded-md" /> 
                    <button className="bg-purple-500 absolute top-1 right-0 rounded-l-none px-3 py-2">Subscribe</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;