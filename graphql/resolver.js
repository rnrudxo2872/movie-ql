import { addMovie, deleteMovie, getById, getMovies } from './db'

const resolvers = {
    Query: {
        movies:(_,{limit,rating}) => getMovies(limit,rating),
        movie:(_,{id}) => getById(id)
    },
    Mutation:{
        addMovie:(_,{title, score}) => addMovie(title,score),
        deleteMovie:(_,{id}) => deleteMovie(id)
    }
}

export default resolvers