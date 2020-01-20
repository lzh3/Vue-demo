<template>
    <div class="rec">
        <h4 class="border-bottom">用户评论</h4>
        <div v-for="(item,index) in recommend">
            <p ref="txt">{{item.txt}} </p>
            <div class="zhankai" @click="handleHeight(index)">
                <i class="iconfont icon-xiangxia"></i>
            </div>
            <div class="pic">
                <ul @click="showPic(item)">
                    <li v-for="(pic,i) in item.pic"><img :src="pic" alt=""></li>
                </ul>
                <span class="tip" v-show="item.pic.length>6">共{{item.pic.length}}张</span>

              <gallary :pic="item.pic"
                         v-show="item.isShow"
                         @close="handleShow(item)"></gallary>
            </div>

        </div>
    </div>
</template>

<script>
    import gallary from "@/common/gallary/gallary"
    export default {
        name: "userRecommend",
        props:["recommend"],
        data(){
            return {
                ifClick:false,
            }
        },
        components:{
            gallary,
        },
        created(){
            //console.log(this.recommend);
        },
        methods:{
            handleHeight(index){
                this.$refs.txt[index].style.height=!this.ifClick?"auto":"1.36rem";
                this.ifClick=!this.ifClick;
                /*if(!this.ifClick){
                    this.$refs.txt[index].style.height="auto";
                    this.ifClick=true;
                }else{
                    this.$refs.txt[index].style.height="1.36rem";
                    this.ifClick=false;
                }*/
            },
            showPic(rec){
              console.log(rec);
              rec.isShow=true;
            },
            handleShow(rec){
                rec.isShow=false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .rec
        margin-top:0.2rem
        font-size 0.28rem
        background #fff
        h4
            position relative
            line-height 0.8rem
            padding-left:0.4rem
        h4:after
            position absolute
            left:0.16rem
            top:0.2rem
            width:0.1rem
            height:0.4rem
            content ""
            background deepskyblue
        p
            height:1.36rem
            line-height 0.32rem
            padding:0.2rem
            font-size 0.26rem
            color:rgba(2,2,2,.7)
            overflow hidden
        .zhankai
            width: 100%
            line-height 0.6rem
            color:#ccc
            text-align center
        .pic
            position relative
            height 3.65rem
            overflow hidden
            .tip
                position absolute
                bottom:0.4rem
                right:0.22rem
                padding:0.04rem 0.08rem 0.04rem 0.3rem
                border-radius 0.2rem 0 0 0.2rem
                font-size 0.22rem
                background rgba(5,5,5,.5)
                color:#fff
            ul
                display flex
                height:100%
                flex-flow: wrap
                li
                    width:30%
                    margin-bottom 0.2rem
                    margin-left:0.2rem
                    img
                        width: 100%
                        height:auto
</style>
