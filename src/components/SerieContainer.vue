<script>
import {store} from '../data/store'
import Card from './Card_fr.vue'

export default{
  name: 'SerieContainer',
  component: {
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
  
</template>

<style lang="scss">

@use '../scss/variables' as *;

</style>