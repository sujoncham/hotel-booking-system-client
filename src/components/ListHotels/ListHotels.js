import React from 'react';
import HotelsItem from '../HotelsItem/HotelsItem';

const ListHotels = () => {
    return (
        <div className='w-[75%] border p-10'>
            <h1>List of Hotels</h1>
            <HotelsItem></HotelsItem>
            <HotelsItem></HotelsItem>
            <HotelsItem></HotelsItem>
            <HotelsItem></HotelsItem>
            <HotelsItem></HotelsItem>
        </div>
    );
};

export default ListHotels;