<script>
import Rating from './Rating.vue'

export default {
  name: 'Card',
  props:{
    item: Object
  },
  data(){
      return{
        flags:['en', 'it'],
      }
  },

  components:{
    Rating
  },

  methods:{
      getImagePath(img){
        return new URL(`../assets/${img}.png`, import.meta.url).href
      }
    }

} 
</script>

<template>
  <div class="card_fr">
    <div class="card_body">

      <div class="card_image">
        <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w400/${item.poster_path}`" :alt="item.title || item.name">
        <img v-else src="/No-Image-Placeholder.svg.png" alt="">
      </div>

      <div class="card_hover" :class="{ noPath: !item.poster_path }">
        <div class="titles">
          <h4 class="card_title">{{ item.title || item.name}}</h4>
          <h6 class="card_title">{{ item.original_title || item.original_name}}</h6>
        </div>
        <img v-if="flags.includes(item.original_language)" :src="getImagePath(item.original_language)" class="language_flag">
        <p v-else class="card_text">Lingua: {{ item.original_language }}</p>
        <p class="card_text description">{{ item.overview }}</p>
        <Rating :vote="item.vote_average"/>
      </div>

    </div>
  </div>
</template>

<style lang="scss">

@use '../scss/variables' as *;

.card_fr{
  width: 300px;
  height: 450px;
  margin-bottom: 20px;
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.025);
  }
  .card_body{
    position: relative;
    width: 100%;
    height: 100%;
    .card_image{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  .card_hover{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    .titles{
      height: 25%;
    }
    .language_flag{
      width: 30px;
      padding-bottom: 10px;
    }
    .description{
      height: 55%;
      padding-right: 20px;
      overflow: scroll;
    }
    .rating{
      height: 10%;
    }
    &.noPath{
      display: block;
    }
  }
  &:hover .card_hover{
    display: block;
  }
}
}
</style>

