let movies = [
    {
        id:1,
        title:"Koo",
        age:26,
        gender:"man",
        score:4
    },
    {
        id:2,
        title:"GIR",
        age:24,
        gender:"man",
        score:4
    },
    {
        id:3,
        title:"QIWE",
        age:18,
        gender:"woman",
        score:4
    },
    {
        id:4,
        title:"Muji",
        age:24,
        gender:"man",
        score:4
    },
    {
        id:5,
        title:"Li",
        age:20,
        gender:"woman",
        score:4
    },
    {
        id:6,
        title:"Koo",
        age:26,
        gender:"man",
        score:4
    },
]

export const getMovies = () => movies

export const getById = id => {
    const filterId = movies.filter(movies => movies.id === id)
    return filterId[0];
}

export const deleteMovie = id => {
    const cleanList = movies.filter(movie => movie.id !== id);
    if(cleanList.length < movies.length){
        movies = cleanList;
        return true;
    }
    return false;
}

export const addMovie = (title, score) => {
    const newMovie = {
        id: movies.length + 1,
        title,
        score
    }
    movies.push(newMovie)
    return newMovie
}