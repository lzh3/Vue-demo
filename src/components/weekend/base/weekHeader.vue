<template>
    <div class="header">
        <div class="cont">
            <div class="back" @click="back"><i class="iconfont icon-xiangzuo"></i></div>
            <div class="title"><span>京城周末撒欢</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "weekHeader",
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cont
        display flex
        width:100%
        height:0.8rem
        line-height 0.8rem
        background #00BCD4
        font-size 0.32rem
        color:#fff
        .back
            width:0.8rem
            height:0.8rem
            text-align center
            i
                font-size 0.48rem
        .title
            flex:2
            text-align center
            span
                margin-left:-48px
</style>