
<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container-sm">
            <!-- qui andranno le locandine dei film  -->
    <main>
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
                    <span><strong>Lingua: </strong> {{ film.original_language }} </span>
                </li>
            </ul>
        </div>
    </main>
    </div>
</template>

<style lang="scss">
    main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;

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
</style>