<template>
    <div class="category">
        <div class="current">
            <h3>当前城市：</h3>
            <p><span class="border">{{$store.state.selectCity}}</span></p>
        </div>
        <div class="hotCity">
            <h3>热门城市：</h3>
            <ul class="clearfix">
                <li class="border"
                    v-for="(item,index) in hotCities"
                    @click="getCity(item)"
                    :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="all" v-for="(cityitem, index) in cities" :key="index">
            <h3>{{cityitem.initial}}</h3>
            <ul class="list">
                <li class="list-item"
                    v-for="(item,i) in cityitem.list"
                    @click="getCity(item.name)"
                    :key="i">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cityCategory",
        props: ["cities"],
        data(){
            return {
                hotCities:[
                    "北京",
                    "上海",
                    "深圳",
                    "杭州",
                    "武汉",
                    "成都",
                    "长沙",
                    "南京",
                    "广州",
                ]
            }
        },
        methods:{
            getCity(city){
                this.$store.commit("saveCity",city);
                this.$router.go(-1);
            }
        }


    }
</script>

<style lang="stylus" scoped>
    .border-bottom:before
        border-color: #aaa
    .category
        font-size 0.28rem
        text-indent 0.1rem
        h3
            height: 0.48rem
            line-height 0.48rem
            background: rgb(245,245,245)
            font-size 0.26rem
        span
            padding: 0.04rem 0.2rem
        .current
            p
                height: 0.8rem
                line-height: 0.8rem
                background #fff
        .hotCity
            ul
                li:before
                    border-bottom:none
                    border-right: none
                li
                    float left
                    width: 33.3%
                    height:0.8rem
                    line-height: 0.8rem
                    text-align center
        .list
            background #fff
            .list-item
                height: 0.6rem
                line-height 0.6rem
</style>