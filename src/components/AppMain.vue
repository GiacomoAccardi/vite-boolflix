
<script>
import { store } from '../store';

//Importo un pacchetto che ho installato che mi permette di inserire delle flag per le lingue
import LangFlag from 'vue-lang-code-flags';

export default {
    data() {
        return {
            store,
            basePath: 'https://image.tmdb.org/t/p/w300'
        }
    },
    components: {
    LangFlag,
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
                    <h2>Film:</h2>
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
                            <span><strong>Voto: </strong> {{ film.vote_average }} </span>
                        </li>

                        <li>
                            <strong>Lingua originale: </strong>
                            <lang-flag :iso="film.original_language" />
                        </li>
                    </ul>
                </div>
            </div>

            <!-- sezione serie tv -->
            <div class="content">
                <div class="col-100">
                    <h2 class="mt-30">Serie TV:</h2>
                </div>
                <!-- card per i film -->
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
                            <span><strong>Voto: </strong> {{ serie.vote_average }} </span>
                        </li>

                        <li>
                            <strong>Lingua originale: </strong>
                            <lang-flag :iso="serie.original_language" />
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
            }

            .box{
                width: 250px;
                min-height: 350px;
                background-color: black;
                color: white;
                font-size: 10pt;
                margin: 10px;
    
                ul{
                    list-style: none;
    
                    li {
                        margin-top: 5px;
                    }
                }

                img{
                    width: 250px;
                    min-height: 375px;
                }
            }
        }
    }
</style>