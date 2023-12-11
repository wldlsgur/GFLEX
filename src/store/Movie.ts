import { defineStore } from 'pinia';
import axios from 'axios';
import type { MovieListRequest, MovieDetailRequest, MovieStoreState } from '~/types/Movie';

export const useMovieStore = defineStore('movie', {
    state: (): MovieStoreState => ({
        isLoading: false,
        page: 1,
        movies: [],
        keyword: '',
        movie: null,
    }),
    getters: {},
    actions: {
        initMovies() {
            this.movies = [];
        },
        updatePage(newPage: number) {
            this.page = newPage;
        },
        updateKeyword(newKeyword: string) {
            this.keyword = newKeyword;
        },
        async getSearchedMovie(params: MovieListRequest) {
            try {
                this.isLoading = true;
                const {
                    data: { Response, Search },
                } = await axios.post('/api/axios', { params, method: 'GET' });

                if (!Response || !Search) {
                    return;
                }

                this.movies = [...this.movies, ...Search];
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
        async getMovieInfo(params: MovieDetailRequest) {
            try {
                this.isLoading = true;
                const { data } = await axios.post('/api/axios', { params, method: 'GET' });

                if (!data.Response) {
                    return;
                }

                this.movie = data;
            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
    },
});
