
<script>
import { store } from '../store';
import LangFlag from 'vue-lang-code-flags';

export default {
    data() {
        return {
            store
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

            <div class="content">
                <!-- card per i film -->
                <div class="box" v-for="film in store.filmList">
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

            <!-- card per i telefilm -->

        </div>
    </main>

</template>

<style lang="scss">
    main{
        margin-top: 50px;

        .content{
            display: flex;
            flex-wrap: wrap;

            .box{
                width: 250px;
                min-height: 350px;
                background-color: black;
                padding: 20px;
                color: white;
                font-size: 10pt;
                margin: 10px;
    
                ul{
                    list-style: none;
    
                    li {
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>