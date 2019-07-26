<template>
    <div class="kinds">
        <swiper :options="swiperOption" class="swiper-container">
            <!-- slides -->
            <swiper-slide class="swiper-slide" v-for="(arr,index) in filterInfo" :key="index">
                <ul class="list">
                    <li v-for="(item,index) in arr" :key="index">
                        <div class="pic">
                            <img :src="item.url" alt="">
                        </div>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div class="swiper-bottom border-top clearfix">
            <p class="border-right"><a href=""><i class="iconfont icon-icon-test"></i><span>定位</span></a></p>
            <p><a href=""><i class="iconfont icon-dianzan"></i><span>推荐榜单</span></a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeKinds",
        props:["dataArr"],
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true,
                    allowTouchMove: true,
                },
            }
        },
        computed:{
            filterInfo(){
                let infoArr=[];
                let page;
                this.dataArr.forEach((item,index)=>{
                    page=Math.floor(index/8);
                     if(!infoArr[page]){
                         infoArr[page]=[];
                     }
                    infoArr[page].push(item)
                });
                return infoArr;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .kinds
        height:3.4rem
        padding:0.1rem 0 0
        .swiper-container
            width: 100%
            height: 100%
            .swiper-slide
                width: 100%
                height: 100%
                .list
                    display flex
                    flex-wrap wrap
                    align-items top
                    align-content flex-start
                    width: 100%
                    height: 100%
                    li
                        width:25%
                        height:1.6rem
                        margin:0
                        padding:0
                        text-align center
                        .pic
                            width:1.05rem
                            height 1.05rem
                            margin:0 auto
                            img
                                width:100%
                                height: 100%
                        p
                            width:90%
                            margin:0.1rem auto 0
                            font-size 0.28rem
                            text-align center
            .swiper-pagination
                bottom:0.02rem
                >>>span
                    width:0.12rem
                    height:0.12rem
        .swiper-bottom
            display flex
            width: 100%
            height:1rem
            p
                flex:1
                height: 100%
                text-align center
                a
                    display block
                    line-height 1rem
                    font-size 0.28rem
                    color:#111
                    i
                       color:#bbb
                span
                    margin-left:0.06rem

        .clearfix:after
            content:""
            clear:both
            display:block
            height:0
</style>