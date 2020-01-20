<template>
    <div class="ticket">
        <div class="title border-bottom">
            <h3 @click="skip1">门票</h3>
            <h3 @click="skip2">一日游</h3>
        </div>

        <div class="kinds" v-for="(item,index) in details.subtitle02">
            <h4 class="subtitle border-bottom" ref="action">
                <i class="iconfont icon-piaoquan"></i> 活动票</h4>
            <ul>
                <li class="border-bottom clearfix"
                    v-for="(i,j) in item.act"
                    @click="handleAct()">
                    <div class="tt">{{i}}
                        <p class="box">
                            ￥<span>{{item.price01[j]}}</span><i>起</i>
                            <i class="iconfont icon-xiangxia"
                               :style="rot"></i>
                        </p>
                    </div>
                    <div class="pay">
                        <detail-recommend
                                class="detail"
                                :details="details"
                                v-show="show1"></detail-recommend>
                    </div>

                </li>
            </ul>

        </div>

        <div class="kinds" v-for="(item,index) in details.subtitle02">
            <h4 class="subtitle border-bottom">
                <i class="iconfont icon-piaoquan"></i> 门票</h4>
            <ul class="list" ref="card" :style="styobj">
                <li class="border-bottom clearfix"
                    @click="handleTic"
                    v-for="(i,j) in item.theme">
                    <div class="tt">{{i}}
                        <p class="box">
                            ￥<span>{{item.price02[j]}}</span><i>起</i>
                            <i class="iconfont icon-xiangxia"></i>
                        </p>

                    </div>
                    <div class="pay">
                        <detail-recommend
                                class="detail"
                                :details="details"
                                v-show="show2"></detail-recommend>
                    </div>
                </li>
            </ul>
            <div class="more"
                 @click="handleH"
                 v-if="isShow"
                 v-show="item.theme.length>2">
                查看剩余产品<i class="iconfont icon-xiangxia" ></i>
            </div>
        </div>

        <div class="kinds" v-for="(item,index) in details.subtitle02">
            <h4 class="subtitle border-bottom" ref="door">
                <i class="iconfont icon-piaoquan"></i> 一日游</h4>
            <ul>
                <li class="border-bottom clearfix" @click="handleOne">
                    <div class="tt">{{item.one}}
                        <p class="box">
                            ￥<span>188</span><i>起</i>
                            <i class="iconfont icon-xiangxia"></i>
                        </p>
                    </div>
                    <div class="pay">
                        <detail-recommend
                                class="detail"
                                :details="details"
                                v-show="show3"></detail-recommend>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import detailRecommend from "./detailRecommend"
    export default {
        name: "detailTicket",
        props:["details"],
        data(){
            return {
                isShow:true,
                show1:false,
                show2:false,
                show3:false,
                styobj:{
                    height:"1.6rem",
                    overflow:"hidden"
                },
                rot:{
                    transform:"rotate(0deg)"
                }
            }
        },
        components:{
            detailRecommend,
        },
        methods:{
            handleH(){
                this.styobj.height="auto"
                this.isShow=false;
            },
        //    控制recommend组件显示
            handleAct(){
                this.show1=!this.show1;
                this.rot.transform = 'rotate('+this.show1*180+'deg)';

            },
            handleTic(){
                this.show2=!this.show2;
                this.styobj.height="auto"
            },
            handleOne(){
                this.show3=!this.show3;
            },
            skip1(){
                let t=this.$refs.action[0].offsetTop;
                document.documentElement.scrollTop=t-40;
            },
            skip2(){
                let t=this.$refs.door[0].offsetTop;
                document.documentElement.scrollTop=t-40;
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .ticket

        padding-top:0.2rem
        background rgb(244,244,244)
        .title
            display flex
            background #fff
            h3
                flex:1
                line-height 0.8rem
                font-size 0.32rem
                text-align:center
        .kinds
            padding:0 0.2rem
            background: #fff
            font-size:0.3rem
            .subtitle
                line-height 0.8rem
                i
                    color:deepskyblue
            ul

                li
                    line-height 0.8rem
                    .tt
                        position:relative
                        p
                            position:absolute
                            top:0
                            right:0
                            color:orange
                            span
                                font-size 0.44rem
                            i
                                display inline-block
                                font-size 0.24rem
                                color:#ccc

            .more
                line-height:0.8rem
                text-align center

</style>