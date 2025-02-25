import React, { useState } from 'react';
import useGenres from './genre.hook';

const Genre: React.FC = () => {
    const { genres } = useGenres();
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

    const handleGenreClick = (id: number) => {
        setSelectedGenre(id);
    };

    return (
        <div className="flex gap-[30px]">
            {genres.map((genre) => (
                <div
                    key={genre.id}
                    onClick={() => handleGenreClick(genre.id)}
                    className={`cursor-pointer h-[20px] ${selectedGenre === genre.id ? 'border-b-4 border-violet-600 text-white' : 'text-white'}`}
                >
                    <p>{genre.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Genre;