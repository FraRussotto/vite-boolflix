<script>
import {store} from '../data/store';
import FilmsContainer from './FilmsContainer.vue';
import SerieContainer from './SerieContainer.vue';

export default {
    name: 'MainContainer',
    components: {
      FilmsContainer,
      SerieContainer,
    },
    data() {
        return {
            store
        };
    },
}
</script>

<template>
  <FilmsContainer />
  <SerieContainer />
</template>

<style>
</style>