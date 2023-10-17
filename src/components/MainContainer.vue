<script>
import {store} from '../data/store';
import Card from './Card.vue';

export default {
    name: 'MainContainer',
    components: {
      Card
    },
    data() {
        return {
            store
        };
    },
}
</script>

<template>
  <div class="container my-3">
    <div class="row row-cols-3">
      <div class="card" v-for="item in store.listResults" :key="item.id">
        
          <div class="card-body">
            <h4 class="card-title">{{ item.title }}</h4>
            <h6 class="card-title">{{ item.original_title }}</h6>
            <p class="card-text">Language: {{ item.original_language }}</p>
            <p class="card-text">{{ item.overview }}</p>
            <p class="card-text">Rate: {{ item.vote_average }}</p>

          </div>

      </div>

    </div>
  </div>
</template>

<style>
</style>