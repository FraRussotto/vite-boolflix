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

      }
    },
    methods:{
      getApi(){ 
        axios.get(store.apiUrl, {
          params: store.apiParams
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
      }
    },
    mounted(){
    }
  }
</script>

<template>
  <Header @search="getApi" />
  <MainContainer />
</template>

<style lang="scss">

@use './scss/main.scss';

</style>
