"use client";
import Genre from '@/components/genre/genre';
import PopularMovies from '@/components/popular-movies/popular-movies';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className='flex-1'>
            <PopularMovies />
            <Genre />
        </div>
    );
};

export default Home;