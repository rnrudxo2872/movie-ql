import fetch from 'node-fetch'

const API_ENDPOINT = `https://yts.mx/api/v2/`

export const getMovies = async(limit=50,rating=0) => {
    const {
        data:{
            movies
        }
    } = await (await fetch(`${API_ENDPOINT}list_movies.json?limit=${limit}&minimum_rating=${rating}`)).json();
    return movies
}

export const getOneMovie = async(id) => {
    const {
        data:{
            movie
        }
    } = await (await fetch(`${API_ENDPOINT}movie_details.json?movie_id=${id}`)).json();
    return movie
}

export const suggestMovie = async(id) => {
    const {
        data: {
            movies
        }
    } = await (await fetch(`${API_ENDPOINT}movie_suggestions.json?movie_id=${id}`)).json();
    return movies;
}