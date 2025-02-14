"use client";
import PopularMovies from '@/components/popular-movies';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className='flex-1'>
            {/* <h1 className='text-pink-50'>Welcome to the Home Page</h1>
            <p>This is the home page of the movies app.</p> */}

            <PopularMovies />
        </div>
    );
};

export default Home;