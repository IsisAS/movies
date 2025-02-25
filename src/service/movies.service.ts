import axios from 'axios';
import { environments } from '@/settings/enviroments';

const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${environments.apiToken}`
};


export const getPopularMovies = async (): Promise<any> => {
    try {
        const response = await axios.get(`${environments.apiUrl}/movie/popular`, {
            headers,
            params: {
                api_key: environments.apiKey,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
}

type GenreProps = {
    id: number;
    name: string;
}

export const getGenreMovies = async (): Promise<GenreProps[]> => {
    try {
        const response = await axios.get(`${environments.apiUrl}/genre/movie/list`, {
            headers,
            params: {
                api_key: environments.apiKey,
            },
        });

        return response.data.genres.slice(0, 14);
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
}