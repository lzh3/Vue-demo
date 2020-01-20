<template>
    <div class="info">
        <div class="container">
            <div class="border-right box">
                <p class="score title"><span>{{details.commend}}</span>分 超赞</p>
                <p class="grey"><span>{{details.num}}</span>条评论 {{details.gonglue}}条攻略</p>
                <i class="iconfont  icon-xiangyou"></i>
            </div>
            <div class="info box">
                <p class="title">景点简介</p>
                <p class="grey">开放时间、贴士</p>
                <i class="iconfont  icon-xiangyou"></i>
            </div>
        </div>

        <p class="address border-top">
            <i class="iconfont  icon-icon-test"></i>
            <i class="iconfont icon-xiangyou you"></i>
            {{details.address}}</p>
    </div>
</template>

<script>
    export default {
        name: "detailInfo",
        props:["details"],
        data(){
            return {

            }
        },

    }
</script>

<style lang="stylus" scoped>
    .info
        background: #fff
    .address
        position relative
        width:100%
        height:0.8rem
        line-height 0.8rem
        padding-left:0.12rem
        font-size 0.3rem
        i
            color:#bbb
        .you
            position absolute
            right:0.34rem

    .container
        display flex
        font-size 0.28rem
        padding:0.1rem 0.12rem
        .info
            padding-left:0.2rem
            margin-top:0.05rem
        .box
            flex:1
            position: relative
            p
                line-height 0.44rem
            .score
                color:orange
                span
                    font-size 0.5rem
            .title
                font-size 0.3rem
            .grey
                color:#ccc
            i
                position: absolute
                right:0.1rem
                top: 50%
                margin-top: -0.16rem
                color:#bbb
</style>