import { reactive } from "vue";

export const store = reactive({
    //LINK PER I FILM 
    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3f02dd3da2d9a61dd68b18997cfc167b',
    //LINK PER LE SERIE TV
    seriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=3f02dd3da2d9a61dd68b18997cfc167b',
    searchText: '',
    filmList: [],
    seriesList: [],
});