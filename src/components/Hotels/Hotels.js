import React from 'react';
import ListHotels from '../ListHotels/ListHotels';
import SearchBar from '../SearchBar/SearchBar';

const Hotels = () => {
    return (
        <div>
            <h1>Hotels</h1>
            <div className='flex justify-between'>
                <SearchBar></SearchBar>
                <ListHotels></ListHotels>
            </div>
        </div>
    );
};

export default Hotels;