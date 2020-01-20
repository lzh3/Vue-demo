<template>
    <div class="container">
        <week-header></week-header>
        <ul>
            <li>
                <div class="pic">
                    <img src="../../assets/images/weekend/a.jpg" alt="">
                </div>
                <div class="txt">
                    <a>查看详情</a>
                    <h3>莲花山滑雪场</h3>
                    <p>滑雪场中海油绿色生态园哦</p>
                </div>
            </li>
            <li>
                <div class="pic">
                    <img src="../../assets/images/weekend/a.jpg" alt="">
                </div>
                <div class="txt">
                    <a>查看详情</a>
                    <h3>莲花山滑雪场</h3>
                    <p>滑雪场中海油绿色生态园哦</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import weekHeader from "./base/weekHeader"
    export default {
        data(){
            return {

            }
        },
        components:{
            weekHeader,
        }
    }
</script>

<style lang="stylus" scoped>
    ul
        background #F5F5F5
        li
            margin-bottom:10px
            padding-bottom:15px
            background #fff
            .pic
                width: 100%
                height:2.6rem
                img
                    width:100%
                    height:100%
            .txt
                position:relative
                font-size 0.28rem
                a
                    position absolute
                    right:10px
                    top:5px
                h3
                    margin:10px 5px
                    font-size 0.36rem
                p
                    margin-left:5px
</style>