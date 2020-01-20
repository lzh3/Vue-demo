<template>
  <div class="pic"
       @click.capture="handleShow(details)">
    <div class="img">
      <img :src="details.main_pic" alt="">
    </div>
    <div class="detail">
      <p class="num"><i class="iconfont icon-tupian"></i>{{3}}</p>
      <p class="title">{{details.title}}({{details.area}})</p>
    </div>

    <gallary
      @close="closeGallary()"
      v-show="details.isShow"
      :pic="details.pic"></gallary>
  </div>
</template>

<script>
  export default {
    name: "detailPic",
    props: ["details"],
    data() {
      return {
        flag:false,
        x:1
      }
    },
    created(){

    },
    methods: {
      handleShow(item) {
        this.details.isShow=true;
      },

      closeGallary() {
        this.details.isShow=false;
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .pic
    position: relative
    font-size: 0.28rem
    .img
      height 4.4rem
      img
        width: 100%
        height: 100%
    .detail
      position: absolute
      bottom: 0.1rem
      left: 0.3rem
      color: #fff
      p
        margin: 0.2rem 0
      .num
        width: 1rem
        padding: 0.06rem 0
        background rgba(2, 2, 2, .5)
        border-radius: 10px
        text-align center
      .title
        font-size 0.32rem
</style>
