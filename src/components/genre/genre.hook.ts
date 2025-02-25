import { useState, useEffect } from 'react';
import { getGenreMovies } from '@/service/movies.service';

interface Genre {
    id: number;
    name: string;
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
    const fetchGenres = async () => {
        return await getGenreMovies()
            .then((genres) => setGenres(genres))
            .catch((error) => console.error('Error fetching genres:', error))
            .finally(() => setLoading(false));
    };

    fetchGenres();
    }, []);

    return { genres, loading, error };
};

export default useGenres;