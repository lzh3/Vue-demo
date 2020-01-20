<template>
    <div class="top">
        <div class="container single" v-show="isShow" @click="back">
            <div class="icon icon-bg"><i class="iconfont icon-xiangzuo"></i></div>
        </div>
        <div class="container cont-bg" :style="styObj" v-show="!isShow">
            <div class="icon icon-l"  @click="back">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <h3 class="title">景点详情</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailTop",
        data() {
            return {
                isShow: true,
                styObj: {
                    opacity: 0,
                },
            }
        },
        created() {
            this.handScroll();
        },
        methods: {
            handScroll() {
                let st = document.documentElement.scrollTop;
                if (st > 40) {
                    this.isShow = false;
                    this.styObj.opacity = (st - 40) / 100;
                } else {
                    this.isShow = true;
                }
            },
            back(){
                this.$router.go(-1);
            }
        },
        activated() {
            window.addEventListener("scroll", this.handScroll)
        },
        deactivated() {
            window.removeEventListener("scroll", this.handScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    .cont-bg
        background #7a83ee
        color: #fff
    .container.single
        top:0.1rem
        left:0.1rem
    .container
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 0.9rem
        font-size: 0.32rem
        z-index: 88
        /*color:#fff*/

        .icon
            width: 0.9rem
            height: 100%
            line-height 0.9rem
            border-radius 50%
            text-align center

        .icon-bg
            background rgba(3, 3, 3, .3)
            color: #fff

        .icon-l
            float: left

        .title
            float: left
            position: absolute
            left: 50%
            line-height .9rem
            margin-left: -0.64rem


</style>