<script>
  import axios from 'axios';
  import {store} from './data/store'

  // Component
  import Header from './components/Header.vue'
  import MainContainer from './components/MainContainer.vue'


  export default {
    name: 'App',
    components: {
      Header,
      MainContainer,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(type){ 
        axios.get(store.apiUrl + type, {
          params: store.apiParams
        })
        .then(res => {
          store[type] = res.data.results
          console.log(store[type]);
        })
        .catch(err => {
          console.log(err);
        })
      },
      startSearch(){
        this.getApi('movie')
        this.getApi('tv')
      },
    },
  }
</script>

<template>
  <Header @search="startSearch" />
  <MainContainer v-if="store.movie.length > 0" title="Film" type="movie"/>
  <MainContainer v-if="store.tv.length > 0" title="Serie Tv" type="tv"/>
</template>

<style lang="scss">

@use './scss/main.scss';

</style>
