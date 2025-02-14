import axios from 'axios';
import { environments } from '@/settings/enviroments';

export const getPopularMovies = async (): Promise<any> => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${environments.apiToken}`
        };

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