"use client";
import PopularMovies from '@/components/popular-movies/popular-movies.hook';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className='flex-1'>
            <PopularMovies />
        </div>
    );
};

export default Home;