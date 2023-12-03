import router from './index.ts';
import { useMovieStore } from '~/store/Movie';

const handleHomeRoute = () => {
    const movieStore = useMovieStore();

    movieStore.updateKeyword('');
};
const handleSearchRoute = (keyword: string) => {
    const movieStore = useMovieStore();

    movieStore.initMovies();
    movieStore.updatePage(1);
    movieStore.updateKeyword(keyword);
    movieStore.getSearchedMovie({ s: keyword, page: movieStore.page });
};
const handleMovieRoute = (id: string) => {
    const movieStore = useMovieStore();

    movieStore.getMovieInfo({ i: id, plot: 'full' });
};

router.beforeEach((to, from) => {
    const { name: toName, params } = to;
    const { name: fromName } = from;

    if (toName === 'Home') {
        handleHomeRoute();
    }

    if (toName === 'Search' && fromName !== 'Movie') {
        handleSearchRoute(params.keyword as string);
    }

    if (toName === 'Movie') {
        handleMovieRoute(params.id as string);
    }
});
