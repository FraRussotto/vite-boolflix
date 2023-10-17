<script>
import {store} from '../data/store'

export default {
  name: 'Card',
  data(){
      return{
        store
      }
  }

} 
</script>

<template>
  <div class="col">
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

