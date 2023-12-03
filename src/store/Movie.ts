import { defineStore } from 'pinia';
import axios from 'axios';
import type {
    MovieListRequest,
    MovieDetailRequest,
    MovieSummary,
    MovieDetailResponse,
} from '~/types/Movie';

export const useMovieStore = defineStore('movie', {
    state: () => ({
        isLoading: false as boolean,
        page: 1 as number,
        movies: [] as MovieSummary[],
        keyword: '' as string,
        movie: {} as MovieDetailResponse,
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

                if (params.page === 1) {
                    this.movies = [...Search];
                }
                if (params.page !== 1) {
                    this.movies.push(...Search);
                }
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
