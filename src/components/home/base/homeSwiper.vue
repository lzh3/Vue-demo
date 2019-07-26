<template>
    <div class="swiper">
        <swiper :options="swiperOption" class="swiper-container">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in imgArr" :key="index">
                <a href=""><img :src="item" alt=""></a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "homeSwiper",
        props:["imgArr"],
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true,
                    autoplay:true,
                    allowTouchMove: true,
                },
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .swiper-container
        width:100%
        .swiper-wrapper
            .swiper-slide
                width: 100%
                height: 100%
                a
                    display:block
                    width: 100%
                    height: 100%
                    img
                        width: 100%
                        height: 100%
        .swiper-pagination-bullets
            >>>span.swiper-pagination-bullet
                background:#333
            >>>span.swiper-pagination-bullet-active
                background #fff



</style>