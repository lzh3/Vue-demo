<template>
    <div class="where">
        <h4>周末去哪儿</h4>
        <ul class="list">
            <router-link
                    tag="li"
                    :to="{name:'weekend',params:{id:index}}"
                    v-for="(item,index) in infoArr"
                    :key="index">
                <div class="pic">
                    <img :src="item.url" alt="">
                </div>
                <div class="txt">
                    <h5>{{item.title}}</h5>
                    <p>{{item.intro}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "homeWeek",
        props:["infoArr"],
        data(){
            return {
                //infoArr:[]
            }
        },
        /*created(){
            this.$axios.get("/static/mork/data.json").then((res)=>{
                this.infoArr=res.data[3].where;
            })
        }*/
    }
</script>

<style lang="stylus" scoped>
    .where
        h4
            padding-left:0.2rem
            line-height 0.6rem
            font-size 0.28rem
            background rgb(245,245,245)
        .list
            li
                .pic
                    width: 100%
                    img
                        width: 100%
                        height:100%
                .txt
                    padding:0.3rem 0.2rem
                    h5
                        font-size 0.24rem
                    p
                        margin-top:0.2rem
                        font-size 0.28rem
</style>