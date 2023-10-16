<script>
  import axios from 'axios';
  import {store} from './data/store'

  // Component
  import Header from './components/Header.vue'
  import MainContainer from './components/MainContainer.vue'
  import FilmsContainer from './components/FilmsContainer.vue';
  import SerieContainer from './components/SerieContainer.vue';


  export default {
    name: 'App',
    components: {
      Header,
      MainContainer,
      FilmsContainer,
      SerieContainer
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
