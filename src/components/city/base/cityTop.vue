<template>
    <div class="top clearfix">
        <p @click="goBack()"><i class="iconfont icon-xiangzuo"></i></p>
        <h2>选择城市</h2>
    </div>
</template>

<script>
    export default {
        name: "cityTop",
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .top
        position relative
        height:0.8rem
        line-height 0.8rem
        background rgb(0,188,213)
        color:#fff
        text-align center
        p
            position absolute
            width:0.8rem
            height:100%
            left:0
            top:0
            i
                position: relative
                display block
                width:0.5rem
                height:0.54rem
                margin:0 auto
                font-size 0.4rem
        h2
            width:4rem
            margin:0 auto
            font-size:0.34rem

</style>