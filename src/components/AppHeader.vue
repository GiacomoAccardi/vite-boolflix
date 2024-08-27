
<script>
import { store } from '../store';
import axios from 'axios';

export default{
    data() {
        return {
            store,
            Text: "",
        }
    },
    methods: {
        // Questa funzione mi permette di cliccare un pulsante e fare in modo che il valore della variabile "Text" diventi il valore della variabile "searchText" all'interno del file store.js
        GetValue() {
            this.store.searchText = this.Text.replace(" ", "+");
            //console.log(store.searchText)
            
            if (store.searchText !== ""){   
                axios.get(`${store.apiUrl}&query=${store.searchText}`).then((response) => {
                store.filmList = response.data.results;
                });

                axios.get(`${store.seriesUrl}&query=${store.searchText}`).then((response) => {
                store.seriesList = response.data.results;
                });
            }
        }
    }
}
</script>

<template>
    <header>
        <!-- Questo conterrà l'header del nostro sito web -->
        <div class="container align-items">

            <!-- colonna che conterrà il logo -->
            <div class="col">
                <h1>Boolflix</h1>
            </div>
            <!-- colonna che conterrà la search bar -->
            <div class="col">
                <input type="text" v-model="Text" @keyup.enter="GetValue()">
                <button id="btn1" @click="GetValue()">cerca</button>
            </div>

        </div>
    </header>
</template>

<style lang="scss">
header{
    background-color: grey;

    .col {
        width: 50%;
    }
}
</style>