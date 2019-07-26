<template>
    <div class="homeContent">
        <home-top></home-top>
        <home-swiper :imgArr="homeswiper"></home-swiper>
        <home-kinds :dataArr="homekinds"></home-kinds>
        <home-love :infoArr="homelove"></home-love>
        <home-week :infoArr="homeweek"></home-week>
    </div>
</template>

<script>
    import homeTop from "./base/homeTop.vue"
    import homeSwiper from "./base/homeSwiper"
    import homeKinds from "./base/homeKinds"
    import homeLove from "./base/homeLove"
    import homeWeek from "./base/homeWeek"
    export default {
        name: "home",
        data(){
            return {
                homeswiper:[],
                homekinds:[],
                homelove:[],
                homeweek:[]
            }
        },
        components:{
            homeTop,
            homeSwiper,
            homeKinds,
            homeLove,
            homeWeek,
        },
        created(){
            this.$axios.get("/static/mork/data.json").then((res)=>{
                console.log(res.data);
                let [ {banner},{item},{love},{where} ]=res.data
                this.homeswiper=banner;
                this.homekinds=item;
                this.homelove=love;
                this.homeweek=where;
            })
        }
    }
</script>

<style lang="stylus" scoped>


</style>
