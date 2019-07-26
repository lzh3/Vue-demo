<template>
    <div class="city">
        <city-top></city-top>
        <city-search :allcity="cities"></city-search>
        <city-category :cities="cities"></city-category>
    </div>
</template>

<script>
    import {getCityData} from "@/api/data.js"
    import cityTop from "./base/cityTop"
    import citySearch from "./base/citySearch"
    import cityCategory from "./base/cityCategory"
    export default {
        name: "city",
        data(){
          return {
              cities:[],
              cityItem:[],
          }
        },
        components:{
            cityTop,
            citySearch,
            cityCategory,
        },
        created(){
            this.getData();
        },
        methods:{
            async getData(){
                await getCityData().then((res)=>{
                    this.cities=res.data.city;
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .clearfix
        content ""
        clear:both
        display block
        height:0
</style>