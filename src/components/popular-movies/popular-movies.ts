import { getPopularMovies } from '@/service/movies.service';
import { useState, useEffect } from 'react';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

const usePopularMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

   
    useEffect(() => {
        setLoading(true);
        const fetchMovies = async () => {
            return await getPopularMovies()
                .then((movies) => setMovies(movies))
                .catch((error) => console.error('Error ao buscar os filmes populares:', error))
                .finally(() => setLoading(false));
        };

        fetchMovies();
    }, []);

    return { movies, loading, error };
};

export default usePopularMovies;