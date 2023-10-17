<script>
import {store} from '../data/store'

export default {
  name: 'Card',
  props:{
    item: Object
  },
  data(){
      return{
        store 
      }
  }

} 
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="card-image">
        <img :src="`https://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
      </div>
            <h4 class="card-title">{{ item.title || item.name}}</h4>
            <h6 class="card-title">{{ item.original_title || item.original_name}}</h6>
            <p class="card-text">Language: {{ item.original_language }}</p>
            <p class="card-text">{{ item.overview }}</p>
            <p class="card-text">Rate: {{ item.vote_average }}</p>
          </div>
  </div>
</template>

<style lang="scss">

@use '../scss/variables' as *;

img{
  width: 100%;
}
</style>

