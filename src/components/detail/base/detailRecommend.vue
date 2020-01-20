<template>
    <div class="recommend">
        <slot></slot>
        <ul class="list">
            <li class="list-item border-bottom" v-for="(item,index) in details.subtitle01" :key="index">
                <div class="intro">
                    <h4>{{item}}</h4>
                    <p class="time"><i class="iconfont icon-gou"></i>   {{details.date}}</p>
                    <p class="tip"><span class="border">随时退</span></p>
                </div>
                <div class="pay">
                    <p class="price">￥<span>{{details.price_rec[index]}}</span></p>
                    <p class="order">预定</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "detailRecommend",
        props:["details"],
    }
</script>

<style lang="stylus" scoped>
    .recommend
        margin-top:0.2rem
        .title
            line-height 0.8rem
            padding-left:0.4rem
            font-size 0.32rem
            background #fff
            span
                display inline-block
                width:0.36rem
                height: 0.36rem
                line-height 0.32rem
                text-align center
                background red
                border-radius 50%
                i
                    font-size 0.26rem
                    color:#fff
        .list
            background #fff
            padding-left 0.4rem
            .list-item:last-child:before
                border:none
            .list-item
                display flex
                padding:0.2rem 0
                font-size 0.28rem
            .intro
                flex:3
                h4
                    line-height 0.4rem
                    font-size 0.32rem
                .time
                    line-height 0.4rem
                    margin-bottom:0.1rem
                    color:#aaa
                    i
                        font-size 0.24rem
                        color:deepskyblue
                .tip
                    span
                        position:relative
                        font-size 0.26rem
                        color:deepskyblue
                    span:before
                        border-color:deepskyblue
            .pay
                flex:1
                padding-left:0.2rem
                .price
                    margin-top:0.2rem
                    color:orange
                    text-indent 0.4rem
                    span
                        font-size:0.36rem
                .order
                    width:1.8rem
                    height:0.4rem
                    line-height:0.4rem
                    padding:0.12rem 0
                    background orange
                    border-radius 5px
                    text-align center
                    color:#fff


</style>