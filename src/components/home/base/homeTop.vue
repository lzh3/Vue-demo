<template>
    <div class="top ">
        <div class="xiangzuo"><i class="iconfont icon-xiangzuo"></i></div>
        <div class="sear">
            <input type="text" placeholder="请输入城市/景点:">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <router-link to="/city" tag="div" class="address">
            <span>{{$store.state.selectCity}}</span>
            <i class="iconfont icon-xiangxia"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "homeTop"
    }
</script>

<style lang="stylus" scoped>
.top
    display: flex
    height:0.88rem
    background #00bcd4
    .xiangzuo
        width:0.88rem
        height:100%
        text-align:center
        i
            position relative
            vertical-align: middle
            bottom:0.2rem
            font-size 0.332rem
            color:#fff;
    .sear
        position: relative
        flex:1
        height:0.88rem
        line-height: 0.88rem
        input
            position relative
            bottom:0.32rem
            width:95%
            height:0.56rem
            line-height 0
            border-radius 0.1rem
            text-indent 0.4rem
            border: 1px solid skyblue;
        i
            position absolute
            left:0.06rem
            top:0
            color:#ddd
    .address
        height: 100%
        padding-right:0.1rem
        line-height 0.88rem
        color:#fff;
        span
            float left
            font-size 0.24rem
        i
            float left
            font-size 0.12rem
</style>