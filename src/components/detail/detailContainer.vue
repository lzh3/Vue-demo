<template>
    <div class="container">
        <detail-top ></detail-top>
        <detail-pic :details="details"></detail-pic>
        <detail-info :details="details"></detail-info>
        <detail-recommend :details="details">
            <h3 class="title border-bottom">
                <span><i class="iconfont icon-dianzan"></i></span>
                {{details.subtitle}}
            </h3>
        </detail-recommend>
        <detail-ticket :details="details"></detail-ticket>
        <user-rec :recommend="recommend"></user-rec>
    </div>
</template>

<script>
    import {getDetails} from "../../api/data";
    import detailTop from "./base/detailTop"
    import detailPic from "./base/detailPic"
    import detailInfo from "./base/detailInfo"
    import detailRecommend from "./base/detailRecommend"
    import detailTicket from "./base/detailTicket"
    import userRec from "./base/userRecommend"
    import {getRecommend} from "../../api/data";

    export default {
        name: "detailContainer",
        data(){
            return {
                details:{},
                ticket:{},
                recommend:[],
            }
        },
        components:{
            detailTop,
            detailPic,
            detailInfo,
            detailRecommend,
            detailTicket,
            userRec
        },
        created(){
            this.getData();
            this.rec();
        },
        methods:{
            async getData(){
               await getDetails(this.$route.params.id).then((res)=>{
                   this.details=res.data;
               })
            },
            async rec(){
                await getRecommend().then((res)=>{
                    //console.log(res.data);
                    this.recommend=res.data;
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.container
    background: rgb(244,244,244)
</style>