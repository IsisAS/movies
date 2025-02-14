import React from 'react';
import { Spinner } from "@heroui/spinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import usePopularMovies from './popular-movies';

const PopularMovies: React.FC = () => {
    const { movies, loading, error } = usePopularMovies();

    return (
        <div>
            <div>
                {loading ? (
                    <div className='flex justify-center items-center'>
                        <Spinner />
                    </div>
                ) : (
                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="rounded-lg"
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id} className="flex justify-center">
                                <div className="w-full flex items-center justify-center transform transition duration-300 hover:scale-105">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                        alt={movie.title}
                                        className="rounded-lg shadow-lg w-full h-[60vh] object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full pl-10 pb-20 bg-gradient-to-t from-black to-transparent">
                                        <h1 className="text-white text-xl font-bold">{movie.title}</h1>
                                        <p className="text-gray-400 text-sm w-2/4">{movie.overview}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default PopularMovies;