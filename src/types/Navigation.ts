export interface Route {
    name: String,
    path: String
}

export interface MovieData {
    title: String,
    poster_path: String,
    release_date: String,
    overview: String,
    vote_average: String,
    id: String
}

export interface Genres {
    id: Number,
    name: String
}

export interface DetailData {
    poster_path: String,
    id: String,
    original_title: String,
    title: String,
    release_date: String,
    vote_average: String,
    vote_count: String,
    overview: String,
    genres: Array<Genres>,
    backdrop_path: String,
    status: String
}

export interface CastingDetail {
    gender: Number,
    name: String,
    original_name: String,
    profile_path: String,
    character: String
}
