
<script>
import { store } from '../store';

//Importo un pacchetto che ho installato che mi permette di inserire delle flag per le lingue
import LangFlag from 'vue-lang-code-flags';
import StarRating from './StarRating.vue';

export default {
    data() {
        return {
            store,
            basePath: 'https://image.tmdb.org/t/p/w300'
        }
    },
    components: {
    LangFlag,
    StarRating,
  },
}
</script>

<template>

    <main>
        <!-- qui andranno le locandine dei film  -->
        <div class="container-sm">

            <!-- sezione film -->
            <div class="content">
                <div class="col-100">
                    <h2>FILM</h2>
                </div>
                <!-- card per i film -->
                <div class="box" v-for="film in store.filmList">
                    <img :src="basePath + film.poster_path" :alt="film.title">
                    <ul>
                        <li>
                            <span><strong>Titolo: </strong> {{ film.title }} </span>
                        </li>

                        <li>
                            <span><strong>Titolo originale: </strong> {{ film.original_title }} </span>
                        </li>

                        <li>
                            <strong>Voto: </strong>
                            <StarRating :rate="film.vote_average" />
                        </li>

                        <li>
                            <strong>Lingua originale: </strong>
                            <lang-flag :iso="film.original_language" />
                        </li>

                        <li>
                            <strong>Overview: </strong>
                            <p>{{ film.overview }}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- sezione serie tv -->
            <div class="content">
                <div class="col-100">
                    <h2 class="mt-50">SERIE TV</h2>
                </div>
                <!-- card per le serie -->
                <div class="box" v-for="serie in store.seriesList">
                    <img :src="basePath + serie.poster_path" :alt="serie.name">
                    <ul>
                        <li>
                            <span><strong>Titolo: </strong> {{ serie.name }} </span>
                        </li>

                        <li>
                            <span><strong>Titolo originale: </strong> {{ serie.original_name }} </span>
                        </li>

                        <li>
                            <strong>Voto: </strong>
                            <StarRating :rate="serie.vote_average" />
                        </li>

                        <li>
                            <strong>Lingua originale: </strong>
                            <lang-flag :iso="serie.original_language" />
                        </li>

                        <li>
                            <strong>Overview: </strong>
                            <p>{{ serie.overview }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </main>

</template>

<style lang="scss">
    main{
        margin-top: 50px;

        .content{
            display: flex;
            flex-wrap: wrap;

            h2{
                margin-bottom: 30px;
                color: white;
                margin-left: 10px;
            }

            .box{
                width: 250px;
                background-color: black;
                color: white;
                font-size: 10pt;
                margin: 10px;
                position: relative;
                overflow-y: auto;
                scrollbar-width: thin;
                
                
                ul{
                    list-style: none;
                    position: absolute;
                    top: 0%;
                    padding: 15px;
    
                    li {
                        margin-top: 5px;
                    }
                }


                img{
                    width: 250px;
                    min-height: 375px;
                }
            }

            .box ul{
                display: none;
                opacity: 0%;
            }

            .box:hover img{
                opacity: 20%;
                transition: 0.4s;
            }

            .box:hover ul{
                display: block;
                opacity: 100%;
                transition: 0.5s;
            }
        }
    }
</style>