<script>
  import axios from 'axios';
  import {store} from './data/store'

  // Component
  import Header from './components/Header.vue'
  import MainContainer from './components/MainContainer.vue'

  export default {
    nome: 'App',
    components: {
      Header,
      MainContainer
    },
    data(){
      return{

      }
    }
  }
</script>

<template>
  <Header />
  <MainContainer />
</template>

<style lang="scss">

@use './scss/main.scss';

</style>
