import fetch from 'node-fetch'

const API_ENDPOINT = `https://yts.mx/api/v2/list_movies.json`

export const getMovies = async(limit=50,rating=0) => {
    const {
        data:{
            movies
        }
    } = await (await fetch(`${API_ENDPOINT}?limit=${limit}&minimum_rating=${rating}`)).json();
    return movies
}