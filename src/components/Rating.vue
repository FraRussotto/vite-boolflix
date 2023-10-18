<script>
import { store } from '../data/store';

export default {
  name: 'Rating',
  props:{
    vote: Number
  },
  data(){
    return{
      store
    }
  },
  computed:{
    calcVote(){
      return this.vote * 10;
    },
  },
}

</script>

<template>
  <span>Valutazione: </span>
  <div class="voteContainer">

    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>
    <i class="fa-star fa-regular"></i>

    <div class="fill" :style="`width:${calcVote}%`">
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
      <i class="fa-star fa-solid"></i>
    </div>

  </div>

</template>


<style lang="scss" scoped>
  .voteContainer{
    position: relative;
    width: 90px;
    display: inline-block;
    .fill{
      position: absolute;
      display: flex;
      top: 2.6px;
      left: 0px;
      color: red;
      overflow: hidden;
    }
  }
</style>