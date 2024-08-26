
<script>
import { store } from '../store';

export default{
    data() {
        return {
            store
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
                <input type="text">
                <button>cerca</button>
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