import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex justify-center items-center p-20 bg-sky-800'>
        <div>
            <span class="footer-title">Newsletter</span> 
            <div class="form-control w-80">
            <label class="label">
                <span class="label-text">Enter your email address</span>
            </label> 
            <div class="relative">
                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" /> 
                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Subscribe;