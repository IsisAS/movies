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
                                <div className="w-full transform transition duration-300 hover:scale-105">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                        alt={movie.title}
                                        className="rounded-lg shadow-lg w-full h-[60vh] object-cover"
                                    />
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