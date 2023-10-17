<script>
import {store} from '../data/store'

export default {
  name: 'Header',
  data(){
    return{
      store
    }
  }

}
</script>

<template>
  <div class="top_bar d-flex justify-content-between">
    <div class="logo">
      <img src="/logo-boolflix.png" alt="logo">
    </div>

    <div class="finder d-flex">
      <input @keypress.enter="$emit('search')" v-model="store.apiParams.query" type="text" placeholder="Inserisci il titolo">
      <button @click="$emit('search')" class="btn btn-danger ms-3">Cerca</button>
      <select class="form-select ms-3 " aria-label="default selec example">
        <option value="0">All</option>
        <option value="0">Film</option>
        <option value="0">Serie Tv</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss">

@use '../scss/variables' as *;

  .top_bar{
    width: 100%;
    height: 80px;
    background: $bg_Header;
    .logo{
      widows: 100px;
      height: 100%;
      padding: 10px;
      img{
        height: 100%;
      }
    }
    .finder{
      padding: 20px;
    }

  }
</style>