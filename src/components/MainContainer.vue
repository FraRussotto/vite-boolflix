<script>
import {store} from '../data/store';
import MovieContainer from './MovieContainer.vue';
import SerieContainer from './SerieContainer.vue';

export default {
    name: 'MainContainer',
    component: {
        MovieContainer,
        SerieContainer
    },
    data() {
        return {
            store
        };
    },
}
</script>

<template>
  <MovieContainer />
</template>

<style>
</style>