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
    <Card />
  </div>
</template>

<style>
</style>