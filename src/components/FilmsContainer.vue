<script>
import {store} from '../data/store'
import Card from './Card_fr.vue'

export default {
  name: 'FilmsContainer',
  components: {
    Card
  },
  data(){
      return{
        store
      }
  }

}
</script>

<template>
  <Card />
</template>

<style lang="scss">

@use '../scss/variables' as *;



</style>

