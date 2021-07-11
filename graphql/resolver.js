import { getMovies, getOneMovie, suggestMovie } from './db'

const resolvers = {
    Query: {
        movies:(_,{limit,rating}) => getMovies(limit,rating),
        movie:(_,{id}) => getOneMovie(id),
        suggestMovie:(_,{id}) => suggestMovie(id)
    },
    Mutation:{
        addMovie:(_,{title, score}) => addMovie(title,score),
        deleteMovie:(_,{id}) => deleteMovie(id)
    }
}

export default resolvers