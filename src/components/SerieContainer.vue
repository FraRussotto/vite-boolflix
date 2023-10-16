<script>
import {store} from '../data/store'
import Card from './Card_fr.vue'

export default {
  name: 'SerieContainer',
  components: {
    Card,
  },
  data(){
      return{
        store
      }
  }

}
</script>

<template>
  <h1>serie</h1>
</template>

<style lang="scss">

@use '../scss/variables' as *;

</style>