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

.poster{
  width: 200px;
  height: 300px;
  background-color: grey;
}

</style>

