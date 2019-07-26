<template>
    <div class="love">
        <h3><i class="iconfont icon-xihuan"></i><span>猜你喜欢</span></h3>
        <ul class="contentList">
            <li class="clearfix" v-for="(item,index) in infoArr" :key="index">
                <div class="pic">
                    <img :src="item.url" alt="">
                    <p class="tip">
                        {{item.tip}}
                    </p>
                </div>
                <div class="desc">
                    <h3>{{item.title}}</h3>
                    <div class="star">
                        <p>
                            <i class="iconfont icon-xingxing1" v-for="s in 5"></i>
                            <span class="ok" :style="item.score | filterScore">
                                <i class="iconfont icon-xingxing2" v-for="i in 5"></i>
                            </span>
                        </p>
                        <p class="commend"><span>{{item.commend}}</span>条评论</p>
                    </div>
                    <p class="addr">
                        <span class="price"><i>{{item.price | filterPrice}}</i>&nbsp;起</span>
                        <span class="address">{{item.address}}</span>
                    </p>
                </div>
                <div class="end">
                    {{item.desc}}
                </div>
            </li>
        </ul>
        <div class="more border-top">
            <a href="">查看更多</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "love",
        props:["infoArr"],
        data(){
            return {

            }
        },

        filters:{
            filterPrice(val){
                return "￥"+val;
            },
            filterScore(val){
                return {
                    width:(val*0.32)+"rem"
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .love
        margin-top:1rem
        padding-top:0.2rem
        background:rgba(245,245,245,.7)
        h3
            width:100%
            height:0.8rem
            line-height 0.8rem
            padding-left:0.2rem
            font-size:0.4rem
            background:#fff;
            i
                position relative
                top:-0.06rem
                font-size 0.36rem
                color: #cc393a
                vertical-align top
        .contentList
            background #fff
            .clearfix:after
                content:""
                display block
                clear:both
                height 0
            li
                padding-left:0.2rem
                font-size 0.24rem
                div
                    float:left
                .pic
                    position relative
                    width:2rem
                    height:2rem
                    img
                        width:100%
                        height:100%
                    .tip
                        position absolute
                        top:0
                        left:0
                        width:1.02rem
                        heigth:0.3rem
                        line-height 0.3rem
                        padding:0.05rem 0
                        border-bottom-right-radius 0.2rem
                        background-color:rgb(248,166,20)
                        font-size 0.2rem
                        text-indent 0.02rem

                .desc
                    width:60%
                    padding-left:0.2rem
                    text-align left
                    h3
                        margin-top:0.1rem
                        padding:0
                        font-size:0.4rem
                    .star
                        display:flex
                        width:100%
                        p
                            flex:1
                            position relative
                            .ok
                                position absolute
                                left:0
                                top:0
                                color:rgb(255,174,49)
                                overflow: hidden
                    .addr
                        display flex
                        margin-top:0.5rem
                        span
                            flex:1
                            i
                                font-size 0.4rem
                                color: #cc3026
                        .address
                            text-align right
                .end
                    width: 100%
                    margin:0.36rem 0 0 2.2rem
                    color:rgb(249,176,183)

        .more
            background #fff
            a
                display block
                width: 100%
                line-height 0.8rem
                font-size 0.28rem
                color:skyblue
                text-align center

</style>