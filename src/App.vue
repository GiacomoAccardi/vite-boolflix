<script>
import AppHeader from './components/AppHeader.vue'
//import { store } from './store';

export default {
  components: {
    AppHeader,
  },
  data() {
    return{
        //store
    }
  }
}
</script>

<template>
  <div>
    <AppHeader/>
  </div>
</template>

<style lang="scss">
  @import "./styles/generals.scss";
</style>
