<template>
  <div class="container" @click="closeGallary">
    <swiper
      :options="swiperOption"
      class="swiper-container">
      <!-- slides -->
      <swiper-slide class="pic-item" v-for="(item,index) in pic" :key="index">
        <img class="picture" :src="item" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "gallary",
    props: ["pic"],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
          },
          observeParents: true,
          observer: true,
        },
      }
    },
    methods: {
      closeGallary() {
        this.$emit("close");
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    position: fixed
    left: 0
    top: 0
    bottom: 0
    right: 0
    width: 100%
    height: 100%
    z-index 88888
    background rgba(6, 6, 6, .8)
    .swiper-container
      position absolute
      top: 50%
      margin-top: -2rem
      width: 100%
      height: 4.4rem
      overflow: visible
      .pic-item
        width: 100%
        height: 100%
        background #fff
        .picture
          width: 100%
          height: 100%
      .swiper-pagination
        position absolute
        bottom: -0.5rem
        color: #fff

</style>
