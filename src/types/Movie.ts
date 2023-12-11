export interface MovieListRequest {
    s: string;
    y?: string;
    page?: number;
}
export interface MovieDetailRequest {
    i: string;
    plot?: 'short' | 'full';
}

export interface MovieSummary {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface MovieListResponse {
    Search: MovieSummary;
    totalResults: string;
    Response: string;
}

export interface MovieDetailResponse {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface MovieStoreState {
    isLoading: boolean;
    page: number;
    movies: MovieSummary[];
    keyword: string;
    movie: MovieDetailResponse | null;
}
