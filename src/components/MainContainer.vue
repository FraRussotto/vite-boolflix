<script>
import {store} from '../data/store';
import Card from './Card.vue';

export default {
    name: 'MainContainer',
    props: {
      title: String,
      type: String
    },
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
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="row row-cols-4 p-0">
        <Card class="card_fr" v-for="item in store[type]" :key="item.id" :item="item" >
          
        </Card>
    </div>
  </div>
</template>

<style>
</style>